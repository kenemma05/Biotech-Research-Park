import { 
  collection, 
  addDoc, 
  setDoc,
  getDoc,
  serverTimestamp, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc 
} from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType, isFirebaseConfigured } from '../lib/firebase';

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
  createdAt?: any;
  updatedAt?: any;
}

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

export interface SubmissionRecord {
  id: string;
  type: 'contact' | 'partner' | 'manufacturing';
  title: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  details: string;
  status: 'pending' | 'under_review' | 'scheduled' | 'approved' | 'archived';
  createdAt?: any;
  adminNotes?: string;
}

async function postToRelationalApi(endpoint: string, body: Record<string, any>) {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (auth.currentUser) {
      const token = await auth.currentUser.getIdToken();
      headers['Authorization'] = `Bearer ${token}`;
    }
    await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.warn('Relational sync warning:', err);
  }
}

// 1. Submit General Contact Inquiry
export async function submitContactInquiry(data: ContactInquiryPayload): Promise<string> {
  const path = 'contact_inquiries';
  try {
    const payload: Record<string, any> = {
      name: data.name.trim().slice(0, 100),
      email: data.email.trim().toLowerCase().slice(0, 100),
      inquiryType: data.inquiryType.trim().slice(0, 100),
      message: data.message.trim().slice(0, 3000),
      status: 'pending',
      createdAt: serverTimestamp()
    };

    if (data.phone && data.phone.trim()) {
      payload.phone = data.phone.trim().slice(0, 50);
    }
    if (data.company && data.company.trim()) {
      payload.company = data.company.trim().slice(0, 100);
    }
    if (auth.currentUser) {
      payload.userId = auth.currentUser.uid;
    }

    await postToRelationalApi('/api/inquiries/contact', payload);
    if (!isFirebaseConfigured) {
      return `contact_${Date.now()}`;
    }
    const docRef = await addDoc(collection(db, path), payload);
    return docRef.id;
  } catch (error) {
    if (!isFirebaseConfigured) {
      return `contact_${Date.now()}`;
    }
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// 2. Submit Partner / Modal Inquiry
export async function submitPartnerInquiry(data: PartnerInquiryPayload): Promise<string> {
  const path = 'partner_inquiries';
  try {
    const payload: Record<string, any> = {
      name: data.name.trim().slice(0, 100),
      email: data.email.trim().toLowerCase().slice(0, 100),
      subject: data.subject.trim().slice(0, 150),
      message: data.message.trim().slice(0, 3000),
      status: 'pending',
      createdAt: serverTimestamp()
    };

    if (data.phone && data.phone.trim()) {
      payload.phone = data.phone.trim().slice(0, 50);
    }
    if (data.company && data.company.trim()) {
      payload.company = data.company.trim().slice(0, 100);
    }
    if (auth.currentUser) {
      payload.userId = auth.currentUser.uid;
    }

    await postToRelationalApi('/api/inquiries/partner', payload);
    if (!isFirebaseConfigured) {
      return `partner_${Date.now()}`;
    }
    const docRef = await addDoc(collection(db, path), payload);
    return docRef.id;
  } catch (error) {
    if (!isFirebaseConfigured) {
      return `partner_${Date.now()}`;
    }
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// 3. Submit CDMO Biomanufacturing RFP
export async function submitManufacturingRfp(data: ManufacturingRfpPayload): Promise<string> {
  const path = 'manufacturing_rfps';
  try {
    const payload: Record<string, any> = {
      name: data.name.trim().slice(0, 100),
      email: data.email.trim().toLowerCase().slice(0, 100),
      modality: data.modality.trim().slice(0, 100),
      phase: data.phase.trim().slice(0, 100),
      targetVolume: data.targetVolume.trim().slice(0, 50),
      fillFinishFormat: data.fillFinishFormat.trim().slice(0, 100),
      projectTimeline: data.projectTimeline.trim().slice(0, 50),
      status: 'pending',
      createdAt: serverTimestamp()
    };

    if (data.company && data.company.trim()) {
      payload.company = data.company.trim().slice(0, 100);
    }
    if (data.notes && data.notes.trim()) {
      payload.notes = data.notes.trim().slice(0, 3000);
    }
    if (auth.currentUser) {
      payload.userId = auth.currentUser.uid;
    }

    await postToRelationalApi('/api/inquiries/manufacturing', payload);
    if (!isFirebaseConfigured) {
      return `rfp_${Date.now()}`;
    }
    const docRef = await addDoc(collection(db, path), payload);
    return docRef.id;
  } catch (error) {
    if (!isFirebaseConfigured) {
      return `rfp_${Date.now()}`;
    }
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// 4. Subscribe Newsletter
export async function subscribeNewsletter(email: string, source: string = 'footer'): Promise<string> {
  const path = 'newsletter_subscribers';
  try {
    const payload = {
      email: email.trim().toLowerCase().slice(0, 100),
      source: source.trim().slice(0, 100),
      createdAt: serverTimestamp()
    };
    await postToRelationalApi('/api/newsletter', payload);
    if (!isFirebaseConfigured) {
      return `sub_${Date.now()}`;
    }
    const docRef = await addDoc(collection(db, path), payload);
    return docRef.id;
  } catch (error) {
    if (!isFirebaseConfigured) {
      return `sub_${Date.now()}`;
    }
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// 5. Real-time Subscription for User's Own Submissions
export function subscribeToUserInquiries(
  userId: string, 
  callback: (submissions: SubmissionRecord[]) => void
): () => void {
  if (!isFirebaseConfigured) {
    callback([]);
    return () => {};
  }
  const results: Record<string, SubmissionRecord> = {};

  const unsubContact = onSnapshot(
    query(collection(db, 'contact_inquiries'), where('userId', '==', userId)),
    (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'removed') {
          delete results[`contact_${change.doc.id}`];
        } else {
          const d = change.doc.data();
          results[`contact_${change.doc.id}`] = {
            id: change.doc.id,
            type: 'contact',
            title: d.inquiryType || 'General Inquiry',
            name: d.name,
            email: d.email,
            company: d.company,
            phone: d.phone,
            details: d.message,
            status: d.status,
            createdAt: d.createdAt,
            adminNotes: d.adminNotes
          };
        }
      });
      callback(Object.values(results));
    },
    (err) => {
      console.warn('Contact inquiries stream notice:', err?.message || err);
    }
  );

  const unsubPartner = onSnapshot(
    query(collection(db, 'partner_inquiries'), where('userId', '==', userId)),
    (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'removed') {
          delete results[`partner_${change.doc.id}`];
        } else {
          const d = change.doc.data();
          results[`partner_${change.doc.id}`] = {
            id: change.doc.id,
            type: 'partner',
            title: d.subject || 'Partner Inquiry',
            name: d.name,
            email: d.email,
            company: d.company,
            phone: d.phone,
            details: d.message,
            status: d.status,
            createdAt: d.createdAt,
            adminNotes: d.adminNotes
          };
        }
      });
      callback(Object.values(results));
    },
    (err) => {
      console.warn('Partner inquiries stream notice:', err?.message || err);
    }
  );

  const unsubRfp = onSnapshot(
    query(collection(db, 'manufacturing_rfps'), where('userId', '==', userId)),
    (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'removed') {
          delete results[`rfp_${change.doc.id}`];
        } else {
          const d = change.doc.data();
          results[`rfp_${change.doc.id}`] = {
            id: change.doc.id,
            type: 'manufacturing',
            title: `CDMO RFP: ${d.modality} (${d.targetVolume})`,
            name: d.name,
            email: d.email,
            company: d.company,
            details: `Phase: ${d.phase} | Fill: ${d.fillFinishFormat} | Timeline: ${d.projectTimeline}${d.notes ? ` | Notes: ${d.notes}` : ''}`,
            status: d.status,
            createdAt: d.createdAt,
            adminNotes: d.adminNotes
          };
        }
      });
      callback(Object.values(results));
    },
    (err) => {
      console.warn('Manufacturing RFPs stream notice:', err?.message || err);
    }
  );

  return () => {
    unsubContact();
    unsubPartner();
    unsubRfp();
  };
}

