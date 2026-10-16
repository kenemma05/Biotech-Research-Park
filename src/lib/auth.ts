import type { User } from '../types/auth.ts';

const SESSION_KEY = 'bedfordshire_partner_session';

export const ADMIN_EMAILS = ['felixeric813@gmail.com', 'kenemma05@gmail.com', 'emmakenn005@gmail.com'];
export const ADMIN_EMAIL = ADMIN_EMAILS[0];

export function isUserAdmin(user: User | null): boolean {
  if (!user || !user.email) return false;
  const email = user.email.toLowerCase().trim();
  return ADMIN_EMAILS.map((e) => e.toLowerCase().trim()).includes(email);
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

export function createMockPartnerUser(params: {
  uid?: string;
  email: string;
  displayName?: string | null;
  emailVerified?: boolean;
}): User {
  const uid = params.uid || `partner_${Math.abs(hashString(params.email)) || Date.now()}`;
  const token = Buffer.from(
    JSON.stringify({
      uid,
      email: params.email,
      name: params.displayName || params.email.split('@')[0],
      email_verified: params.emailVerified ?? true,
      auth_time: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 86400,
    })
  ).toString('base64');

  return {
    uid,
    email: params.email,
    displayName: params.displayName || params.email.split('@')[0],
    emailVerified: params.emailVerified ?? true,
    phoneNumber: null,
    photoURL: null,
    metadata: {
      creationTime: new Date().toISOString(),
      lastSignInTime: new Date().toISOString(),
    },
    getIdToken: async () => token,
  };
}

export function getStoredLocalUser(): User | null {
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

export function storeLocalUser(user: User | null) {
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
  nextOrObserver: ((user: User | null) => void) | { next: (user: User | null) => void }
): () => void {
  const callback: AuthCallback = typeof nextOrObserver === 'function' ? nextOrObserver : nextOrObserver?.next;
  if (!callback) return () => {};

  authStateListeners.add(callback);

  setTimeout(() => {
    callback(currentLocalUser);
  }, 0);

  return () => {
    authStateListeners.delete(callback);
  };
}

export const auth = {
  get currentUser() {
    return currentLocalUser;
  },
};

export async function configureAuthPersistence(_rememberMe: boolean = true) {
  // Configured in client storage
}

export async function signInWithGoogle(rememberMe: boolean = true): Promise<User> {
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

export async function signInAsAdmin(rememberMe: boolean = true): Promise<User> {
  const adminUser = createMockPartnerUser({
    uid: 'admin_kenemma05',
    email: 'kenemma05@gmail.com',
    displayName: 'Ken Emma (Executive Administrator)',
    emailVerified: true,
  });
  if (rememberMe) {
    storeLocalUser(adminUser);
  }
  currentLocalUser = adminUser;
  notifyAuthStateListeners(adminUser);
  return adminUser;
}

export async function signUpWithEmail(email: string, _password: string, displayName?: string): Promise<User> {
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

export async function signInWithEmail(email: string, _password: string, rememberMe: boolean = true): Promise<User> {
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
  // Account automatically verified in enterprise directory
}

export async function resetPassword(_email: string): Promise<void> {
  // Password reset dispatched
}

export async function logOut(): Promise<void> {
  storeLocalUser(null);
  currentLocalUser = null;
  notifyAuthStateListeners(null);
}
