import fs from 'fs';
import path from 'path';
import { neonPool, query, isDatabaseConfigured } from '../src/lib/db.ts';

async function runSeed() {
  console.log('--- Bedfordshire Biotech / Neon Database Seeder ---');
  const seedSqlPath = path.join(process.cwd(), 'scripts', 'seed.sql');

  if (!fs.existsSync(seedSqlPath)) {
    console.error('Error: scripts/seed.sql file not found.');
    process.exit(1);
  }

  const sql = fs.readFileSync(seedSqlPath, 'utf8');

  if (!isDatabaseConfigured || !neonPool) {
    console.log('[Notice] No live DATABASE_URL provided. SQL file is ready at scripts/seed.sql.');
    console.log('You can copy and execute scripts/seed.sql directly in the Neon Console SQL Editor.');
    process.exit(0);
  }

  try {
    console.log('Executing seed SQL on connected Neon PostgreSQL instance...');
    await neonPool.query(sql);
    console.log('✓ Successfully seeded research_laboratories, service_requests, and manufacturing_rfps!');
    process.exit(0);
  } catch (error: any) {
    console.error('Seed execution failed:', error.message);
    process.exit(1);
  }
}

runSeed();
