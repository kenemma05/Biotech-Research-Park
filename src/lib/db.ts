import dotenv from 'dotenv';
dotenv.config();
import { Pool, PoolConfig } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import * as schema from '../db/schema.ts';

declare global {
  var _neonPgPool: Pool | undefined;
}

const RAW_NEON_FALLBACK =
  'postgresql://neondb_owner:npg_PqJybnf13pmk@ep-red-pine-zahug5af-pooler.c-2.eu-west-2.aws.neon.tech/neondb?sslmode=require';

// Extract connection string from available environment variables
export const getDatabaseUrl = (): string | undefined => {
  const envUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
  if (envUrl && (envUrl.startsWith('postgres://') || envUrl.startsWith('postgresql://'))) {
    return envUrl;
  }
  if (process.env.SQL_HOST) {
    return `postgresql://${process.env.SQL_USER || 'neon'}:${process.env.SQL_PASSWORD || ''}@${process.env.SQL_HOST}/${process.env.SQL_DB_NAME || 'neondb'}`;
  }
  // When DATABASE_URL is an HTTP/HTTPS console link or missing, use the provisioned Neon connection URI
  if (RAW_NEON_FALLBACK) {
    return RAW_NEON_FALLBACK;
  }
  return undefined;
};

export const databaseUrl = getDatabaseUrl();
export const isDatabaseConfigured = Boolean(databaseUrl);

// 1. Connection Pool (pg Pool with SSL for Neon)
export const createNeonPool = (): Pool | null => {
  if (!isDatabaseConfigured || !databaseUrl) {
    return null;
  }

  if (!global._neonPgPool) {
    const poolConfig: PoolConfig = {
      connectionString: databaseUrl,
      ssl: databaseUrl.includes('localhost') ? false : { rejectUnauthorized: false },
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    };

    global._neonPgPool = new Pool(poolConfig);

    global._neonPgPool.on('error', (err) => {
      console.warn('Neon PostgreSQL idle client warning:', err.message);
    });
  }

  return global._neonPgPool;
};

export const neonPool = createNeonPool();

// 2. Drizzle ORM client instance with schema
export const db = neonPool ? drizzle(neonPool, { schema }) : null;

// 3. Neon Serverless HTTP query client
export const sql: NeonQueryFunction<false, false> | null = databaseUrl
  ? neon(databaseUrl)
  : null;

// 4. Parameterized query helper with sanitized logging
export async function query<T = any>(text: string, params?: any[]): Promise<T[]> {
  if (!neonPool) {
    console.warn('[Neon DB] No active database connection string. Operating with in-memory stores.');
    return [];
  }

  try {
    const result = await neonPool.query(text, params);
    return result.rows as T[];
  } catch (error: any) {
    console.error('[Neon DB] Query execution error:', error.message);
    throw new Error('Database operation failed', { cause: error });
  }
}

export interface NeonDiagnosticReport {
  ok: boolean;
  status: 'connected' | 'unconfigured' | 'error';
  message: string;
  database: string | null;
  serverTime?: string;
  latencyMs?: number;
  projectId?: string;
  branch?: string;
  tables?: {
    contactInquiries: number;
    partnerInquiries: number;
    manufacturingRfps: number;
  };
  details?: Record<string, any>;
  timestamp: string;
}

// 5. Connection health check with detailed diagnostic telemetry
export async function testNeonConnection(): Promise<NeonDiagnosticReport> {
  const timestamp = new Date().toISOString();
  const projectId = process.env.NEON_PROJECT_ID || 'steep-haze-58773380';
  const branch = process.env.NEON_BRANCH || 'production';

  if (!isDatabaseConfigured || !neonPool) {
    return {
      ok: false,
      status: 'unconfigured',
      message: 'Neon connection is unconfigured (DATABASE_URL not set). In-memory mock layer is active.',
      database: null,
      projectId,
      branch,
      timestamp,
    };
  }

  const startTime = performance.now();
  try {
    const res = await neonPool.query('SELECT NOW() as current_time, current_database() as db_name, version() as pg_version');
    const latencyMs = Math.round(performance.now() - startTime);

    // Count inquiries to confirm table readiness
    let tableCounts = { contactInquiries: 0, partnerInquiries: 0, manufacturingRfps: 0 };
    try {
      const cRes = await neonPool.query('SELECT count(*) as c FROM contact_inquiries');
      const pRes = await neonPool.query('SELECT count(*) as c FROM partner_inquiries');
      const rRes = await neonPool.query('SELECT count(*) as c FROM manufacturing_rfps');
      tableCounts = {
        contactInquiries: parseInt(cRes.rows[0]?.c || '0', 10),
        partnerInquiries: parseInt(pRes.rows[0]?.c || '0', 10),
        manufacturingRfps: parseInt(rRes.rows[0]?.c || '0', 10),
      };
    } catch (tableErr) {
      console.warn('[Diagnostics] Table verification warning:', tableErr);
    }

    const dbName = res.rows[0]?.db_name || 'neondb';
    return {
      ok: true,
      status: 'connected',
      message: `Successfully connected to Neon PostgreSQL database: ${dbName}`,
      database: dbName,
      serverTime: res.rows[0]?.current_time?.toISOString(),
      latencyMs,
      projectId,
      branch,
      tables: tableCounts,
      details: {
        poolMax: 10,
        ssl: true,
      },
      timestamp,
    };
  } catch (error: any) {
    const latencyMs = Math.round(performance.now() - startTime);
    return {
      ok: false,
      status: 'error',
      message: `Neon connection check failed: ${error.message}`,
      database: null,
      latencyMs,
      projectId,
      branch,
      details: {
        code: error.code,
        routine: error.routine,
      },
      timestamp,
    };
  }
}
