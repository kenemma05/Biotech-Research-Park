import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User, UserProfileData, SubmissionRecord } from '../types/auth.ts';
import { 
  auth, 
  onAuthStateChanged,
  signInWithGoogle, 
  signInWithApple,
  signInAsAdmin as libSignInAsAdmin,
  signUpWithEmail as libSignUpWithEmail,
  signInWithEmail as libSignInWithEmail,
  resetPassword as libResetPassword,
  resendVerificationEmail as libResendVerificationEmail,
  logOut, 
  isUserAdmin,
  ADMIN_EMAIL 
} from '../lib/auth.ts';
import { inquiriesApi } from '../services/api';

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

export interface AuthContextType {
  user: User | null;
  userProfile: UserProfileData | null;
  isAdmin: boolean;
  loadingAuth: boolean;
  loginWithGoogle: (rememberMe?: boolean | unknown) => Promise<User>;
  loginWithApple: (rememberMe?: boolean | unknown) => Promise<User>;
  loginAsAdmin: (rememberMe?: boolean) => Promise<User>;
  signUpWithEmail: (email: string, password: string, displayName?: string) => Promise<User>;
  registerPartnerAccount: (payload: RegistrationPayload) => Promise<User>;
  completePartnerProfile: (profileData: Omit<UserProfileData, 'userId' | 'emailVerified' | 'accountStatus' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  signInWithEmail: (email: string, password: string, rememberMe?: boolean) => Promise<User>;
  resetPassword: (email: string) => Promise<void>;
  resendVerification: () => Promise<void>;
  logout: () => Promise<void>;
  submissions: SubmissionRecord[];
  refreshSubmissions: () => Promise<void>;
  isPortalOpen: boolean;
  openPortal: () => void;
  closePortal: () => void;
  adminEmail: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfileData | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>([]);
  const [isPortalOpen, setIsPortalOpen] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser: User | null) => {
      setUser(currentUser);
      setIsAdmin(isUserAdmin(currentUser));
      setLoadingAuth(false);

      if (currentUser) {
        try {
          const token = await currentUser.getIdToken();
          const res = await fetch('/api/me', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (res.ok) {
            const data = await res.json();
            if (data) {
              setUserProfile({
                userId: data.uid || currentUser.uid,
                fullName: data.fullName || currentUser.displayName || '',
                email: data.email || currentUser.email,
                username: data.username || currentUser.email.split('@')[0],
                organization: data.organization || 'Bedfordshire Life Sciences Partner',
                jobTitle: data.jobTitle || 'Research Investigator',
                partnerType: data.partnerType || 'Academic Research Institution',
                phoneNumber: data.phoneNumber || '',
                addressLine1: data.addressLine1 || '',
                addressLine2: data.addressLine2 || '',
                city: data.city || '',
                stateProvinceRegion: data.stateProvinceRegion || '',
                zipPostalCode: data.zipPostalCode || '',
                country: data.country || 'United Kingdom',
                emailVerified: Boolean(data.emailVerified ?? currentUser.emailVerified),
                accountStatus: (data.accountStatus as any) || 'active',
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
              });
            }
          }
        } catch (err) {
          console.warn('User profile sync notice:', err);
        }
      } else {
        setUserProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const refreshSubmissions = async () => {
    try {
      const data = await inquiriesApi.getInquiries();
      const records: SubmissionRecord[] = [];
      if (data?.contacts) {
        data.contacts.forEach((c: any) => {
          records.push({
            id: String(c.id),
            type: 'contact',
            title: c.inquiryType || 'General Inquiry',
            name: c.name,
            email: c.email,
            company: c.company,
            phone: c.phone,
            details: c.message,
            status: (c.status as any) || 'pending',
            createdAt: c.createdAt,
            adminNotes: c.adminNotes,
          });
        });
      }
      if (data?.partners) {
        data.partners.forEach((p: any) => {
          records.push({
            id: String(p.id),
            type: 'partner',
            title: p.subject || 'Partner Inquiry',
            name: p.name,
            email: p.email,
            company: p.company,
            phone: p.phone,
            details: p.message,
            status: (p.status as any) || 'pending',
            createdAt: p.createdAt,
            adminNotes: p.adminNotes,
          });
        });
      }
      if (data?.rfps) {
        data.rfps.forEach((r: any) => {
          records.push({
            id: String(r.id),
            type: 'manufacturing',
            title: `CDMO: ${r.modality} (${r.targetVolume})`,
            name: r.name,
            email: r.email,
            company: r.company,
            details: `Phase: ${r.phase} | Fill: ${r.fillFinishFormat} | Timeline: ${r.projectTimeline}${r.notes ? ` | Notes: ${r.notes}` : ''}`,
            status: (r.status as any) || 'pending',
            createdAt: r.createdAt,
            adminNotes: r.adminNotes,
          });
        });
      }
      records.sort((a, b) => new Date(b.createdAt as any).getTime() - new Date(a.createdAt as any).getTime());
      setSubmissions(records);
    } catch (err) {
      console.warn('Inquiries sync notice:', err);
    }
  };

  useEffect(() => {
    refreshSubmissions();
    const interval = setInterval(refreshSubmissions, 8000);
    return () => clearInterval(interval);
  }, [user, isAdmin]);

  useEffect(() => {
    if (isPortalOpen) {
      refreshSubmissions();
    }
  }, [isPortalOpen]);

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
      const newUser = await libSignUpWithEmail(email, password, displayName);
      return newUser;
    } catch (err) {
      console.error('Sign up error:', err);
      throw err;
    }
  };

  const registerPartnerAccount = async (payload: RegistrationPayload): Promise<User> => {
    try {
      const displayName = `${payload.fullName.trim()} (${payload.organization.trim()})`;
      const newUser = await libSignUpWithEmail(payload.email.trim(), payload.password, displayName);

      const token = await newUser.getIdToken();
      await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
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
          accountStatus: newUser.emailVerified ? 'active' : 'pending_verification',
        }),
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
    const token = await auth.currentUser.getIdToken();
    await fetch('/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...profileData,
        emailVerified: Boolean(auth.currentUser.emailVerified),
        accountStatus: auth.currentUser.emailVerified ? 'active' : 'pending_verification',
      }),
    });
  };

  const signInWithEmail = async (email: string, password: string, rememberMe: boolean = true) => {
    try {
      const loggedUser = await libSignInWithEmail(email, password, rememberMe);
      return loggedUser;
    } catch (err) {
      console.error('Sign in error:', err);
      throw err;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await libResetPassword(email);
    } catch (err) {
      console.error('Password reset error:', err);
      throw err;
    }
  };

  const resendVerification = async () => {
    try {
      await libResendVerificationEmail();
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
    <AuthContext.Provider
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
        refreshSubmissions,
        isPortalOpen,
        openPortal: () => setIsPortalOpen(true),
        closePortal: () => setIsPortalOpen(false),
        adminEmail: ADMIN_EMAIL,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
