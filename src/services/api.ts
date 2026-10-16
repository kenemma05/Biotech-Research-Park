/**
 * @file api.ts
 * CRUD services for Research Inquiries, CDMO Service Requests, and Laboratory Data.
 * Connects with the secure enterprise backend service.
 */

// ---------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------

export interface ContactInquiry {
  id: number;
  userId?: number | null;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  inquiryType: string;
  message: string;
  status: 'pending' | 'under_review' | 'scheduled' | 'approved' | 'archived';
  adminNotes?: string | null;
  createdAt: string | Date;
  updatedAt?: string | Date;
}

export interface PartnerInquiry {
  id: number;
  userId?: number | null;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  subject: string;
  message: string;
  status: 'pending' | 'under_review' | 'scheduled' | 'approved' | 'archived';
  adminNotes?: string | null;
  createdAt: string | Date;
  updatedAt?: string | Date;
}

export interface ManufacturingRfp {
  id: number;
  userId?: number | null;
  name: string;
  email: string;
  company?: string | null;
  modality: string;
  phase: string;
  targetVolume: string;
  fillFinishFormat: string;
  projectTimeline: string;
  notes?: string | null;
  status: 'pending' | 'under_review' | 'feasibility_passed' | 'contracted' | 'rejected';
  adminNotes?: string | null;
  createdAt: string | Date;
  updatedAt?: string | Date;
}

export interface FacilitySuiteMetric {
  id: number;
  suite: string;
  shortName: string;
  grade: string;
  isoClass: string;
  areaM2: number;
  utilizationRate: number;
  throughputCapacity: string;
  activeStatus: 'Operational' | 'Validated' | 'Maintenance' | 'Under Audit';
  sortOrder: number;
  updatedAt?: string | Date;
}

export interface FacilityThroughputMetric {
  id: number;
  month: string;
  vialsFilledThousand: number;
  bioreactorVolumeLiters: number;
  overallUtilization: number;
  sortOrder: number;
  updatedAt?: string | Date;
}

export interface ResearchPaper {
  id: number;
  paperCode: string;
  slug: string;
  title: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorInitials: string;
  publishedDate: string;
  readTime: string;
  excerpt: string;
  contentSnippet: string;
  tagsJson: string | string[];
  imageUrl: string;
  imageCaption?: string | null;
  keyMetricsJson?: string | Record<string, any>;
  fullSectionsJson?: string | any[];
  createdAt: string | Date;
  updatedAt?: string | Date;
}

export interface PublicationComment {
  id: number;
  postId: string;
  userId: number;
  authorName: string;
  authorRole?: string | null;
  content: string;
  createdAt: string | Date;
}

// ---------------------------------------------------------------------
// Helper HTTP Fetcher
// ---------------------------------------------------------------------

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers || {});
  if (!headers.has('Content-Type') && options.method && options.method !== 'GET') {
    headers.set('Content-Type', 'application/json');
  }

  if (!headers.has('Authorization') && typeof localStorage !== 'undefined') {
    try {
      const rawSession = localStorage.getItem('bedfordshire_partner_session');
      if (rawSession) {
        const parsed = JSON.parse(rawSession);
        if (parsed?.email) {
          const token = btoa(
            JSON.stringify({
              uid: parsed.uid || 'partner_session',
              email: parsed.email,
              name: parsed.displayName || parsed.email,
              email_verified: parsed.emailVerified ?? true,
            })
          );
          headers.set('Authorization', `Bearer ${token}`);
        }
      }
    } catch {}
  }

  const res = await fetch(endpoint, {
    ...options,
    headers,
  });

  if (!res.ok) {
    let errMessage = `HTTP Error ${res.status}: ${res.statusText}`;
    try {
      const data = await res.json();
      if (data?.error) errMessage = data.error;
    } catch {}
    throw new Error(errMessage);
  }

  return (await res.json()) as T;
}

// ---------------------------------------------------------------------
// 1. RESEARCH INQUIRIES CRUD
// ---------------------------------------------------------------------

