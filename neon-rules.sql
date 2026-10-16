-- ==============================================================================
-- NEON POSTGRESQL ROW-LEVEL SECURITY (RLS) & ACCESS CONTROL RULES
-- Platform: Bedfordshire Biotech (BIOTECH RESEARCH PARK - Company #11399495)
-- Database: Neon Lakebase PostgreSQL (Branch: production)
-- ==============================================================================

-- 1. Enable Row-Level Security (RLS) across all core enterprise tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE manufacturing_rfps ENABLE ROW LEVEL SECURITY;
ALTER TABLE facility_suite_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE facility_throughput_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE research_papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE publication_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 2. Helper functions for RBAC and identity extraction
CREATE OR REPLACE FUNCTION current_neon_user_id()
RETURNS TEXT AS $$
BEGIN
  RETURN COALESCE(
    current_setting('request.jwt.claim.sub', true),
    current_setting('neon.current_user_id', true)
  );
END;
$$ LANGUAGE plpgsql STABLE;

CREATE OR REPLACE FUNCTION is_neon_admin()
RETURNS BOOLEAN AS $$
DECLARE
  v_email TEXT;
BEGIN
  v_email := LOWER(COALESCE(
    current_setting('request.jwt.claim.email', true),
    current_setting('neon.current_user_email', true),
    ''
  ));
  RETURN v_email IN ('felixeric813@gmail.com', 'kenemma05@gmail.com', 'emmakenn005@gmail.com');
END;
$$ LANGUAGE plpgsql STABLE;

-- ------------------------------------------------------------------------------
-- 3. USERS TABLE POLICIES
-- ------------------------------------------------------------------------------
-- Allow users to select only their own profile, or admins to select any profile
CREATE POLICY "users_select_policy" ON users
  FOR SELECT
  USING (
    uid = current_neon_user_id()
    OR is_neon_admin()
    OR current_user = 'neondb_owner'
  );

-- Allow authenticated users to create/insert their own profile
CREATE POLICY "users_insert_policy" ON users
  FOR INSERT
  WITH CHECK (
    uid = current_neon_user_id()
    OR current_user = 'neondb_owner'
  );

-- Allow users to update only their own profile
CREATE POLICY "users_update_policy" ON users
  FOR UPDATE
  USING (
    uid = current_neon_user_id()
    OR is_neon_admin()
    OR current_user = 'neondb_owner'
  )
  WITH CHECK (
    uid = current_neon_user_id()
    OR is_neon_admin()
    OR current_user = 'neondb_owner'
  );

-- ------------------------------------------------------------------------------
-- 4. CONTACT INQUIRIES POLICIES
-- ------------------------------------------------------------------------------
-- Anyone (public or authenticated) can submit a contact inquiry
CREATE POLICY "contact_inquiries_insert_policy" ON contact_inquiries
  FOR INSERT
  WITH CHECK (
    LENGTH(TRIM(name)) > 0
    AND LENGTH(TRIM(email)) > 0
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

-- Users can view their own inquiries; Admins can view all inquiries
CREATE POLICY "contact_inquiries_select_policy" ON contact_inquiries
  FOR SELECT
  USING (
    (user_id IS NOT NULL AND user_id IN (SELECT id FROM users WHERE uid = current_neon_user_id()))
    OR is_neon_admin()
    OR current_user = 'neondb_owner'
  );

-- Only admins can update status or review notes
CREATE POLICY "contact_inquiries_update_policy" ON contact_inquiries
  FOR UPDATE
  USING (is_neon_admin() OR current_user = 'neondb_owner')
  WITH CHECK (is_neon_admin() OR current_user = 'neondb_owner');

-- Only admins can delete an inquiry record
CREATE POLICY "contact_inquiries_delete_policy" ON contact_inquiries
  FOR DELETE
  USING (is_neon_admin() OR current_user = 'neondb_owner');

-- ------------------------------------------------------------------------------
-- 5. PARTNER INQUIRIES POLICIES
-- ------------------------------------------------------------------------------
CREATE POLICY "partner_inquiries_insert_policy" ON partner_inquiries
  FOR INSERT
  WITH CHECK (
    LENGTH(TRIM(name)) > 0
    AND LENGTH(TRIM(email)) > 0
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

CREATE POLICY "partner_inquiries_select_policy" ON partner_inquiries
  FOR SELECT
  USING (
    (user_id IS NOT NULL AND user_id IN (SELECT id FROM users WHERE uid = current_neon_user_id()))
    OR is_neon_admin()
    OR current_user = 'neondb_owner'
  );

CREATE POLICY "partner_inquiries_update_policy" ON partner_inquiries
  FOR UPDATE
  USING (is_neon_admin() OR current_user = 'neondb_owner')
  WITH CHECK (is_neon_admin() OR current_user = 'neondb_owner');

CREATE POLICY "partner_inquiries_delete_policy" ON partner_inquiries
  FOR DELETE
  USING (is_neon_admin() OR current_user = 'neondb_owner');

-- ------------------------------------------------------------------------------
-- 6. CDMO MANUFACTURING RFPS POLICIES
-- ------------------------------------------------------------------------------
CREATE POLICY "manufacturing_rfps_insert_policy" ON manufacturing_rfps
  FOR INSERT
  WITH CHECK (
    LENGTH(TRIM(name)) > 0
    AND LENGTH(TRIM(email)) > 0
    AND LENGTH(TRIM(modality)) > 0
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

CREATE POLICY "manufacturing_rfps_select_policy" ON manufacturing_rfps
  FOR SELECT
  USING (
    (user_id IS NOT NULL AND user_id IN (SELECT id FROM users WHERE uid = current_neon_user_id()))
    OR is_neon_admin()
    OR current_user = 'neondb_owner'
  );

CREATE POLICY "manufacturing_rfps_update_policy" ON manufacturing_rfps
  FOR UPDATE
  USING (is_neon_admin() OR current_user = 'neondb_owner')
  WITH CHECK (is_neon_admin() OR current_user = 'neondb_owner');

CREATE POLICY "manufacturing_rfps_delete_policy" ON manufacturing_rfps
  FOR DELETE
  USING (is_neon_admin() OR current_user = 'neondb_owner');

-- ------------------------------------------------------------------------------
-- 7. NEWSLETTER SUBSCRIBERS POLICIES
-- ------------------------------------------------------------------------------
CREATE POLICY "newsletter_subscribers_insert_policy" ON newsletter_subscribers
  FOR INSERT
  WITH CHECK (
    email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

CREATE POLICY "newsletter_subscribers_select_policy" ON newsletter_subscribers
  FOR SELECT
  USING (is_neon_admin() OR current_user = 'neondb_owner');

-- ------------------------------------------------------------------------------
-- 8. FACILITY TELEMETRY & RESEARCH PAPERS POLICIES (PUBLIC READ)
-- ------------------------------------------------------------------------------
CREATE POLICY "facility_suite_metrics_read_policy" ON facility_suite_metrics
  FOR SELECT USING (true);

CREATE POLICY "facility_throughput_metrics_read_policy" ON facility_throughput_metrics
  FOR SELECT USING (true);

CREATE POLICY "research_papers_read_policy" ON research_papers
  FOR SELECT USING (true);

CREATE POLICY "publication_comments_read_policy" ON publication_comments
  FOR SELECT USING (true);

CREATE POLICY "publication_comments_insert_policy" ON publication_comments
  FOR INSERT
  WITH CHECK (
    LENGTH(TRIM(content)) > 0
    AND LENGTH(TRIM(author_name)) > 0
  );
