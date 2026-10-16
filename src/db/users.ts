import { db } from './index.ts';
import {
  users,
  contactInquiries,
  partnerInquiries,
  manufacturingRfps,
  newsletterSubscribers,
  publicationComments,
} from './schema.ts';
import { eq, desc } from 'drizzle-orm';

// In-memory mock storage fallback for ephemeral / local AI Studio environment
interface InMemoryUser {
  id: number;
  uid: string;
  email: string;
  fullName: string | null;
  username: string | null;
  organization: string | null;
  jobTitle: string | null;
  partnerType: string | null;
  phoneNumber: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  stateProvinceRegion: string | null;
  zipPostalCode: string | null;
  country: string | null;
  emailVerified: boolean;
  accountStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

const memoryUsers = new Map<string, InMemoryUser>();
let nextUserId = 1;

const memoryContactInquiries: any[] = [];
let nextContactId = 1;

const memoryPartnerInquiries: any[] = [];
let nextPartnerId = 1;

const memoryManufacturingRfps: any[] = [];
let nextRfpId = 1;

const memoryNewsletterSubscribers: any[] = [];
let nextSubscriberId = 1;

const memoryPublicationComments: any[] = [
  {
    id: 1,
    postId: 'continuous-perfusion-bioprocess-scale',
    userId: 1,
    authorName: 'Dr. Sarah Lin, FRSC',
    authorRole: 'Downstream Bioprocess Specialist',
    content: 'The 2.5x volumetric productivity increase demonstrated in Bedfordshire Suite B-02 aligns with our scale-up validation data. Remarkable retention kinetics.',
    createdAt: new Date('2025-09-18T14:32:00Z'),
  },
  {
    id: 2,
    postId: 'stingraycin-polypeptide-synthesis',
    userId: 1,
    authorName: 'Prof. Marcus Vance',
    authorRole: 'Director of Translational Pharmacology',
    content: 'Confirmed synthetic peptide purity exceeds 99.2% via RP-HPLC. Excellent baseline for Phase I IND filing.',
    createdAt: new Date('2025-08-25T09:15:00Z'),
  }
];
let nextCommentId = 3;

export async function getOrCreateUser(uid: string, email: string, fullName?: string) {
  if (db) {
    try {
      const result = await db
        .insert(users)
        .values({
          uid,
          email,
          fullName: fullName || null,
        })
        .onConflictDoUpdate({
          target: users.uid,
          set: {
            email,
            updatedAt: new Date(),
          },
        })
        .returning();

      return result[0];
    } catch (error) {
      console.warn('Database query failed in getOrCreateUser, falling back to in-memory store:', error);
    }
  }

  // In-memory fallback
  let user = memoryUsers.get(uid);
  if (!user) {
    user = {
      id: nextUserId++,
      uid,
      email,
      fullName: fullName || null,
      username: email.split('@')[0],
      organization: 'Bedfordshire Life Sciences Partner',
      jobTitle: 'Research Investigator',
      partnerType: 'Academic Research Institution',
      phoneNumber: '',
      addressLine1: '',
      addressLine2: null,
      city: '',
      stateProvinceRegion: null,
      zipPostalCode: null,
      country: 'United Kingdom',
      emailVerified: false,
      accountStatus: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    memoryUsers.set(uid, user);
  } else {
    user.email = email;
    if (fullName) user.fullName = fullName;
    user.updatedAt = new Date();
  }
  return user;
}

export async function upsertUserProfile(uid: string, profileData: {
  email: string;
  fullName: string;
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
  accountStatus: string;
}) {
  if (db) {
    try {
      const result = await db
        .insert(users)
        .values({
          uid,
          email: profileData.email,
          fullName: profileData.fullName,
          username: profileData.username,
          organization: profileData.organization,
          jobTitle: profileData.jobTitle,
          partnerType: profileData.partnerType,
          phoneNumber: profileData.phoneNumber,
          addressLine1: profileData.addressLine1,
          addressLine2: profileData.addressLine2 || null,
          city: profileData.city,
          stateProvinceRegion: profileData.stateProvinceRegion || null,
          zipPostalCode: profileData.zipPostalCode || null,
          country: profileData.country,
          emailVerified: profileData.emailVerified,
          accountStatus: profileData.accountStatus,
        })
        .onConflictDoUpdate({
          target: users.uid,
          set: {
            email: profileData.email,
            fullName: profileData.fullName,
            username: profileData.username,
            organization: profileData.organization,
            jobTitle: profileData.jobTitle,
            partnerType: profileData.partnerType,
            phoneNumber: profileData.phoneNumber,
            addressLine1: profileData.addressLine1,
            addressLine2: profileData.addressLine2 || null,
            city: profileData.city,
            stateProvinceRegion: profileData.stateProvinceRegion || null,
            zipPostalCode: profileData.zipPostalCode || null,
            country: profileData.country,
            emailVerified: profileData.emailVerified,
            accountStatus: profileData.accountStatus,
            updatedAt: new Date(),
          },
        })
        .returning();

      return result[0];
    } catch (error) {
      console.warn('Database query failed in upsertUserProfile, falling back to in-memory store:', error);
    }
  }

  // In-memory fallback
  let user = memoryUsers.get(uid);
  const now = new Date();
  if (!user) {
    user = {
      id: nextUserId++,
      uid,
      email: profileData.email,
      fullName: profileData.fullName,
      username: profileData.username,
      organization: profileData.organization,
      jobTitle: profileData.jobTitle,
      partnerType: profileData.partnerType,
      phoneNumber: profileData.phoneNumber,
      addressLine1: profileData.addressLine1,
      addressLine2: profileData.addressLine2 || null,
      city: profileData.city,
      stateProvinceRegion: profileData.stateProvinceRegion || null,
      zipPostalCode: profileData.zipPostalCode || null,
      country: profileData.country,
      emailVerified: profileData.emailVerified,
      accountStatus: profileData.accountStatus,
      createdAt: now,
      updatedAt: now,
    };
  } else {
    Object.assign(user, {
      ...profileData,
      addressLine2: profileData.addressLine2 || null,
      stateProvinceRegion: profileData.stateProvinceRegion || null,
      zipPostalCode: profileData.zipPostalCode || null,
      updatedAt: now,
    });
  }
  memoryUsers.set(uid, user);
  return user;
}

export async function getUserByUid(uid: string) {
  if (db) {
    try {
      const rows = await db.select().from(users).where(eq(users.uid, uid));
      return rows[0] || null;
    } catch (error) {
      console.warn('Database query failed in getUserByUid, falling back to in-memory store:', error);
    }
  }

  return memoryUsers.get(uid) || null;
}

export async function createContactInquiryRecord(data: {
  userId?: number | null;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: string;
  message: string;
}) {
  if (db) {
    try {
      const result = await db
        .insert(contactInquiries)
        .values({
          userId: data.userId ?? null,
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          inquiryType: data.inquiryType,
          message: data.message,
          status: 'pending',
        })
        .returning();

      // Mirror to partner_inquiries table so inquiries appear under both tables in Neon console
      try {
        await db.insert(partnerInquiries).values({
          userId: data.userId ?? null,
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          subject: data.inquiryType,
          message: data.message,
          status: 'pending',
        });
      } catch (mirrorErr) {
        console.warn('[Neon Sync] Minor issue mirroring to partner_inquiries:', mirrorErr);
      }

      return result[0];
    } catch (error) {
      console.warn('[Database Fallback] Failed to insert contact inquiry into database, falling back to memory store:', error);
    }
  }

  const record = {
    id: nextContactId++,
    userId: data.userId ?? null,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    company: data.company || null,
    inquiryType: data.inquiryType,
    message: data.message,
    status: 'pending',
    adminNotes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  memoryContactInquiries.unshift(record);
  return record;
}

export async function createPartnerInquiryRecord(data: {
  userId?: number | null;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}) {
  if (db) {
    try {
      const result = await db
        .insert(partnerInquiries)
        .values({
          userId: data.userId ?? null,
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          subject: data.subject,
          message: data.message,
          status: 'pending',
        })
        .returning();

      // Mirror to contact_inquiries table so inquiries appear under both tables in Neon console
      try {
        await db.insert(contactInquiries).values({
          userId: data.userId ?? null,
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          inquiryType: data.subject,
          message: data.message,
          status: 'pending',
        });
      } catch (mirrorErr) {
        console.warn('[Neon Sync] Minor issue mirroring to contact_inquiries:', mirrorErr);
      }

      return result[0];
    } catch (error) {
      console.warn('[Database Fallback] Failed to insert partner inquiry into database, falling back to memory store:', error);
    }
  }

  const record = {
    id: nextPartnerId++,
    userId: data.userId ?? null,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    company: data.company || null,
    subject: data.subject,
    message: data.message,
    status: 'pending',
    adminNotes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  memoryPartnerInquiries.unshift(record);
  return record;
}

export async function createManufacturingRfpRecord(data: {
  userId?: number | null;
  name: string;
  email: string;
  company?: string;
  modality: string;
  phase: string;
  targetVolume: string;
  fillFinishFormat: string;
  projectTimeline: string;
  notes?: string;
}) {
  if (db) {
    try {
      const result = await db
        .insert(manufacturingRfps)
        .values({
          userId: data.userId ?? null,
          name: data.name,
          email: data.email,
          company: data.company || null,
          modality: data.modality,
          phase: data.phase,
          targetVolume: data.targetVolume,
          fillFinishFormat: data.fillFinishFormat,
          projectTimeline: data.projectTimeline,
          notes: data.notes || null,
          status: 'pending',
        })
        .returning();
      return result[0];
    } catch (error) {
      console.warn('[Database Fallback] Failed to insert manufacturing RFP into database, falling back to memory store:', error);
    }
  }

  const record = {
    id: nextRfpId++,
    userId: data.userId ?? null,
    name: data.name,
    email: data.email,
    company: data.company || null,
    modality: data.modality,
    phase: data.phase,
    targetVolume: data.targetVolume,
    fillFinishFormat: data.fillFinishFormat,
    projectTimeline: data.projectTimeline,
    notes: data.notes || null,
    status: 'pending',
    adminNotes: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  memoryManufacturingRfps.unshift(record);
  return record;
}

export async function createNewsletterSubscription(email: string, source: string = 'footer') {
  if (db) {
    try {
      const result = await db
        .insert(newsletterSubscribers)
        .values({
          email: email.toLowerCase().trim(),
          source,
        })
        .onConflictDoUpdate({
          target: newsletterSubscribers.email,
          set: {
            source,
          },
        })
        .returning();
      return result[0];
    } catch (error) {
      console.warn('[Database Fallback] Failed to insert newsletter subscriber into database, falling back to memory store:', error);
    }
  }

  const existing = memoryNewsletterSubscribers.find(s => s.email === email.toLowerCase().trim());
  if (existing) {
    existing.source = source;
    return existing;
  }
  const record = {
    id: nextSubscriberId++,
    email: email.toLowerCase().trim(),
    source,
    createdAt: new Date(),
  };
  memoryNewsletterSubscribers.unshift(record);
  return record;
}

export async function getInquiriesForUserUid(uid: string) {
  if (db) {
    try {
      const contacts = await db
        .select({
          inquiry: contactInquiries,
        })
        .from(contactInquiries)
        .innerJoin(users, eq(contactInquiries.userId, users.id))
        .where(eq(users.uid, uid))
        .orderBy(desc(contactInquiries.createdAt));

      const partners = await db
        .select({
          inquiry: partnerInquiries,
        })
        .from(partnerInquiries)
        .innerJoin(users, eq(partnerInquiries.userId, users.id))
        .where(eq(users.uid, uid))
        .orderBy(desc(partnerInquiries.createdAt));

      const rfps = await db
        .select({
          inquiry: manufacturingRfps,
        })
        .from(manufacturingRfps)
        .innerJoin(users, eq(manufacturingRfps.userId, users.id))
        .where(eq(users.uid, uid))
        .orderBy(desc(manufacturingRfps.createdAt));

      return {
        contacts: contacts.map((r) => r.inquiry),
        partners: partners.map((r) => r.inquiry),
        rfps: rfps.map((r) => r.inquiry),
      };
    } catch (error) {
      console.warn('Database query failed in getInquiriesForUserUid, falling back to in-memory store:', error);
    }
  }

  const user = memoryUsers.get(uid);
  const userId = user ? user.id : null;
  return {
    contacts: memoryContactInquiries.filter(c => c.userId === userId),
    partners: memoryPartnerInquiries.filter(p => p.userId === userId),
    rfps: memoryManufacturingRfps.filter(r => r.userId === userId),
  };
}

export async function getAllInquiriesAdmin() {
  if (db) {
    try {
      const contacts = await db
        .select()
        .from(contactInquiries)
        .orderBy(desc(contactInquiries.createdAt));

      const partners = await db
        .select()
        .from(partnerInquiries)
        .orderBy(desc(partnerInquiries.createdAt));

      const rfps = await db
        .select()
        .from(manufacturingRfps)
        .orderBy(desc(manufacturingRfps.createdAt));

      return { contacts, partners, rfps };
    } catch (error) {
      console.warn('Database query failed in getAllInquiriesAdmin, falling back to in-memory store:', error);
    }
  }

  return {
    contacts: [...memoryContactInquiries],
    partners: [...memoryPartnerInquiries],
    rfps: [...memoryManufacturingRfps],
  };
}

export async function getCommentsByPostId(postId: string) {
  if (db) {
    try {
      return await db
        .select()
        .from(publicationComments)
        .where(eq(publicationComments.postId, postId))
        .orderBy(desc(publicationComments.createdAt));
    } catch (error) {
      console.warn('Database query failed in getCommentsByPostId, falling back to in-memory store:', error);
    }
  }

  return memoryPublicationComments
    .filter(c => c.postId === postId)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function addPublicationComment(data: {
  postId: string;
  userId: number;
  authorName: string;
  authorRole?: string;
  content: string;
}) {
  if (db) {
    try {
      const result = await db
        .insert(publicationComments)
        .values({
          postId: data.postId,
          userId: data.userId,
          authorName: data.authorName,
          authorRole: data.authorRole || null,
          content: data.content,
        })
        .returning();
      return result[0];
    } catch (error) {
      console.warn('Database query failed in addPublicationComment, falling back to in-memory store:', error);
    }
  }

  const comment = {
    id: nextCommentId++,
    postId: data.postId,
    userId: data.userId,
    authorName: data.authorName,
    authorRole: data.authorRole || null,
    content: data.content,
    createdAt: new Date(),
  };
  memoryPublicationComments.push(comment);
  return comment;
}
