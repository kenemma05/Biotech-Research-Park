/**
 * @file NeonContext.tsx
 * Neon PostgreSQL & Managed Auth React Context Provider for Bedfordshire Biotech.
 */

import React from 'react';
import { AuthProvider, useAuth, type AuthContextType, type RegistrationPayload } from './AuthContext';

export type NeonContextType = AuthContextType;
export type { RegistrationPayload };

export const NeonProvider: React.FC<{ children: React.ReactNode }> = AuthProvider;

export const useNeon = useAuth;
