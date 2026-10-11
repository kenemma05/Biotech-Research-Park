-- =====================================================================
-- Neon PostgreSQL Migration: Research Laboratory Data, User Inquiries & CDMO Service Requests
-- Project ID: steep-haze-58773380 (Branch: production)
-- Bedfordshire Biotech / Biotech Research Park (Company No. 11399495)
-- =====================================================================

BEGIN;

-- Enable UUID extension if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ---------------------------------------------------------------------
-- 1. USERS & RESEARCH PARTNERS
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "uid" TEXT NOT NULL UNIQUE,
    "email" TEXT NOT NULL,
    "full_name" TEXT,
    "username" TEXT,
    "organization" TEXT,
    "job_title" TEXT,
    "partner_type" TEXT,
    "phone_number" TEXT,
    "address_line_1" TEXT,
    "address_line_2" TEXT,
    "city" TEXT,
    "state_province_region" TEXT,
    "zip_postal_code" TEXT,
    "country" TEXT,
    "email_verified" BOOLEAN DEFAULT FALSE NOT NULL,
    "account_status" TEXT DEFAULT 'active' NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_users_email" ON "users" ("email");
CREATE INDEX IF NOT EXISTS "idx_users_partner_type" ON "users" ("partner_type");

-- ---------------------------------------------------------------------
-- 2. RESEARCH LABORATORY & FACILITY DATA
-- ---------------------------------------------------------------------