export const inquiriesApi = {
  // Create general inquiry
  async createContactInquiry(data: Omit<ContactInquiry, 'id' | 'createdAt' | 'status' | 'updatedAt' | 'adminNotes'>): Promise<ContactInquiry> {
    return request<ContactInquiry>('/api/inquiries/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Create partner / strategic inquiry
  async createPartnerInquiry(data: Omit<PartnerInquiry, 'id' | 'createdAt' | 'status' | 'updatedAt' | 'adminNotes'>): Promise<PartnerInquiry> {
    return request<PartnerInquiry>('/api/inquiries/partner', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Read all user inquiries or admin feed
  async getInquiries(): Promise<{
    contacts: ContactInquiry[];
    partners: PartnerInquiry[];
    rfps: ManufacturingRfp[];
  }> {
    return request<{
      contacts: ContactInquiry[];
      partners: PartnerInquiry[];
      rfps: ManufacturingRfp[];
    }>('/api/inquiries');
  },

  // Update inquiry status
  async updateStatus(
    type: 'contact' | 'partner' | 'manufacturing',
    id: number,
    status: string,
    adminNotes?: string
  ): Promise<{ success: boolean; id: number; status: string }> {
    return request<{ success: boolean; id: number; status: string }>(`/api/inquiries/${type}/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, adminNotes }),
    });
  },

  // Delete an inquiry record
  async deleteInquiry(type: 'contact' | 'partner' | 'manufacturing', id: number): Promise<{ success: boolean }> {
    return request<{ success: boolean }>(`/api/inquiries/${type}/${id}`, {
      method: 'DELETE',
    });
  },
};

// ---------------------------------------------------------------------
// 2. CDMO BIOMANUFACTURING SERVICE REQUESTS CRUD
// ---------------------------------------------------------------------

export const cdmoApi = {
  // Create CDMO Manufacturing RFP
  async createManufacturingRfp(
    data: Omit<ManufacturingRfp, 'id' | 'createdAt' | 'status' | 'updatedAt' | 'adminNotes'>
  ): Promise<ManufacturingRfp> {
    return request<ManufacturingRfp>('/api/inquiries/manufacturing', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Get all RFPs
  async getManufacturingRfps(): Promise<ManufacturingRfp[]> {
    const res = await inquiriesApi.getInquiries();
    return res.rfps || [];
  },

  // Update RFP status (feasibility, review, contracting)
  async updateRfpStatus(
    id: number,
    status: 'pending' | 'under_review' | 'feasibility_passed' | 'contracted' | 'rejected',
    adminNotes?: string
  ): Promise<{ success: boolean; id: number; status: string }> {
    return inquiriesApi.updateStatus('manufacturing', id, status, adminNotes);
  },
};

// ---------------------------------------------------------------------
// 3. NEWSLETTER & SUBSCRIBERS CRUD
// ---------------------------------------------------------------------

export const newsletterApi = {
  async subscribe(email: string, source: string = 'website_footer'): Promise<{ id: number; email: string }> {
    return request<{ id: number; email: string }>('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email, source }),
    });
  },
};

// ---------------------------------------------------------------------
// 4. LABORATORY DATA & TELEMETRY CRUD
// ---------------------------------------------------------------------

export const laboratoryApi = {
  // Read cleanroom suite metrics
  async getSuiteMetrics(): Promise<FacilitySuiteMetric[]> {
    try {
      return await request<FacilitySuiteMetric[]>('/api/laboratory/suites');
    } catch {
      // Fallback baseline telemetry
      return [
        {
          id: 1,
          suite: 'Suite A-01: Robotic Isolator Vial Filling',
          shortName: 'Suite A-01',
          grade: 'Grade A/B',
          isoClass: 'ISO 5',
          areaM2: 380,
          utilizationRate: 84,
          throughputCapacity: '24,000 vials/day sterile liquid/lyo',
          activeStatus: 'Operational',
          sortOrder: 1,
        },
        {
          id: 2,
          suite: 'Suite B-02: Continuous Perfusion Bioreactors',
          shortName: 'Suite B-02',
          grade: 'Grade C',
          isoClass: 'ISO 7',
          areaM2: 520,
          utilizationRate: 91,
          throughputCapacity: '2x 2,000L SUB + ATF cell-retention loop',
          activeStatus: 'Operational',
          sortOrder: 2,
        },
        {
          id: 3,
          suite: 'Suite C-03: mRNA-LNP Microfluidic Assembly',
          shortName: 'Suite C-03',
          grade: 'Grade C/B',
          isoClass: 'ISO 6',
          areaM2: 310,
          utilizationRate: 72,
          throughputCapacity: '120L/hr turbulent jet-mixing formulation',
          activeStatus: 'Operational',
          sortOrder: 3,
        },
        {
          id: 4,
          suite: 'Suite D-04: Mass Spectrometry & Analytical QA',
          shortName: 'Suite D-04',
          grade: 'Analytical C',
          isoClass: 'ISO 8',
          areaM2: 440,
          utilizationRate: 78,
          throughputCapacity: 'Triple-quad LC-MS/MS, ICP-MS, HPLC',
          activeStatus: 'Operational',
          sortOrder: 4,
        },
      ];
    }
  },

  // Update suite operational rate or status
  async updateSuiteMetric(
    suiteId: string | number,
    updates: Partial<FacilitySuiteMetric>
  ): Promise<FacilitySuiteMetric> {
    return request<FacilitySuiteMetric>(`/api/laboratory/suites/${suiteId}`, {
      method: 'PATCH',
      body: JSON.stringify(updates),
    });
  },

  // Read monthly bioprocessing throughput telemetry
  async getThroughputTelemetry(): Promise<FacilityThroughputMetric[]> {
    try {
      return await request<FacilityThroughputMetric[]>('/api/laboratory/throughput');
    } catch {
      // Baseline historical data
      return [
        { id: 1, month: 'Jan', vialsFilledThousand: 420, bioreactorVolumeLiters: 14200, overallUtilization: 81, sortOrder: 1 },
        { id: 2, month: 'Feb', vialsFilledThousand: 460, bioreactorVolumeLiters: 15600, overallUtilization: 84, sortOrder: 2 },
        { id: 3, month: 'Mar', vialsFilledThousand: 510, bioreactorVolumeLiters: 17200, overallUtilization: 88, sortOrder: 3 },
        { id: 4, month: 'Apr', vialsFilledThousand: 540, bioreactorVolumeLiters: 18100, overallUtilization: 90, sortOrder: 4 },
        { id: 5, month: 'May', vialsFilledThousand: 590, bioreactorVolumeLiters: 19800, overallUtilization: 93, sortOrder: 5 },
        { id: 6, month: 'Jun', vialsFilledThousand: 620, bioreactorVolumeLiters: 20400, overallUtilization: 95, sortOrder: 6 },
      ];
    }
  },

  // Record/create monthly throughput metric
  async recordThroughputTelemetry(data: Omit<FacilityThroughputMetric, 'id'>): Promise<FacilityThroughputMetric> {
    return request<FacilityThroughputMetric>('/api/laboratory/throughput', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Read scientific research publications
  async getResearchPapers(): Promise<ResearchPaper[]> {
    return request<ResearchPaper[]>('/api/laboratory/papers');
  },

  // Create research paper
  async createResearchPaper(data: Omit<ResearchPaper, 'id' | 'createdAt' | 'updatedAt'>): Promise<ResearchPaper> {
    return request<ResearchPaper>('/api/laboratory/papers', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Get comments on scientific paper
  async getPublicationComments(postId: string): Promise<PublicationComment[]> {
    return request<PublicationComment[]>(`/api/publications/${encodeURIComponent(postId)}/comments`);
  },

  // Add scientific commentary
  async addPublicationComment(postId: string, content: string, authorName?: string, authorRole?: string): Promise<PublicationComment> {
    return request<PublicationComment>(`/api/publications/${encodeURIComponent(postId)}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content, authorName, authorRole }),
    });
  },
};
