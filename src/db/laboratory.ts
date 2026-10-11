import { db } from '../lib/db.ts';
import {
  facilitySuiteMetrics,
  facilityThroughputMetrics,
  researchPapers,
  contactInquiries,
  partnerInquiries,
  manufacturingRfps,
} from './schema.ts';
import { eq, desc } from 'drizzle-orm';

// In-memory baseline storage for laboratory telemetry
const memorySuites = [
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

const memoryThroughput = [
  { id: 1, month: 'Jan', vialsFilledThousand: 420, bioreactorVolumeLiters: 14200, overallUtilization: 81, sortOrder: 1 },
  { id: 2, month: 'Feb', vialsFilledThousand: 460, bioreactorVolumeLiters: 15600, overallUtilization: 84, sortOrder: 2 },
  { id: 3, month: 'Mar', vialsFilledThousand: 510, bioreactorVolumeLiters: 17200, overallUtilization: 88, sortOrder: 3 },
  { id: 4, month: 'Apr', vialsFilledThousand: 540, bioreactorVolumeLiters: 18100, overallUtilization: 90, sortOrder: 4 },
  { id: 5, month: 'May', vialsFilledThousand: 590, bioreactorVolumeLiters: 19800, overallUtilization: 93, sortOrder: 5 },
  { id: 6, month: 'Jun', vialsFilledThousand: 620, bioreactorVolumeLiters: 20400, overallUtilization: 95, sortOrder: 6 },
];

const memoryPapers = [
  {
    id: 1,
    paperCode: 'BIO-2025-081',
    slug: 'continuous-perfusion-bioprocess-scale',
    title: 'Continuous Perfusion Bioprocessing: Volumetric Productivity Kinetics in Single-Use Bioreactors',
    category: 'Bioprocess Engineering',
    authorName: 'Dr. Sarah Lin, FRSC',
    authorRole: 'Downstream Bioprocess Specialist',
    authorInitials: 'SL',
    publishedDate: '18 September 2025',
    readTime: '8 min read',
    excerpt: 'Benchmarking 2.5x volumetric productivity gains and hollow-fiber filtration yields across 500L perfusion suites.',
    contentSnippet: 'Evaluation of hollow-fiber tangential flow filtration modules linked to alternating tangential flow (ATF) loops.',
    tagsJson: '["Perfusion", "ATF", "Continuous Bioprocessing", "GMP"]',
    imageUrl: '/src/assets/images/pub_continuous_perfusion_bioreactor_1791520285599.jpg',
    createdAt: new Date(),
  },
  {
    id: 2,
    paperCode: 'BIO-2025-094',
    slug: 'mrna-lnp-microfluidic-stability',
    title: 'Lipid Nanoparticle Hydrodynamic Radius and Encapsulation Efficiency Optimization',
    category: 'Advanced Formulations',
    authorName: 'Dr. Alan Thorne',
    authorRole: 'Head of Nanomedicine & Liposomal Delivery',
    authorInitials: 'AT',
    publishedDate: '24 September 2025',
    readTime: '10 min read',
    excerpt: 'Turbulent jet-mixing parameters for narrow PDI lipid nanoparticles holding self-amplifying mRNA payloads.',
    contentSnippet: 'High-throughput microfluidic array chips demonstrating >95% encapsulation efficiency under 80 kPa inline pressure.',
    tagsJson: '["mRNA", "LNP", "Microfluidics", "Targeted Delivery"]',
    imageUrl: '/src/assets/images/pub_mrna_lnp_microfluidics_1791520265708.jpg',
    createdAt: new Date(),
  },
];

// 1. Suite Metrics CRUD
export async function getFacilitySuiteMetrics() {
  if (db) {
    try {
      const rows = await db.select().from(facilitySuiteMetrics).orderBy(facilitySuiteMetrics.sortOrder);
      if (rows && rows.length > 0) return rows;
    } catch (err) {
      console.warn('Falling back to memory suites:', err);
    }
  }
  return memorySuites;
}

export async function updateFacilitySuiteMetric(suiteId: string | number, updates: any) {
  if (db) {
    try {
      const idNum = Number(suiteId);
      if (!isNaN(idNum)) {
        const rows = await db
          .update(facilitySuiteMetrics)
          .set({ ...updates, updatedAt: new Date() })
          .where(eq(facilitySuiteMetrics.id, idNum))
          .returning();
        if (rows[0]) return rows[0];
      }
    } catch (err) {
      console.warn('DB update failed for suite metric:', err);
    }
  }

  const item = memorySuites.find((s) => s.id === Number(suiteId) || s.shortName === suiteId);
  if (item) {
    Object.assign(item, updates);
    return item;
  }
  return { id: Number(suiteId), ...updates };
}

// 2. Throughput Telemetry CRUD
export async function getFacilityThroughputMetrics() {
  if (db) {
    try {
      const rows = await db.select().from(facilityThroughputMetrics).orderBy(facilityThroughputMetrics.sortOrder);
      if (rows && rows.length > 0) return rows;
    } catch (err) {
      console.warn('Falling back to memory throughput:', err);
    }
  }
  return memoryThroughput;
}

export async function recordFacilityThroughputMetric(data: any) {
  if (db) {
    try {
      const rows = await db.insert(facilityThroughputMetrics).values(data).returning();
      if (rows[0]) return rows[0];
    } catch (err) {
      console.warn('DB insert failed for throughput:', err);
    }
  }

  const record = { id: memoryThroughput.length + 1, ...data };
  memoryThroughput.push(record);
  return record;
}

// 3. Research Papers CRUD
export async function getResearchPapers() {
  if (db) {
    try {
      const rows = await db.select().from(researchPapers).orderBy(desc(researchPapers.createdAt));
      if (rows && rows.length > 0) return rows;
    } catch (err) {
      console.warn('Falling back to memory papers:', err);
    }
  }
  return memoryPapers;
}

export async function createResearchPaper(data: any) {
  if (db) {
    try {
      const rows = await db.insert(researchPapers).values(data).returning();
      if (rows[0]) return rows[0];
    } catch (err) {
      console.warn('DB insert failed for research paper:', err);
    }
  }

  const record = { id: memoryPapers.length + 1, ...data, createdAt: new Date() };
  memoryPapers.unshift(record);
  return record;
}

// 4. Update & Delete Inquiries / RFPs
export async function updateInquiryStatusDb(type: string, id: number, status: string, adminNotes?: string) {
  if (db) {
    try {
      if (type === 'contact') {
        await db.update(contactInquiries).set({ status, adminNotes, updatedAt: new Date() }).where(eq(contactInquiries.id, id));
      } else if (type === 'partner') {
        await db.update(partnerInquiries).set({ status, adminNotes, updatedAt: new Date() }).where(eq(partnerInquiries.id, id));
      } else if (type === 'manufacturing') {
        await db.update(manufacturingRfps).set({ status, adminNotes, updatedAt: new Date() }).where(eq(manufacturingRfps.id, id));
      }
    } catch (err) {
      console.warn('DB status update failed:', err);
    }
  }
  return { success: true, id, status };
}

export async function deleteInquiryDb(type: string, id: number) {
  if (db) {
    try {
      if (type === 'contact') {
        await db.delete(contactInquiries).where(eq(contactInquiries.id, id));
      } else if (type === 'partner') {
        await db.delete(partnerInquiries).where(eq(partnerInquiries.id, id));
      } else if (type === 'manufacturing') {
        await db.delete(manufacturingRfps).where(eq(manufacturingRfps.id, id));
      }
    } catch (err) {
      console.warn('DB delete failed:', err);
    }
  }
  return { success: true };
}
