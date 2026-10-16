/**
 * Authentication and partner submission types for Bedfordshire Biotech.
 * Backed by Neon PostgreSQL database & Express services.
 */

export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber?: string | null;
  photoURL?: string | null;
  metadata?: {
    creationTime?: string;
    lastSignInTime?: string;
  };
  getIdToken: () => Promise<string>;
}

export interface UserProfileData {
  userId: string;
  fullName: string;
  email: string;
  username: string;
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
  emailVerified: boolean;
  accountStatus: 'active' | 'pending_verification' | 'suspended';
  createdAt?: string | Date;
  updatedAt?: string | Date;
}

export interface SubmissionRecord {
  id: string;
  type: 'contact' | 'partner' | 'manufacturing';
  title: string;
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  details: string;
  status: 'pending' | 'under_review' | 'scheduled' | 'approved' | 'archived';
  createdAt: string | Date;
  adminNotes?: string | null;
}