// 6. Admin Real-time Feed
export function subscribeToAllInquiriesForAdmin(
  callback: (submissions: SubmissionRecord[]) => void
): () => void {
  if (!isFirebaseConfigured) {
    callback([]);
    return () => {};
  }
  const results: Record<string, SubmissionRecord> = {};

  const unsubContact = onSnapshot(
    collection(db, 'contact_inquiries'),
    (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'removed') {
          delete results[`contact_${change.doc.id}`];
        } else {
          const d = change.doc.data();
          results[`contact_${change.doc.id}`] = {
            id: change.doc.id,
            type: 'contact',
            title: d.inquiryType || 'General Contact',
            name: d.name,
            email: d.email,
            company: d.company,
            phone: d.phone,
            details: d.message,
            status: d.status,
            createdAt: d.createdAt,
            adminNotes: d.adminNotes
          };
        }
      });
      callback(Object.values(results));
    },
    (err) => {
      console.warn('Admin contact inquiries stream notice:', err?.message || err);
    }
  );

  const unsubPartner = onSnapshot(
    collection(db, 'partner_inquiries'),
    (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'removed') {
          delete results[`partner_${change.doc.id}`];
        } else {
          const d = change.doc.data();
          results[`partner_${change.doc.id}`] = {
            id: change.doc.id,
            type: 'partner',
            title: d.subject || 'Partner Engagement',
            name: d.name,
            email: d.email,
            company: d.company,
            phone: d.phone,
            details: d.message,
            status: d.status,
            createdAt: d.createdAt,
            adminNotes: d.adminNotes
          };
        }
      });
      callback(Object.values(results));
    },
    (err) => {
      console.warn('Admin partner inquiries stream notice:', err?.message || err);
    }
  );

  const unsubRfp = onSnapshot(
    collection(db, 'manufacturing_rfps'),
    (snapshot) => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'removed') {
          delete results[`rfp_${change.doc.id}`];
        } else {
          const d = change.doc.data();
          results[`rfp_${change.doc.id}`] = {
            id: change.doc.id,
            type: 'manufacturing',
            title: `CDMO RFP: ${d.modality} (${d.targetVolume})`,
            name: d.name,
            email: d.email,
            company: d.company,
            details: `Phase: ${d.phase} | Fill: ${d.fillFinishFormat} | Timeline: ${d.projectTimeline}${d.notes ? ` | Notes: ${d.notes}` : ''}`,
            status: d.status,
            createdAt: d.createdAt,
            adminNotes: d.adminNotes
          };
        }
      });
      callback(Object.values(results));
    },
    (err) => {
      console.warn('Admin manufacturing RFPs stream notice:', err?.message || err);
    }
  );

  return () => {
    unsubContact();
    unsubPartner();
    unsubRfp();
  };
}

