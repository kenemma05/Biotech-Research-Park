import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { 
  auth, 
  signInWithGoogle, 
  logOut, 
  isUserAdmin,
  ADMIN_EMAIL 
} from '../lib/firebase';
import { 
  subscribeToUserInquiries, 
  subscribeToAllInquiriesForAdmin, 
  type SubmissionRecord 
} from '../services/firebaseService';

interface FirebaseContextType {
  user: User | null;
  isAdmin: boolean;
  loadingAuth: boolean;
  loginWithGoogle: () => Promise<void>;
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
      return;
    }

    if (isAdmin) {
      // Admin sees all submissions across all forms
      const unsub = subscribeToAllInquiriesForAdmin((all) => {
        setSubmissions(all);
      });
      return () => unsub();
    } else {
      // Verified user sees their own submissions
      const unsub = subscribeToUserInquiries(user.uid, (mine) => {
        setSubmissions(mine);
      });
      return () => unsub();
    }
  }, [user, isAdmin]);

  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error('Login error:', err);
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
        isAdmin,
        loadingAuth,
        loginWithGoogle,
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
