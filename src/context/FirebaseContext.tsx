import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { 
  auth, 
  signInWithGoogle, 
  signInWithApple,
  signUpWithEmail as fbSignUpWithEmail,
  signInWithEmail as fbSignInWithEmail,
  resetPassword as fbResetPassword,
  resendVerificationEmail as fbResendVerificationEmail,
  logOut, 
  isUserAdmin,
  ADMIN_EMAIL 
} from '../lib/firebase';
import { 
  subscribeToUserInquiries, 
  subscribeToAllInquiriesForAdmin, 
  subscribeToUserProfile,
  saveUserProfile,
  type SubmissionRecord,
  type UserProfileData
} from '../services/firebaseService';

export interface RegistrationPayload {
  fullName: string;
  email: string;
  username: string;
  password: string;
  organization: string;
  jobTitle: string;
  partnerType: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  stateProvinceRegion?: string;
  zipPostalCode?: string;
  country: string;
}

interface FirebaseContextType {
  user: User | null;
  userProfile: UserProfileData | null;
  isAdmin: boolean;
  loadingAuth: boolean;
  loginWithGoogle: (rememberMe?: boolean | unknown) => Promise<User>;
  loginWithApple: (rememberMe?: boolean | unknown) => Promise<User>;
  signUpWithEmail: (email: string, password: string, displayName?: string) => Promise<User>;
  registerPartnerAccount: (payload: RegistrationPayload) => Promise<User>;
  completePartnerProfile: (profileData: Omit<UserProfileData, 'userId' | 'emailVerified' | 'accountStatus' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  signInWithEmail: (email: string, password: string, rememberMe?: boolean) => Promise<User>;
  resetPassword: (email: string) => Promise<void>;
  resendVerification: () => Promise<void>;
  logout: () => Promise<void>;
  submissions: SubmissionRecord[];
  isPortalOpen: boolean;
  openPortal: () => void;
  closePortal: () => void;
  adminEmail: string;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAdmin(isUserAdmin(currentUser));
      setLoadingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) {
      setSubmissions([]);
      setUserProfile(null);
      return;
    }

    const unsubProfile = subscribeToUserProfile(user.uid, (profile) => {
      setUserProfile(profile);
    });

    let unsubInquiries: () => void;
    if (isAdmin) {
      unsubInquiries = subscribeToAllInquiriesForAdmin((all) => {
        setSubmissions(all);
      });
    } else {
      unsubInquiries = subscribeToUserInquiries(user.uid, (mine) => {
        setSubmissions(mine);
      });
    }

    return () => {
      unsubProfile();
      unsubInquiries();
    };
  }, [user, isAdmin]);

  const loginWithGoogle = async (rememberMe: boolean | unknown = true): Promise<User> => {
    try {
      const persistLocal = typeof rememberMe === 'boolean' ? rememberMe : true;
      const signedInUser = await signInWithGoogle(persistLocal);
      return signedInUser;
    } catch (err) {
      console.error('Login error:', err);
      throw err;
    }
  };

  const loginWithApple = async (rememberMe: boolean | unknown = true): Promise<User> => {
    try {
      const persistLocal = typeof rememberMe === 'boolean' ? rememberMe : true;
      const signedInUser = await signInWithApple(persistLocal);
      return signedInUser;
    } catch (err) {
      console.error('Apple login error:', err);
      throw err;
    }
  };

  const signUpWithEmail = async (email: string, password: string, displayName?: string) => {
    try {
      const newUser = await fbSignUpWithEmail(email, password, displayName);
      return newUser;
    } catch (err) {
      console.error('Sign up error:', err);
      throw err;
    }
  };

  const registerPartnerAccount = async (payload: RegistrationPayload): Promise<User> => {
    try {
      const displayName = `${payload.fullName.trim()} (${payload.organization.trim()})`;
      const newUser = await fbSignUpWithEmail(payload.email.trim(), payload.password, displayName);

      await saveUserProfile({
        userId: newUser.uid,
        fullName: payload.fullName.trim(),
        email: payload.email.trim().toLowerCase(),
        username: payload.username.trim(),
        organization: payload.organization.trim(),
        jobTitle: payload.jobTitle.trim(),
        partnerType: payload.partnerType.trim(),
        phoneNumber: payload.phoneNumber.trim(),
        addressLine1: payload.addressLine1.trim(),
        addressLine2: payload.addressLine2?.trim(),
        city: payload.city.trim(),
        stateProvinceRegion: payload.stateProvinceRegion?.trim(),
        zipPostalCode: payload.zipPostalCode?.trim(),
        country: payload.country.trim(),
        emailVerified: Boolean(newUser.emailVerified),
        accountStatus: newUser.emailVerified ? 'active' : 'pending_verification'
      });

      return newUser;
    } catch (err) {
      console.error('Partner registration error:', err);
      throw err;
    }
  };

  const completePartnerProfile = async (
    profileData: Omit<UserProfileData, 'userId' | 'emailVerified' | 'accountStatus' | 'createdAt' | 'updatedAt'>
  ): Promise<void> => {
    if (!auth.currentUser) {
      throw new Error('Must be signed in to save partner profile.');
    }
    await saveUserProfile({
      userId: auth.currentUser.uid,
      ...profileData,
      emailVerified: Boolean(auth.currentUser.emailVerified),
      accountStatus: auth.currentUser.emailVerified ? 'active' : 'pending_verification'
    });
  };

  const signInWithEmail = async (email: string, password: string, rememberMe: boolean = true) => {
    try {
      const loggedUser = await fbSignInWithEmail(email, password, rememberMe);
      return loggedUser;
    } catch (err) {
      console.error('Sign in error:', err);
      throw err;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await fbResetPassword(email);
    } catch (err) {
      console.error('Password reset error:', err);
      throw err;
    }
  };

  const resendVerification = async () => {
    try {
      await fbResendVerificationEmail();
    } catch (err) {
      console.error('Verification email error:', err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await logOut();
      setIsPortalOpen(false);
    } catch (err) {
      console.error('Logout error:', err);
      throw err;
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        user,
        userProfile,
        isAdmin,
        loadingAuth,
        loginWithGoogle,
        loginWithApple,
        signUpWithEmail,
        registerPartnerAccount,
        completePartnerProfile,
        signInWithEmail,
        resetPassword,
        resendVerification,
        logout,
        submissions,
        isPortalOpen,
        openPortal: () => setIsPortalOpen(true),
        closePortal: () => setIsPortalOpen(false),
        adminEmail: ADMIN_EMAIL
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
