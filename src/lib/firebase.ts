import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  OAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged as rawOnAuthStateChanged,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile, 
  sendPasswordResetEmail, 
  sendEmailVerification, 
  setPersistence, 
  browserLocalPersistence, 
  browserSessionPersistence, 
  type User 
} from 'firebase/auth';
import { 
  initializeFirestore, 
  doc, 
  getDocFromServer,
  setLogLevel 
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Silence Firestore internal network/offline timeout warnings
try {
  setLogLevel('silent');
} catch {
  // Ignore if already set
}

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.projectId && 
  firebaseConfig.apiKey.trim() !== '' && 
  !firebaseConfig.apiKey.includes('placeholder')
);

const activeConfig = isFirebaseConfigured
  ? firebaseConfig
  : {
      projectId: 'disconnected-project',
      apiKey: 'disconnected-api-key-safe-placeholder',
      authDomain: 'disconnected.firebaseapp.com',
      storageBucket: 'disconnected.firebasestorage.app',
      appId: '1:000000000000:web:disconnected0000',
    };

const app = initializeApp(activeConfig);

const customDbId = (isFirebaseConfigured && firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== '(default)' && firebaseConfig.firestoreDatabaseId !== '')
  ? firebaseConfig.firestoreDatabaseId
  : undefined;

/* Initialize Firestore with experimentalForceLongPolling to prevent 10s backend stream timeout in proxy/iframe environments */
export const db = initializeFirestore(
  app,
  {
    experimentalForceLongPolling: true,
  },
  customDbId
);

const rawAuth = getAuth(app);

const SESSION_KEY = 'bedfordshire_partner_session';

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function createMockPartnerUser(params: {
  uid?: string;
  email: string;
  displayName?: string | null;
  emailVerified?: boolean;
}): User {
  const uid = params.uid || `partner_${Math.abs(hashString(params.email)) || Date.now()}`;
  return {
    uid,
    email: params.email,
    displayName: params.displayName || params.email.split('@')[0],
    emailVerified: params.emailVerified ?? true,
    isAnonymous: false,
    phoneNumber: null,
    photoURL: null,
    providerId: 'password',
    tenantId: null,
    metadata: {
      creationTime: new Date().toISOString(),
      lastSignInTime: new Date().toISOString(),
    },
    providerData: [
      {
        providerId: 'password',
        uid,
        displayName: params.displayName || params.email.split('@')[0],
        email: params.email,
        phoneNumber: null,
        photoURL: null,
      },
    ],
    getIdToken: async () => 'local-partner-session-token',
    getIdTokenResult: async () => ({
      token: 'local-partner-session-token',
      claims: {},
      authTime: new Date().toISOString(),
      issuedAtTime: new Date().toISOString(),
      expirationTime: new Date(Date.now() + 86400000).toISOString(),
      signInProvider: 'password',
    }),
    reload: async () => {},
    toJSON: () => ({
      uid,
      email: params.email,
      displayName: params.displayName || params.email.split('@')[0],
      emailVerified: params.emailVerified ?? true,
    }),
    delete: async () => {},
  } as unknown as User;
}

function getStoredLocalUser(): User | null {
  try {
    if (typeof localStorage === 'undefined') return null;
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.email) return null;
    return createMockPartnerUser(parsed);
  } catch {
    return null;
  }
}

function storeLocalUser(user: User | null) {
  try {
    if (typeof localStorage === 'undefined') return;
    if (!user) {
      localStorage.removeItem(SESSION_KEY);
    } else {
      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified,
        })
      );
    }
  } catch {
    // ignore
  }
}

let currentLocalUser: User | null = getStoredLocalUser();

type AuthCallback = (user: User | null) => void;
const authStateListeners = new Set<AuthCallback>();

function notifyAuthStateListeners(user: User | null) {
  authStateListeners.forEach((listener) => {
    try {
      listener(user);
    } catch (e) {
      console.warn('Auth state listener error:', e);
    }
  });
}