// 7. Update status (Admin)
export async function updateInquiryStatus(
  collectionName: 'contact_inquiries' | 'partner_inquiries' | 'manufacturing_rfps',
  id: string,
  newStatus: 'pending' | 'under_review' | 'scheduled' | 'approved' | 'archived',
  adminNotes?: string
): Promise<void> {
  if (!isFirebaseConfigured) return;
  const path = `${collectionName}/${id}`;
  try {
    const docRef = doc(db, collectionName, id);
    const updates: Record<string, any> = {
      status: newStatus,
      updatedAt: serverTimestamp()
    };
    if (adminNotes !== undefined) {
      updates.adminNotes = adminNotes.slice(0, 1000);
    }
    await updateDoc(docRef, updates);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

const profileListeners = new Set<(profile: UserProfileData | null) => void>();

function notifyProfileListeners(profile: UserProfileData | null) {
  profileListeners.forEach((listener) => {
    try {
      listener(profile);
    } catch (e) {
      console.warn('Profile listener error:', e);
    }
  });
}

// 8. Create or Save Partner User Profile
export async function saveUserProfile(data: Omit<UserProfileData, 'createdAt' | 'updatedAt'>): Promise<void> {
  const path = `user_profiles/${data.userId}`;
  try {
    const docRef = doc(db, 'user_profiles', data.userId);
    const payload: Record<string, any> = {
      userId: data.userId.trim().slice(0, 128),
      fullName: data.fullName.trim().slice(0, 100),
      email: data.email.trim().toLowerCase().slice(0, 100),
      username: data.username.trim().slice(0, 50),
      organization: data.organization.trim().slice(0, 150),
      jobTitle: data.jobTitle.trim().slice(0, 100),
      partnerType: data.partnerType.trim(),
      phoneNumber: data.phoneNumber.trim().slice(0, 40),
      addressLine1: data.addressLine1.trim().slice(0, 200),
      city: data.city.trim().slice(0, 100),
      country: data.country.trim().slice(0, 100),
      emailVerified: Boolean(data.emailVerified),
      accountStatus: data.accountStatus,
      createdAt: serverTimestamp()
    };

    if (data.addressLine2 && data.addressLine2.trim()) {
      payload.addressLine2 = data.addressLine2.trim().slice(0, 200);
    }
    if (data.stateProvinceRegion && data.stateProvinceRegion.trim()) {
      payload.stateProvinceRegion = data.stateProvinceRegion.trim().slice(0, 100);
    }
    if (data.zipPostalCode && data.zipPostalCode.trim()) {
      payload.zipPostalCode = data.zipPostalCode.trim().slice(0, 30);
    }

    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(`partner_profile_${data.userId}`, JSON.stringify(payload));
      }
      notifyProfileListeners(payload as UserProfileData);
    } catch {
      // ignore
    }

    await postToRelationalApi('/api/profile', payload);
    if (!isFirebaseConfigured) return;
    try {
      await setDoc(docRef, payload);
    } catch (fsErr) {
      console.warn('Firestore user profile sync warning (operating with PostgreSQL):', fsErr);
    }
  } catch (error) {
    if (!isFirebaseConfigured) return;
    console.warn('Profile save warning:', error);
  }
}

