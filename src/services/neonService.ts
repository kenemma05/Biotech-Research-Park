/**
 * @file neonService.ts
 * Neon PostgreSQL & Neon Auth data services for Bedfordshire Biotech.
 * Replaces legacy client-direct database services with Neon Lakebase persistence.
 */

import { inquiriesApi, cdmoApi, laboratoryApi, newsletterApi } from './api';
import type { UserProfileData, SubmissionRecord } from '../types/auth';

export type { UserProfileData, SubmissionRecord };

export interface ContactInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: string;
  message: string;
}

export interface PartnerInquiryPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export interface ManufacturingRfpPayload {
  name: string;
  email: string;
  company?: string;
  modality: string;
  phase: string;
  targetVolume: string;
  fillFinishFormat: string;
  projectTimeline: string;
  notes?: string;
}

/**
 * Save / upsert a partner user profile into Neon PostgreSQL
 */
export async function saveNeonUserProfile(
  profileData: UserProfileData,
  token?: string
): Promise<void> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch('/api/profile', {
    method: 'POST',
    headers,
    body: JSON.stringify(profileData),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.error || 'Failed to save partner profile in Neon database');
  }
}

/**
 * Fetch a partner user profile from Neon PostgreSQL
 */
export async function getNeonUserProfile(token?: string): Promise<UserProfileData | null> {
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch('/api/me', {
    method: 'GET',
    headers,
  });

  if (!res.ok) return null;
  return res.json();
}

/**
 * Submit general contact inquiry to Neon PostgreSQL
 */
export async function submitContactInquiryToNeon(
  payload: ContactInquiryPayload,
  token?: string
) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch('/api/inquiries/contact', {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to record inquiry in Neon database');
  }
  return res.json();
}

/**
 * Submit partner / licensing inquiry to Neon PostgreSQL
 */
export async function submitPartnerInquiryToNeon(
  payload: PartnerInquiryPayload,
  token?: string
) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch('/api/inquiries/partner', {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to record partner inquiry in Neon database');
  }
  return res.json();
}

/**
 * Submit CDMO RFP to Neon PostgreSQL
 */
export async function submitManufacturingRfpToNeon(
  payload: ManufacturingRfpPayload,
  token?: string
) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch('/api/inquiries/manufacturing', {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Failed to record manufacturing RFP in Neon database');
  }
  return res.json();
}

/**
 * Fetch all submissions from Neon PostgreSQL
 */
export async function fetchNeonSubmissions(token?: string): Promise<SubmissionRecord[]> {
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch('/api/inquiries', {
    method: 'GET',
    headers,
  });

  if (!res.ok) return [];
  const data = await res.json();
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
        status: c.status || 'pending',
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
        status: p.status || 'pending',
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
        status: r.status || 'pending',
        createdAt: r.createdAt,
        adminNotes: r.adminNotes,
      });
    });
  }

  records.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return records;
}
