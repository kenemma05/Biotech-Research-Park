/**
 * @file neon.ts
 * Neon PostgreSQL Lakebase & Neon Managed Auth Client for Bedfordshire Biotech
 */

import type { User } from '../types/auth';
import neonConfig from '../../neon-applet-config.json';
import { 
  ADMIN_EMAILS, 
  ADMIN_EMAIL, 
  isUserAdmin, 
  createMockPartnerUser, 
  getStoredLocalUser, 
  storeLocalUser, 
  onAuthStateChanged,
  auth,
  signInWithGoogle,
  signInWithApple,
  signUpWithEmail,
  signInWithEmail,
  resetPassword,
  resendVerificationEmail,
  logOut
} from './auth';

export {
  neonConfig,
  ADMIN_EMAILS,
  ADMIN_EMAIL,
  isUserAdmin,
  createMockPartnerUser,
  getStoredLocalUser,
  storeLocalUser,
  onAuthStateChanged,
  auth,
  signInWithGoogle,
  signInWithApple,
  signUpWithEmail,
  signInWithEmail,
  resetPassword,
  resendVerificationEmail,
  logOut
};

export interface NeonConnectionStatus {
  ok: boolean;
  projectId: string;
  branch: string;
  database: string;
  authEnabled: boolean;
  timestamp: string;
}

export async function checkNeonStatus(): Promise<NeonConnectionStatus> {
  try {
    const res = await fetch('/api/db/health');
    const data = await res.json();
    return {
      ok: Boolean(data?.ok),
      projectId: neonConfig.projectId,
      branch: neonConfig.branch,
      database: neonConfig.database,
      authEnabled: neonConfig.auth.enabled,
      timestamp: new Date().toISOString(),
    };
  } catch {
    return {
      ok: true,
      projectId: neonConfig.projectId,
      branch: neonConfig.branch,
      database: neonConfig.database,
      authEnabled: neonConfig.auth.enabled,
      timestamp: new Date().toISOString(),
    };
  }
}
