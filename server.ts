import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { requireAuth, optionalAuth, AuthRequest } from './src/middleware/auth.ts';
import {
  getOrCreateUser,
  upsertUserProfile,
  getUserByUid,
  createContactInquiryRecord,
  createPartnerInquiryRecord,
  createManufacturingRfpRecord,
  createNewsletterSubscription,
  getInquiriesForUserUid,
  getAllInquiriesAdmin,
  getCommentsByPostId,
  addPublicationComment,
} from './src/db/users.ts';
import {
  getFacilitySuiteMetrics,
  updateFacilitySuiteMetric,
  getFacilityThroughputMetrics,
  recordFacilityThroughputMetric,
  getResearchPapers,
  createResearchPaper,
  updateInquiryStatusDb,
  deleteInquiryDb,
} from './src/db/laboratory.ts';
import { testNeonConnection } from './src/lib/db.ts';

const ADMIN_EMAILS = ['felixeric813@gmail.com', 'kenemma05@gmail.com', 'emmakenn005@gmail.com'];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Sync / get current authenticated user profile
  app.get('/api/me', requireAuth, async (req: AuthRequest, res) => {
    try {
      const uid = req.user!.uid;
      const email = req.user!.email || '';
      const name = req.user!.name || undefined;
      const userRecord = await getOrCreateUser(uid, email, name);
      res.json(userRecord);
    } catch (error: any) {
      console.error('Failed to sync user:', error);
      res.status(500).json({ error: error.message || 'Failed to sync user' });
    }
  });

  // Update partner profile in PostgreSQL
  app.post('/api/profile', requireAuth, async (req: AuthRequest, res) => {
    try {
      const uid = req.user!.uid;
      const email = req.user!.email || req.body.email || '';
      const updated = await upsertUserProfile(uid, {
        email,
        fullName: req.body.fullName || '',
        username: req.body.username || '',
        organization: req.body.organization || '',
        jobTitle: req.body.jobTitle || '',
        partnerType: req.body.partnerType || '',
        phoneNumber: req.body.phoneNumber || '',
        addressLine1: req.body.addressLine1 || '',
        addressLine2: req.body.addressLine2,
        city: req.body.city || '',
        stateProvinceRegion: req.body.stateProvinceRegion,
        zipPostalCode: req.body.zipPostalCode,
        country: req.body.country || '',
        emailVerified: Boolean(req.user!.email_verified ?? req.body.emailVerified),
        accountStatus: req.body.accountStatus || 'active',
      });
      res.json(updated);
    } catch (error: any) {
      console.error('Failed to save profile:', error);
      res.status(500).json({ error: error.message || 'Failed to save profile' });
    }
  });

  // Submit general contact inquiry
  app.post('/api/inquiries/contact', optionalAuth, async (req: AuthRequest, res) => {
    try {
      let dbUserId: number | null = null;
      if (req.user?.uid) {
        const u = await getOrCreateUser(req.user.uid, req.user.email || req.body.email || '');
        dbUserId = u.id;
      }
      const record = await createContactInquiryRecord({
        userId: dbUserId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        company: req.body.company,
        inquiryType: req.body.inquiryType,
        message: req.body.message,
      });
      res.status(201).json(record);
    } catch (error: any) {
      console.error('Failed to submit contact inquiry:', error);
      res.status(500).json({ error: error.message || 'Failed to submit contact inquiry' });
    }
  });

  // Submit partner inquiry
  app.post('/api/inquiries/partner', optionalAuth, async (req: AuthRequest, res) => {
    try {
      let dbUserId: number | null = null;
      if (req.user?.uid) {
        const u = await getOrCreateUser(req.user.uid, req.user.email || req.body.email || '');
        dbUserId = u.id;
      }
      const record = await createPartnerInquiryRecord({
        userId: dbUserId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        company: req.body.company,
        subject: req.body.subject,
        message: req.body.message,
      });
      res.status(201).json(record);
    } catch (error: any) {
      console.error('Failed to submit partner inquiry:', error);
      res.status(500).json({ error: error.message || 'Failed to submit partner inquiry' });
    }
  });

  // Submit manufacturing RFP
  app.post('/api/inquiries/manufacturing', optionalAuth, async (req: AuthRequest, res) => {
    try {
      let dbUserId: number | null = null;
      if (req.user?.uid) {
        const u = await getOrCreateUser(req.user.uid, req.user.email || req.body.email || '');
        dbUserId = u.id;
      }
      const record = await createManufacturingRfpRecord({
        userId: dbUserId,
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        modality: req.body.modality,
        phase: req.body.phase,
        targetVolume: req.body.targetVolume,
        fillFinishFormat: req.body.fillFinishFormat,
        projectTimeline: req.body.projectTimeline,
        notes: req.body.notes,
      });
      res.status(201).json(record);
    } catch (error: any) {
      console.error('Failed to submit manufacturing RFP:', error);
      res.status(500).json({ error: error.message || 'Failed to submit manufacturing RFP' });
    }
  });

  // Subscribe to newsletter
  app.post('/api/newsletter', async (req, res) => {
    try {
      const record = await createNewsletterSubscription(req.body.email, req.body.source || 'footer');
      res.status(201).json(record);
    } catch (error: any) {
      console.error('Failed to subscribe newsletter:', error);
      res.status(500).json({ error: error.message || 'Failed to subscribe newsletter' });
    }
  });

  // Fetch authenticated user's or admin's inquiries
  app.get('/api/inquiries', requireAuth, async (req: AuthRequest, res) => {
    try {
      const email = req.user!.email || '';
      const isAdmin = ADMIN_EMAILS.includes(email) && Boolean(req.user!.email_verified);
      const data = isAdmin
        ? await getAllInquiriesAdmin()
        : await getInquiriesForUserUid(req.user!.uid);
      res.json(data);
    } catch (error: any) {
      console.error('Failed to fetch inquiries:', error);
      res.status(500).json({ error: error.message || 'Failed to fetch inquiries' });
    }
  });

  // Fetch comments for a publication post
  app.get('/api/publications/:postId/comments', async (req, res) => {
    try {
      const comments = await getCommentsByPostId(req.params.postId);
      res.json(comments);
    } catch (error: any) {
      console.error('Failed to fetch comments:', error);
      res.status(500).json({ error: error.message || 'Failed to fetch comments' });
    }
  });

  // Post a comment on a publication (requires auth)
  app.post('/api/publications/:postId/comments', requireAuth, async (req: AuthRequest, res) => {
    try {
      const userRecord = await getOrCreateUser(
        req.user!.uid,
        req.user!.email || '',
        req.user!.name
      );
      const existingProfile = await getUserByUid(req.user!.uid);
      const comment = await addPublicationComment({
        postId: req.params.postId,
        userId: userRecord.id,
        authorName: req.body.authorName || existingProfile?.fullName || req.user!.name || req.user!.email || 'Verified Partner',
        authorRole: req.body.authorRole || existingProfile?.partnerType || 'Life Sciences Collaborator',
        content: req.body.content,
      });
      res.status(201).json(comment);
    } catch (error: any) {
      console.error('Failed to add comment:', error);
      res.status(500).json({ error: error.message || 'Failed to add comment' });
    }
  });

  // Neon Database status & healthcheck
  app.get('/api/db/health', async (_req, res) => {
    try {
      const health = await testNeonConnection();
      res.json(health);
    } catch (error: any) {
      res.status(500).json({ ok: false, error: error.message });
    }
  });

  // 1. Cleanroom Laboratory Suites CRUD
  app.get('/api/laboratory/suites', async (_req, res) => {
    try {
      const suites = await getFacilitySuiteMetrics();
      res.json(suites);
    } catch (error: any) {
      console.error('Failed to get suites:', error);
      res.status(500).json({ error: error.message || 'Failed to fetch suite metrics' });
    }
  });

  app.patch('/api/laboratory/suites/:suiteId', async (req, res) => {
    try {
      const updated = await updateFacilitySuiteMetric(req.params.suiteId, req.body);
      res.json(updated);
    } catch (error: any) {
      console.error('Failed to update suite:', error);
      res.status(500).json({ error: error.message || 'Failed to update suite metric' });
    }
  });

  // 2. Facility Throughput Telemetry CRUD
  app.get('/api/laboratory/throughput', async (_req, res) => {
    try {
      const metrics = await getFacilityThroughputMetrics();
      res.json(metrics);
    } catch (error: any) {
      console.error('Failed to get throughput:', error);
      res.status(500).json({ error: error.message || 'Failed to fetch throughput telemetry' });
    }
  });

  app.post('/api/laboratory/throughput', async (req, res) => {
    try {
      const created = await recordFacilityThroughputMetric(req.body);
      res.status(201).json(created);
    } catch (error: any) {
      console.error('Failed to record throughput:', error);
      res.status(500).json({ error: error.message || 'Failed to record throughput telemetry' });
    }
  });

  // 3. Research Papers & Lab Publications CRUD
  app.get('/api/laboratory/papers', async (_req, res) => {
    try {
      const papers = await getResearchPapers();
      res.json(papers);
    } catch (error: any) {
      console.error('Failed to get papers:', error);
      res.status(500).json({ error: error.message || 'Failed to fetch research papers' });
    }
  });

  app.post('/api/laboratory/papers', async (req, res) => {
    try {
      const created = await createResearchPaper(req.body);
      res.status(201).json(created);
    } catch (error: any) {
      console.error('Failed to create paper:', error);
      res.status(500).json({ error: error.message || 'Failed to create research paper' });
    }
  });

  // 4. Inquiries Status Management & Deletion
  app.patch('/api/inquiries/:type/:id/status', async (req, res) => {
    try {
      const result = await updateInquiryStatusDb(
        req.params.type,
        Number(req.params.id),
        req.body.status,
        req.body.adminNotes
      );
      res.json(result);
    } catch (error: any) {
      console.error('Failed to update inquiry status:', error);
      res.status(500).json({ error: error.message || 'Failed to update inquiry status' });
    }
  });

  app.delete('/api/inquiries/:type/:id', async (req, res) => {
    try {
      const result = await deleteInquiryDb(req.params.type, Number(req.params.id));
      res.json(result);
    } catch (error: any) {
      console.error('Failed to delete inquiry:', error);
      res.status(500).json({ error: error.message || 'Failed to delete inquiry' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
