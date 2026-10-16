import { relations } from 'drizzle-orm';
import { boolean, integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

// Define the 'users' table using Partner Auth UID as unique identifier
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email').notNull(),
  fullName: text('full_name'),
  username: text('username'),
  organization: text('organization'),
  jobTitle: text('job_title'),
  partnerType: text('partner_type'),
  phoneNumber: text('phone_number'),
  addressLine1: text('address_line_1'),
  addressLine2: text('address_line_2'),
  city: text('city'),
  stateProvinceRegion: text('state_province_region'),
  zipPostalCode: text('zip_postal_code'),
  country: text('country'),
  emailVerified: boolean('email_verified').default(false).notNull(),
  accountStatus: text('account_status').default('active').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Define the 'contact_inquiries' table
export const contactInquiries = pgTable('contact_inquiries', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company'),
  inquiryType: text('inquiry_type').notNull(),
  message: text('message').notNull(),
  status: text('status').default('pending').notNull(),
  adminNotes: text('admin_notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Define the 'partner_inquiries' table
export const partnerInquiries = pgTable('partner_inquiries', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  company: text('company'),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  status: text('status').default('pending').notNull(),
  adminNotes: text('admin_notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Define the 'manufacturing_rfps' table
export const manufacturingRfps = pgTable('manufacturing_rfps', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company'),
  modality: text('modality').notNull(),
  phase: text('phase').notNull(),
  targetVolume: text('target_volume').notNull(),
  fillFinishFormat: text('fill_finish_format').notNull(),
  projectTimeline: text('project_timeline').notNull(),
  notes: text('notes'),
  status: text('status').default('pending').notNull(),
  adminNotes: text('admin_notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Define the 'newsletter_subscribers' table
export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  source: text('source').default('footer').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Define the 'publication_comments' table
export const publicationComments = pgTable('publication_comments', {
  id: serial('id').primaryKey(),
  postId: text('post_id').notNull(),
  userId: integer('user_id')
    .references(() => users.id)
    .notNull(),
  authorName: text('author_name').notNull(),
  authorRole: text('author_role'),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Define the 'research_papers' table for dynamic retrieval of scientific research papers and publications
export const researchPapers = pgTable('research_papers', {
  id: serial('id').primaryKey(),
  paperCode: text('paper_code').notNull().unique(),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  authorName: text('author_name').notNull(),
  authorRole: text('author_role').notNull(),
  authorInitials: text('author_initials').notNull(),
  publishedDate: text('published_date').notNull(),
  readTime: text('read_time').notNull(),
  excerpt: text('excerpt').notNull(),
  contentSnippet: text('content_snippet').notNull(),
  tagsJson: text('tags_json').notNull(),
  imageUrl: text('image_url').notNull(),
  imageCaption: text('image_caption'),
  keyMetricsJson: text('key_metrics_json'),
  fullSectionsJson: text('full_sections_json'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Define the 'facility_suite_metrics' table for dynamic retrieval of cleanroom suite metrics
export const facilitySuiteMetrics = pgTable('facility_suite_metrics', {
  id: serial('id').primaryKey(),
  suite: text('suite').notNull().unique(),
  shortName: text('short_name').notNull(),
  grade: text('grade').notNull(),
  isoClass: text('iso_class').notNull(),
  areaM2: integer('area_m2').notNull(),
  utilizationRate: integer('utilization_rate').notNull(),
  throughputCapacity: text('throughput_capacity').notNull(),
  activeStatus: text('active_status').notNull(),
  sortOrder: integer('sort_order').default(0).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Define the 'facility_throughput_metrics' table for dynamic retrieval of monthly throughput telemetry
export const facilityThroughputMetrics = pgTable('facility_throughput_metrics', {
  id: serial('id').primaryKey(),
  month: text('month').notNull().unique(),
  vialsFilledThousand: integer('vials_filled_thousand').notNull(),
  bioreactorVolumeLiters: integer('bioreactor_volume_liters').notNull(),
  overallUtilization: integer('overall_utilization').notNull(),
  sortOrder: integer('sort_order').default(0).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Define relationships
export const usersRelations = relations(users, ({ many }) => ({
  contactInquiries: many(contactInquiries),
  partnerInquiries: many(partnerInquiries),
  manufacturingRfps: many(manufacturingRfps),
  publicationComments: many(publicationComments),
}));

export const contactInquiriesRelations = relations(contactInquiries, ({ one }) => ({
  user: one(users, {
    fields: [contactInquiries.userId],
    references: [users.id],
  }),
}));

export const partnerInquiriesRelations = relations(partnerInquiries, ({ one }) => ({
  user: one(users, {
    fields: [partnerInquiries.userId],
    references: [users.id],
  }),
}));

export const manufacturingRfpsRelations = relations(manufacturingRfps, ({ one }) => ({
  user: one(users, {
    fields: [manufacturingRfps.userId],
    references: [users.id],
  }),
}));

export const publicationCommentsRelations = relations(publicationComments, ({ one }) => ({
  user: one(users, {
    fields: [publicationComments.userId],
    references: [users.id],
  }),
}));