-- Cleanroom & Analytical Laboratory Suites
CREATE TABLE IF NOT EXISTS "facility_suite_metrics" (
    "id" SERIAL PRIMARY KEY,
    "suite" TEXT NOT NULL UNIQUE,
    "short_name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,            -- e.g. 'Grade A/B', 'Grade C', 'Grade D'
    "iso_class" TEXT NOT NULL,        -- e.g. 'ISO 5', 'ISO 7', 'ISO 8'
    "area_m2" INTEGER NOT NULL,
    "utilization_rate" INTEGER NOT NULL, -- percentage (0-100)
    "throughput_capacity" TEXT NOT NULL,
    "active_status" TEXT NOT NULL,    -- e.g. 'Operational', 'Validated', 'Maintenance'
    "sort_order" INTEGER DEFAULT 0 NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Monthly Bioprocessing & Bioreactor Telemetry
CREATE TABLE IF NOT EXISTS "facility_throughput_metrics" (
    "id" SERIAL PRIMARY KEY,
    "month" TEXT NOT NULL UNIQUE,     -- e.g. '2025-01', 'Jan 2025'
    "vials_filled_thousand" INTEGER NOT NULL,
    "bioreactor_volume_liters" INTEGER NOT NULL,
    "overall_utilization" INTEGER NOT NULL,
    "sort_order" INTEGER DEFAULT 0 NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Published Scientific Research Papers & Lab Case Studies
CREATE TABLE IF NOT EXISTS "research_papers" (
    "id" SERIAL PRIMARY KEY,
    "paper_code" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author_name" TEXT NOT NULL,
    "author_role" TEXT NOT NULL,
    "author_initials" TEXT NOT NULL,
    "published_date" TEXT NOT NULL,
    "read_time" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content_snippet" TEXT NOT NULL,
    "tags_json" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "image_caption" TEXT,
    "key_metrics_json" TEXT,
    "full_sections_json" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_research_papers_category" ON "research_papers" ("category");
CREATE INDEX IF NOT EXISTS "idx_research_papers_slug" ON "research_papers" ("slug");

-- Scientific Publication Peer Review Comments
CREATE TABLE IF NOT EXISTS "publication_comments" (
    "id" SERIAL PRIMARY KEY,
    "post_id" TEXT NOT NULL,
    "user_id" INTEGER REFERENCES "users"("id") ON DELETE SET NULL,
    "author_name" TEXT NOT NULL,
    "author_role" TEXT,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_publication_comments_post_id" ON "publication_comments" ("post_id");

-- ---------------------------------------------------------------------
-- 3. USER INQUIRIES
-- ---------------------------------------------------------------------

-- General User & Science Inquiries
CREATE TABLE IF NOT EXISTS "contact_inquiries" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "users"("id") ON DELETE SET NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "inquiry_type" TEXT NOT NULL,     -- e.g. 'Contract Biomanufacturing', 'Analytical Testing'
    "message" TEXT NOT NULL,
    "status" TEXT DEFAULT 'pending' NOT NULL, -- 'pending', 'under_review', 'scheduled', 'approved', 'archived'
    "admin_notes" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_contact_inquiries_email" ON "contact_inquiries" ("email");
CREATE INDEX IF NOT EXISTS "idx_contact_inquiries_status" ON "contact_inquiries" ("status");

-- Strategic Life Sciences Partner Inquiries
CREATE TABLE IF NOT EXISTS "partner_inquiries" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "users"("id") ON DELETE SET NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT DEFAULT 'pending' NOT NULL,
    "admin_notes" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_partner_inquiries_email" ON "partner_inquiries" ("email");
CREATE INDEX IF NOT EXISTS "idx_partner_inquiries_status" ON "partner_inquiries" ("status");

-- Newsletter & Scientific Bulletin Subscribers
CREATE TABLE IF NOT EXISTS "newsletter_subscribers" (
    "id" SERIAL PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "source" TEXT DEFAULT 'footer' NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- ---------------------------------------------------------------------
-- 4. CDMO CONTRACT BIOMANUFACTURING SERVICE REQUESTS (RFPs)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS "manufacturing_rfps" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES "users"("id") ON DELETE SET NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT,
    "modality" TEXT NOT NULL,          -- e.g. 'Continuous Perfusion mAb', 'mRNA-LNP Nanomedicine', 'Small Molecule API'
    "phase" TEXT NOT NULL,             -- e.g. 'Preclinical Proof-of-Concept', 'Phase I/II Clinical Supply', 'Commercial Scale'
    "target_volume" TEXT NOT NULL,     -- e.g. '50L - 200L Pilot', '500L - 2,000L Perfusion'
    "fill_finishFormat" TEXT NOT NULL, -- e.g. 'Ready-to-Use 2R Vials (Liquid)', 'Lyophilized Cake Dual-Chamber'
    "project_timeline" TEXT NOT NULL,  -- e.g. 'Q2 2026 Batch Initiation', 'Immediate Validation Run'
    "notes" TEXT,
    "status" TEXT DEFAULT 'pending' NOT NULL, -- 'pending', 'under_review', 'feasibility_passed', 'contracted', 'rejected'
    "admin_notes" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_manufacturing_rfps_modality" ON "manufacturing_rfps" ("modality");
CREATE INDEX IF NOT EXISTS "idx_manufacturing_rfps_phase" ON "manufacturing_rfps" ("phase");
CREATE INDEX IF NOT EXISTS "idx_manufacturing_rfps_status" ON "manufacturing_rfps" ("status");
CREATE INDEX IF NOT EXISTS "idx_manufacturing_rfps_created_at" ON "manufacturing_rfps" ("created_at" DESC);

-- ---------------------------------------------------------------------
-- 5. ANALYTICAL REPORTING VIEWS
-- ---------------------------------------------------------------------

-- View: Active CDMO Biomanufacturing Pipeline
CREATE OR REPLACE VIEW "v_active_cdmo_pipeline" AS
SELECT
    rfp.id,
    rfp.name AS contact_name,
    rfp.email,
    rfp.company,
    rfp.modality,
    rfp.phase,
    rfp.target_volume,
    rfp.project_timeline,
    rfp.status,
    rfp.created_at
FROM "manufacturing_rfps" rfp
WHERE rfp.status IN ('pending', 'under_review', 'feasibility_passed')
ORDER BY rfp.created_at DESC;

-- View: Cleanroom Facility Operational Load
CREATE OR REPLACE VIEW "v_facility_utilization_summary" AS
SELECT
    f.suite,
    f.short_name,
    f.grade,
    f.iso_class,
    f.area_m2,
    f.utilization_rate,
    f.active_status
FROM "facility_suite_metrics" f
ORDER BY f.sort_order ASC;

-- ---------------------------------------------------------------------
-- 6. SEED ESSENTIAL LABORATORY SUITE METRICS
-- ---------------------------------------------------------------------
INSERT INTO "facility_suite_metrics" ("suite", "short_name", "grade", "iso_class", "area_m2", "utilization_rate", "throughput_capacity", "active_status", "sort_order")
VALUES
    ('Suite A-01: Robotic Isolator Vial Filling', 'Suite A-01', 'Grade A/B', 'ISO 5', 380, 84, 'Up to 24,000 vials/day sterile liquid/lyo', 'Operational', 1),
    ('Suite B-02: Continuous Perfusion Bioreactors', 'Suite B-02', 'Grade C', 'ISO 7', 520, 91, '2x 2,000L SUB + ATF cell-retention loop', 'Operational', 2),
    ('Suite C-03: mRNA-LNP Microfluidic Assembly', 'Suite C-03', 'Grade C/B', 'ISO 6', 310, 72, '120L/hr turbulent jet-mixing formulation', 'Operational', 3),
    ('Suite D-04: Mass Spectrometry & Analytical QA', 'Suite D-04', 'Analytical C', 'ISO 8', 440, 78, 'Triple-quad LC-MS/MS, ICP-MS, HPLC', 'Operational', 4)
ON CONFLICT ("suite") DO NOTHING;

COMMIT;
