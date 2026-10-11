-- =====================================================================
-- scripts/seed.sql
-- Neon PostgreSQL Mock Seed Data for Application Dashboard Testing
-- Project: Bedfordshire Biotech / Biotech Research Park (Company No. 11399495)
-- Target Tables: research_laboratories, service_requests, facility_suite_metrics, manufacturing_rfps
-- =====================================================================

BEGIN;

-- Enable UUID extension if required
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ---------------------------------------------------------------------
-- 1. Table: research_laboratories
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS "research_laboratories" (
    "id" SERIAL PRIMARY KEY,
    "lab_code" TEXT NOT NULL UNIQUE,
    "name" TEXT NOT NULL,
    "facility_suite" TEXT NOT NULL,
    "classification" TEXT NOT NULL,           -- e.g. 'Grade A/B (ISO 5)', 'Grade C (ISO 7)'
    "lead_scientist" TEXT NOT NULL,
    "specialization" TEXT NOT NULL,
    "active_bioreactor_volume_liters" INTEGER DEFAULT 0 NOT NULL,
    "cleanroom_area_m2" INTEGER NOT NULL,
    "utilization_rate" INTEGER NOT NULL,      -- 0-100 percentage
    "operational_status" TEXT NOT NULL,       -- 'Operational', 'Validated', 'Under Audit', 'Maintenance'
    "equipment_list" TEXT[] NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_res_labs_code" ON "research_laboratories" ("lab_code");
CREATE INDEX IF NOT EXISTS "idx_res_labs_status" ON "research_laboratories" ("operational_status");

-- ---------------------------------------------------------------------
-- 2. Table: service_requests (CDMO & Laboratory Inquiries)
-- ---------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS "service_requests" (
    "id" SERIAL PRIMARY KEY,
    "request_code" TEXT NOT NULL UNIQUE,
    "client_name" TEXT NOT NULL,
    "client_organization" TEXT NOT NULL,
    "client_email" TEXT NOT NULL,
    "service_type" TEXT NOT NULL,             -- 'CDMO Biomanufacturing', 'Analytical Testing', 'mRNA Formulation'
    "target_modality" TEXT NOT NULL,          -- 'Continuous Perfusion mAb', 'mRNA-LNP Nanomedicine', etc.
    "clinical_phase" TEXT NOT NULL,           -- 'Preclinical', 'Phase I Clinical', 'Phase II/III Scale'
    "target_volume" TEXT NOT NULL,            -- '500L - 2,000L SUB', '24,000 Vials'
    "fill_finish_format" TEXT,               -- '2R Sterile Liquid Vials', 'Lyophilized Cake Dual-Chamber'
    "priority_level" TEXT DEFAULT 'Standard' NOT NULL, -- 'Standard', 'High', 'Urgent'
    "budget_estimate" TEXT,
    "status" TEXT DEFAULT 'pending' NOT NULL, -- 'pending', 'under_review', 'feasibility_passed', 'contracted', 'in_production', 'completed'
    "target_timeline" TEXT NOT NULL,
    "technical_notes" TEXT,
    "assigned_lead" TEXT,
    "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE INDEX IF NOT EXISTS "idx_serv_reqs_code" ON "service_requests" ("request_code");
CREATE INDEX IF NOT EXISTS "idx_serv_reqs_status" ON "service_requests" ("status");
CREATE INDEX IF NOT EXISTS "idx_serv_reqs_priority" ON "service_requests" ("priority_level");

-- ---------------------------------------------------------------------
-- 3. Populate research_laboratories with Initial Mock Data
-- ---------------------------------------------------------------------
INSERT INTO "research_laboratories" (
    "lab_code",
    "name",
    "facility_suite",
    "classification",
    "lead_scientist",
    "specialization",
    "active_bioreactor_volume_liters",
    "cleanroom_area_m2",
    "utilization_rate",
    "operational_status",
    "equipment_list"
) VALUES
(
    'LAB-BF-01',
    'Suite A-01: Robotic Isolator Sterile Fill-Finish Laboratory',
    'Suite A-01',
    'Grade A/B (ISO 5 / Class 100)',
    'Dr. Julian Vance, PhD, CChem',
    'Aseptic Isolator Liquid Vialing & Lyophilization',
    0,
    380,
    84,
    'Operational',
    ARRAY[
        'Syntegon Robotic Closed Isolator Filling Line (24k vials/shift)',
        'Telstar 15 m² Industrial Freeze Dryer (Dual-Chamber Lyophilizer)',
        'Breathing Air & Clean-In-Place / Steam-In-Place (CIP/SIP) Matrix',
        'Lighthouse High-Precision Airborne Particle Counter Sensor Grid'
    ]
),
(
    'LAB-BF-02',
    'Suite B-02: Continuous Perfusion Bioprocessing Facility',
    'Suite B-02',
    'Grade C (ISO 7 / Class 10,000)',
    'Dr. Sarah Lin, FRSC',
    'High-Density Mammalian Perfusion & Alternating Tangential Flow (ATF)',
    4000,
    520,
    91,
    'Operational',
    ARRAY[
        '2x Sartorius Biostat STR 2,000L Single-Use Bioreactor (SUB)',
        'Repligen XCell ATF-6 & ATF-10 Cell Retention Hollow-Fiber Units',
        'Nova Biomedical BioProfile FLEX2 Automated Chemistry Analyzer',
        'Cytiva ÄKTA Process Skid Continuous Chromatography System'
    ]
),
(
    'LAB-BF-03',
    'Suite C-03: mRNA & Lipid Nanoparticle (LNP) Assembly Laboratory',
    'Suite C-03',
    'Grade C/B (ISO 6 / Class 1,000)',
    'Dr. Alan Thorne, PhD',
    'Turbulent Jet-Mixing Microfluidic Nanomedicine Formulation',
    250,
    310,
    72,
    'Operational',
    ARRAY[
        'Precision NanoSystems NanoAssemblr Blaze Microfluidic Synthesis System',
        'Malvern Panalytical Zetasizer Ultra Dynamic Light Scattering (DLS)',
        'Repligen KrosFlo KR2i Tangential Flow Filtration Ultrafiltration System',
        'Thermo Scientific FreeZone Staged Cryogenic Freezer Unit (-86°C)'
    ]
),
(
    'LAB-BF-04',
    'Suite D-04: Central Analytical Chemistry & Quality Release Laboratory',
    'Suite D-04',
    'Analytical Controlled (ISO 8 / BSL-2)',
    'Prof. Eleanor Davies, FRS',
    'Reversed-Phase HPLC, Intact Mass Spectrometry & Endotoxin Assays',
    0,
    440,
    78,
    'Operational',
    ARRAY[
        'Thermo Scientific Orbitrap Exploris 240 Mass Spectrometer',
        'Waters ACQUITY Premier UPLC System with BioResolve Columns',
        'Charles River Endosafe-PTS Multi-Cartridge Spectrophotometer',
        'PerkinElmer NexION 2000 ICP-MS Trace Metal Analysis System'
    ]
),
(
    'LAB-BF-05',
    'Suite E-05: Microbial Fermentation & Synthetic Biology Pilot Suite',
    'Suite E-05',
    'Grade C (ISO 7 / BSL-2)',
    'Dr. Marcus Vance, PhD',
    'E. coli & Pichia pastoris Recombinant Expression & Lysis',
    1000,
    360,
    65,
    'Validated',
    ARRAY[
        'Eppendorf BioFlo 720 Bioreactor Control Station (1,000L Vessel)',
        'GEA High-Pressure Homogenizer Microfluidizer Cell Disruptor',
        'Alfa Laval Continuous Disc-Stack Centrifuge Harvest Separator',
        'Membraflow Tangential Flow Diafiltration Pilot Skid'
    ]
)
ON CONFLICT ("lab_code") DO UPDATE SET
    "name" = EXCLUDED."name",
    "facility_suite" = EXCLUDED."facility_suite",
    "classification" = EXCLUDED."classification",
    "lead_scientist" = EXCLUDED."lead_scientist",
    "specialization" = EXCLUDED."specialization",
    "active_bioreactor_volume_liters" = EXCLUDED."active_bioreactor_volume_liters",
    "cleanroom_area_m2" = EXCLUDED."cleanroom_area_m2",
    "utilization_rate" = EXCLUDED."utilization_rate",
    "operational_status" = EXCLUDED."operational_status",
    "equipment_list" = EXCLUDED."equipment_list",
    "updated_at" = NOW();

-- ---------------------------------------------------------------------
-- 4. Populate service_requests with Initial Mock Data
-- ---------------------------------------------------------------------
INSERT INTO "service_requests" (
    "request_code",
    "client_name",
    "client_organization",
    "client_email",
    "service_type",
    "target_modality",
    "clinical_phase",
    "target_volume",
    "fill_finish_format",
    "priority_level",
    "budget_estimate",
    "status",
    "target_timeline",
    "technical_notes",
    "assigned_lead"
) VALUES
(
    'SR-2026-001',
    'Dr. Claire Rosenthal',
    'Novartis Gene & Cell Therapies Ltd',
    'claire.rosenthal@novartis-partner.co.uk',
    'CDMO Biomanufacturing',
    'mRNA-LNP Nanomedicine',
    'Phase I Clinical Batch',
    '15,000 Vials (100L Formulation)',
    '2R Ready-To-Use Sterile Liquid Vials (0.5mL fill)',
    'High',
    '£480,000 - £620,000',
    'in_production',
    'Q2 2026 Batch Release',
    'Custom ionizable lipid excipient formulation requiring sub-ambient inline temperature monitoring and >95% encapsulation efficiency validation.',
    'Dr. Alan Thorne, PhD'
),
(
    'SR-2026-002',
    'Marcus Abernathy',
    'BioNTech Immunology Innovation Centre',
    'm.abernathy@biontech-partner.de',
    'CDMO Biomanufacturing',
    'Continuous Perfusion mAb (IgG1)',
    'Phase II Clinical Supply',
    '2x 2,000L Continuous Perfusion Run (45 days)',
    'Frozen Bulk Drug Substance (Carboys 20L)',
    'Urgent',
    '£950,000 - £1,250,000',
    'feasibility_passed',
    'Q3 2026 Inoculation Run',
    'High-titre clone reaching >8.5 g/L/day steady state. Requires ATF-6 hollow-fiber cell bleed automation and continuous harvesting.',
    'Dr. Sarah Lin, FRSC'
),
(
    'SR-2026-003',
    'Dr. Priya Sharma',
    'AstraZeneca Global Biologics Operations',
    'priya.sharma@az-biotech.com',
    'Analytical Testing',
    'Bi-specific T-Cell Engager (BiTE)',
    'Preclinical / IND Enabling',
    '500 Vials Analytical Retainers',
    'Ready-to-Use 2R Vials (Liquid)',
    'Standard',
    '£140,000 - £190,000',
    'under_review',
    'Immediate Turnaround (4 Weeks)',
    'Intact mass confirmation via Orbitrap Exploris 240, Host Cell Protein (HCP) ELISA quantitation, and accelerated stability study at 40°C/75% RH.',
    'Prof. Eleanor Davies, FRS'
),
(
    'SR-2026-004',
    'Professor Henrik Lindqvist',
    'Karolinska University Translational Medicine',
    'henrik.lindqvist@ki.se',
    'CDMO Biomanufacturing',
    'Synthetic Antimicrobial Polypeptide (Stingraycin)',
    'Phase I/II Clinical Supply',
    '12,000 Lyophilized Vials',
    'Dual-Chamber Lyophilized Cake Syringes (2mL)',
    'High',
    '£380,000 - £490,000',
    'contracted',
    'Q3 2026 Release',
    'Synthetic 34-amino acid cyclic peptide with 2 disulfide bonds. Purity must exceed 99.2% via RP-HPLC. Batch release requires European Pharmacopoeia sterility testing.',
    'Dr. Julian Vance, PhD, CChem'
),
(
    'SR-2026-005',
    'Elena Rostova',
    'TheraTarget Biotech UK',
    'elena.rostova@theratarget.co.uk',
    'CDMO Biomanufacturing',
    'Recombinant Lysosomal Enzyme',
    'Phase I Clinical Batch',
    '500L Pilot Fermentation',
    '2R Ready-To-Use Sterile Liquid Vials',
    'Standard',
    '£290,000 - £350,000',
    'pending',
    'Q4 2026',
    'Evaluation of downstream protein A capture yield and viral clearance filtration (Planova 20N) feasibility.',
    'Dr. Marcus Vance, PhD'
),
(
    'SR-2026-006',
    'Dr. David O''Connor',
    'Cambridge Biotherapeutics Group',
    'david.oconnor@cambridgebio.org',
    'Analytical Testing',
    'AAV Viral Vector (Serotype 9)',
    'Preclinical Proof-of-Concept',
    '120 Cryo-vials (1.5mL)',
    'Cryogenic Cryo-vials (-80°C Storage)',
    'Standard',
    '£95,000 - £130,000',
    'completed',
    'Completed & Certified (March 2026)',
    'Analytical ultracentrifugation (AUC) full-to-empty capsid ratio determination and droplet digital PCR (ddPCR) viral genome titre analysis.',
    'Prof. Eleanor Davies, FRS'
)
ON CONFLICT ("request_code") DO UPDATE SET
    "client_name" = EXCLUDED."client_name",
    "client_organization" = EXCLUDED."client_organization",
    "client_email" = EXCLUDED."client_email",
    "service_type" = EXCLUDED."service_type",
    "target_modality" = EXCLUDED."target_modality",
    "clinical_phase" = EXCLUDED."clinical_phase",
    "target_volume" = EXCLUDED."target_volume",
    "fill_finish_format" = EXCLUDED."fill_finish_format",
    "priority_level" = EXCLUDED."priority_level",
    "budget_estimate" = EXCLUDED."budget_estimate",
    "status" = EXCLUDED."status",
    "target_timeline" = EXCLUDED."target_timeline",
    "technical_notes" = EXCLUDED."technical_notes",
    "assigned_lead" = EXCLUDED."assigned_lead",
    "updated_at" = NOW();

-- ---------------------------------------------------------------------
-- 5. Cross-populate manufacturing_rfps for UI consistency
-- ---------------------------------------------------------------------
INSERT INTO "manufacturing_rfps" (
    "name",
    "email",
    "company",
    "modality",
    "phase",
    "target_volume",
    "fill_finish_format",
    "project_timeline",
    "notes",
    "status",
    "admin_notes"
) VALUES
(
    'Dr. Claire Rosenthal',
    'claire.rosenthal@novartis-partner.co.uk',
    'Novartis Gene & Cell Therapies Ltd',
    'mRNA-LNP Nanomedicine',
    'Phase I Clinical Batch',
    '15,000 Vials (100L Formulation)',
    '2R Ready-To-Use Sterile Liquid Vials',
    'Q2 2026 Batch Release',
    'Custom ionizable lipid formulation requiring sub-ambient inline temperature monitoring.',
    'approved',
    'Suite C-03 production slot confirmed by Dr. Alan Thorne.'
),
(
    'Marcus Abernathy',
    'm.abernathy@biontech-partner.de',
    'BioNTech Immunology Innovation Centre',
    'Continuous Perfusion mAb',
    'Phase II Clinical Supply',
    '2x 2,000L Continuous Perfusion',
    'Bulk Carboys (20L Frozen)',
    'Q3 2026 Inoculation Run',
    'High-titre clone reaching >8.5 g/L/day steady state. ATF-6 hollow-fiber cell bleed automation.',
    'under_review',
    'Feasibility passed. In negotiation for 45-day continuous perfusion slot in Suite B-02.'
),
(
    'Professor Henrik Lindqvist',
    'henrik.lindqvist@ki.se',
    'Karolinska University Translational Medicine',
    'Synthetic Antimicrobial Peptide (Stingraycin)',
    'Phase I/II Clinical Supply',
    '12,000 Lyophilized Vials',
    'Dual-Chamber Lyophilized Syringes',
    'Q3 2026 Release',
    'Synthetic 34-amino acid cyclic peptide with 2 disulfide bonds. Purity >99.2% via RP-HPLC.',
    'scheduled',
    'Lyophilization cycle validated on Telstar freeze dryer in Suite A-01.'
)
ON CONFLICT DO NOTHING;

COMMIT;