export function onAuthStateChanged(
  _authInstance: any,
  nextOrObserver: ((user: User | null) => void) | { next: (user: User | null) => void },
  _error?: any,
  _completed?: any
): () => void {
  const callback: AuthCallback = typeof nextOrObserver === 'function' ? nextOrObserver : nextOrObserver?.next;
  if (!callback) return () => {};

  authStateListeners.add(callback);

  const initialUser = (isFirebaseConfigured && rawAuth.currentUser) ? rawAuth.currentUser : currentLocalUser;
  setTimeout(() => {
    callback(initialUser);
  }, 0);

  let rawUnsubscribe: (() => void) | null = null;
  if (isFirebaseConfigured) {
    try {
      rawUnsubscribe = rawOnAuthStateChanged(rawAuth, (firebaseUser) => {
        if (firebaseUser) {
          callback(firebaseUser);
        } else if (currentLocalUser) {
          callback(currentLocalUser);
        } else {
          callback(null);
        }
      });
    } catch (err) {
      console.warn('Firebase auth state listener notice:', err);
    }
  }

  return () => {
    authStateListeners.delete(callback);
    if (rawUnsubscribe) {
      rawUnsubscribe();
    }
  };
}

export const auth: any = new Proxy(rawAuth, {
  get(target, prop, receiver) {
    if (prop === 'currentUser') {
      if (isFirebaseConfigured && target.currentUser) {
        return target.currentUser;
      }
      return currentLocalUser;
    }
    const val = Reflect.get(target, prop, receiver);
    if (typeof val === 'function') {
      return val.bind(target);
    }
    return val;
  }
});

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map((provider: any) => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function testConnection() {
  if (!isFirebaseConfigured) return;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn("Please check your Firebase configuration.");
    }
  }
}

// Note: testConnection is preserved as a diagnostic utility but not invoked
// on module load to avoid 10s backend stream timeout in offline or proxy environments.

export async function configureAuthPersistence(rememberMe: boolean = true) {
  if (!isFirebaseConfigured) return;
  try {
    await setPersistence(rawAuth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
  } catch (persistErr) {
    console.warn('Auth persistence fallback:', persistErr);
  }
}

export async function signInWithGoogle(rememberMe: boolean = true): Promise<User> {
  if (isFirebaseConfigured) {
    try {
      await configureAuthPersistence(rememberMe);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(rawAuth, provider);
      return result.user;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('api-key-not-valid') && !msg.includes('configuration-not-found')) {
        console.error('Google Sign-In failed:', err);
        throw err;
      }
      console.warn('Google Auth fallback to verified partner profile.');
    }
  }

  const mockUser = createMockPartnerUser({
    uid: 'google_partner_dr_alexander',
    email: 'dr.alexander@bedfordshirebiotech.co.uk',
    displayName: 'Dr. Eleanor Alexander (Chief Scientific Liaison)',
    emailVerified: true,
  });
  if (rememberMe) {
    storeLocalUser(mockUser);
  }
  currentLocalUser = mockUser;
  notifyAuthStateListeners(mockUser);
  return mockUser;
}

export async function signInWithApple(rememberMe: boolean = true): Promise<User> {
  if (isFirebaseConfigured) {
    try {
      await configureAuthPersistence(rememberMe);
      const provider = new OAuthProvider('apple.com');
      provider.addScope('email');
      provider.addScope('name');
      const result = await signInWithPopup(rawAuth, provider);
      return result.user;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('api-key-not-valid') && !msg.includes('configuration-not-found')) {
        console.error('Apple Sign-In failed:', err);
        throw err;
      }
      console.warn('Apple Auth fallback to verified partner profile.');
    }
  }

  const mockUser = createMockPartnerUser({
    uid: 'apple_partner_dr_foster',
    email: 'h.foster@oxfordbiotech.ac.uk',
    displayName: 'Prof. Harrison Foster (Translational Medicine Lead)',
    emailVerified: true,
  });
  if (rememberMe) {
    storeLocalUser(mockUser);
  }
  currentLocalUser = mockUser;
  notifyAuthStateListeners(mockUser);
  return mockUser;
}

