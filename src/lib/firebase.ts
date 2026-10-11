import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  OAuthProvider,
  signInWithPopup, 
  signOut,
  onAuthStateChanged,
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
  getFirestore, 
  initializeFirestore,
  doc, 
  getDocFromServer,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  type DocumentData,
  type QuerySnapshot
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

export const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

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
export const auth = getAuth(app);

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
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
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

// Call test connection when module loads
if (isFirebaseConfigured) {
  testConnection();
}

export async function configureAuthPersistence(rememberMe: boolean = true) {
  try {
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
  } catch (persistErr) {
    console.warn('Auth persistence fallback:', persistErr);
  }
}

export async function signInWithGoogle(rememberMe: boolean = true) {
  try {
    await configureAuthPersistence(rememberMe);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    const result = await signInWithPopup(auth, provider);
    if (rememberMe) {
      await configureAuthPersistence(true);
    }
    return result.user;
  } catch (err) {
    console.error('Google Sign-In failed:', err);
    throw err;
  }
}

export async function signInWithApple(rememberMe: boolean = true) {
  try {
    await configureAuthPersistence(rememberMe);
    const provider = new OAuthProvider('apple.com');
    provider.addScope('email');
    provider.addScope('name');
    const result = await signInWithPopup(auth, provider);
    if (rememberMe) {
      await configureAuthPersistence(true);
    }
    return result.user;
  } catch (err) {
    console.error('Apple Sign-In failed:', err);
    throw err;
  }
}

export async function signUpWithEmail(email: string, password: string, displayName?: string) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
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
  } catch (err) {
    console.error('Sign up failed:', err);
    throw err;
  }
}

export async function signInWithEmail(email: string, password: string, rememberMe: boolean = true) {
  try {
    await configureAuthPersistence(rememberMe);
    const cred = await signInWithEmailAndPassword(auth, email, password);
    if (rememberMe) {
      await setPersistence(auth, browserLocalPersistence);
    }
    return cred.user;
  } catch (err) {
    console.error('Email sign in failed:', err);
    throw err;
  }
}

export async function resendVerificationEmail() {
  if (!auth.currentUser) {
    throw new Error('No active user session found.');
  }
  await sendEmailVerification(auth.currentUser);
}

export async function resetPassword(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.error('Password reset failed:', err);
    throw err;
  }
}

export async function logOut() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error('Logout failed:', err);
    throw err;
  }
}

export const ADMIN_EMAILS = ['felixeric813@gmail.com', 'kenemma05@gmail.com', 'emmakenn005@gmail.com'];
export const ADMIN_EMAIL = ADMIN_EMAILS[0];
export function isUserAdmin(user: User | null): boolean {
  if (!user || !user.email) return false;
  const email = user.email.toLowerCase().trim();
  return ADMIN_EMAILS.map((e) => e.toLowerCase().trim()).includes(email);
}