// 9. Get Partner User Profile
export async function getUserProfile(userId: string): Promise<UserProfileData | null> {
  try {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(`partner_profile_${userId}`);
      if (stored) return JSON.parse(stored) as UserProfileData;
    }
  } catch {
    // ignore
  }

  if (!isFirebaseConfigured) {
    return null;
  }

  const path = `user_profiles/${userId}`;
  try {
    const snap = await getDoc(doc(db, 'user_profiles', userId));
    if (!snap.exists()) return null;
    return snap.data() as UserProfileData;
  } catch (error) {
    console.warn('Firestore profile get notice:', error);
    return null;
  }
}

// 10. Subscribe to Current User's Partner Profile
export function subscribeToUserProfile(
  userId: string,
  callback: (profile: UserProfileData | null) => void
): () => void {
  // Always provide initial state from localStorage if available
  try {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(`partner_profile_${userId}`);
      callback(stored ? (JSON.parse(stored) as UserProfileData) : null);
    } else {
      callback(null);
    }
  } catch {
    callback(null);
  }

  profileListeners.add(callback);

  if (!isFirebaseConfigured) {
    return () => {
      profileListeners.delete(callback);
    };
  }

  const path = `user_profiles/${userId}`;
  let unsub: (() => void) | null = null;
  try {
    unsub = onSnapshot(
      doc(db, 'user_profiles', userId),
      (snap) => {
        if (snap.exists()) {
          callback(snap.data() as UserProfileData);
        }
      },
      (err) => {
        console.warn('Firestore profile subscription notice:', err);
      }
    );
  } catch (err) {
    console.warn('Firestore snapshot setup notice:', err);
  }

  return () => {
    profileListeners.delete(callback);
    if (unsub) {
      unsub();
    }
  };
}