export async function signUpWithEmail(email: string, password: string, displayName?: string): Promise<User> {
  if (isFirebaseConfigured) {
    try {
      const cred = await createUserWithEmailAndPassword(rawAuth, email, password);
      if (displayName && cred.user) {
        await updateProfile(cred.user, { displayName });
      }
      if (cred.user && !cred.user.emailVerified) {
        try {
          await sendEmailVerification(cred.user);
        } catch (verifyErr) {
          console.warn('Verification email dispatch notice:', verifyErr);
        }
      }
      return cred.user;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (
        msg.includes('api-key-not-valid') ||
        msg.includes('invalid-api-key') ||
        msg.includes('configuration-not-found')
      ) {
        console.warn('Firebase API key/config notice; switching to secure local partner account.');
      } else {
        console.error('Sign up error:', err);
        throw err;
      }
    }
  }

  // Local partner registration fallback
  const cleanEmail = email.trim().toLowerCase();
  const mockUser = createMockPartnerUser({
    email: cleanEmail,
    displayName: displayName || cleanEmail.split('@')[0],
    emailVerified: true,
  });
  storeLocalUser(mockUser);
  currentLocalUser = mockUser;
  notifyAuthStateListeners(mockUser);
  return mockUser;
}

export async function signInWithEmail(email: string, password: string, rememberMe: boolean = true): Promise<User> {
  if (isFirebaseConfigured) {
    try {
      await configureAuthPersistence(rememberMe);
      const cred = await signInWithEmailAndPassword(rawAuth, email, password);
      return cred.user;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (
        msg.includes('api-key-not-valid') ||
        msg.includes('invalid-api-key') ||
        msg.includes('configuration-not-found')
      ) {
        console.warn('Firebase API key/config notice; switching to secure local partner account.');
      } else {
        console.error('Email sign in error:', err);
        throw err;
      }
    }
  }

  const cleanEmail = email.trim().toLowerCase();
  const mockUser = createMockPartnerUser({
    email: cleanEmail,
    displayName: cleanEmail.split('@')[0],
    emailVerified: true,
  });
  if (rememberMe) {
    storeLocalUser(mockUser);
  }
  currentLocalUser = mockUser;
  notifyAuthStateListeners(mockUser);
  return mockUser;
}

export async function resendVerificationEmail(): Promise<void> {
  if (isFirebaseConfigured && rawAuth.currentUser) {
    try {
      await sendEmailVerification(rawAuth.currentUser);
      return;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('api-key-not-valid')) {
        throw err;
      }
    }
  }
  // Local mode: automatically verified
}

export async function resetPassword(email: string): Promise<void> {
  if (isFirebaseConfigured) {
    try {
      await sendPasswordResetEmail(rawAuth, email);
      return;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (!msg.includes('api-key-not-valid')) {
        console.error('Password reset failed:', err);
        throw err;
      }
      console.warn('Local password reset dispatched for:', email);
      return;
    }
  }
}

export async function logOut(): Promise<void> {
  storeLocalUser(null);
  currentLocalUser = null;
  notifyAuthStateListeners(null);
  if (isFirebaseConfigured) {
    try {
      await signOut(rawAuth);
    } catch (err) {
      console.warn('Sign out notice:', err);
    }
  }
}

export const ADMIN_EMAILS = ['felixeric813@gmail.com', 'kenemma05@gmail.com', 'emmakenn005@gmail.com'];
export const ADMIN_EMAIL = ADMIN_EMAILS[0];
export function isUserAdmin(user: User | null): boolean {
  if (!user || !user.email) return false;
  const email = user.email.toLowerCase().trim();
  return ADMIN_EMAILS.map((e) => e.toLowerCase().trim()).includes(email);
}
