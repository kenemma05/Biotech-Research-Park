import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc 
} from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';

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

    const docRef = await addDoc(collection(db, path), payload);
    return docRef.id;
  } catch (error) {
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

    const docRef = await addDoc(collection(db, path), payload);
    return docRef.id;
  } catch (error) {
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

    const docRef = await addDoc(collection(db, path), payload);
    return docRef.id;
  } catch (error) {
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
    const docRef = await addDoc(collection(db, path), payload);
    return docRef.id;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

// 5. Real-time Subscription for User's Own Submissions
export function subscribeToUserInquiries(
  userId: string, 
  callback: (submissions: SubmissionRecord[]) => void
): () => void {
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
    (err) => handleFirestoreError(err, OperationType.LIST, 'contact_inquiries')
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
    (err) => handleFirestoreError(err, OperationType.LIST, 'partner_inquiries')
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
    (err) => handleFirestoreError(err, OperationType.LIST, 'manufacturing_rfps')
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
    (err) => handleFirestoreError(err, OperationType.LIST, 'contact_inquiries')
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
    (err) => handleFirestoreError(err, OperationType.LIST, 'partner_inquiries')
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
    (err) => handleFirestoreError(err, OperationType.LIST, 'manufacturing_rfps')
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
