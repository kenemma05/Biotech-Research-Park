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

export async function getOrCreateUser(uid: string, email: string, fullName?: string) {
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
    console.error('Database query failed in getOrCreateUser:', error);
    throw new Error('Failed to synchronize user account.', { cause: error });
  }
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
    console.error('Database query failed in upsertUserProfile:', error);
    throw new Error('Failed to save partner profile.', { cause: error });
  }
}

export async function getUserByUid(uid: string) {
  try {
    const rows = await db.select().from(users).where(eq(users.uid, uid));
    return rows[0] || null;
  } catch (error) {
    console.error('Database query failed in getUserByUid:', error);
    throw new Error('Failed to fetch user profile.', { cause: error });
  }
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
    return result[0];
  } catch (error) {
    console.error('Database query failed in createContactInquiryRecord:', error);
    throw new Error('Failed to submit contact inquiry.', { cause: error });
  }
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
    return result[0];
  } catch (error) {
    console.error('Database query failed in createPartnerInquiryRecord:', error);
    throw new Error('Failed to submit partner inquiry.', { cause: error });
  }
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
    console.error('Database query failed in createManufacturingRfpRecord:', error);
    throw new Error('Failed to submit manufacturing RFP.', { cause: error });
  }
}

export async function createNewsletterSubscription(email: string, source: string = 'footer') {
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
    console.error('Database query failed in createNewsletterSubscription:', error);
    throw new Error('Failed to subscribe to newsletter.', { cause: error });
  }
}

export async function getInquiriesForUserUid(uid: string) {
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
    console.error('Database query failed in getInquiriesForUserUid:', error);
    throw new Error('Failed to fetch user inquiries.', { cause: error });
  }
}

export async function getAllInquiriesAdmin() {
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
    console.error('Database query failed in getAllInquiriesAdmin:', error);
    throw new Error('Failed to fetch all inquiries.', { cause: error });
  }
}

export async function getCommentsByPostId(postId: string) {
  try {
    return await db
      .select()
      .from(publicationComments)
      .where(eq(publicationComments.postId, postId))
      .orderBy(desc(publicationComments.createdAt));
  } catch (error) {
    console.error('Database query failed in getCommentsByPostId:', error);
    throw new Error('Failed to load publication comments.', { cause: error });
  }
}

export async function addPublicationComment(data: {
  postId: string;
  userId: number;
  authorName: string;
  authorRole?: string;
  content: string;
}) {
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
    console.error('Database query failed in addPublicationComment:', error);
    throw new Error('Failed to post comment.', { cause: error });
  }
}
