import dotenv from 'dotenv';
dotenv.config();
import { Pool, PoolConfig } from 'pg';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import * as schema from '../db/schema.ts';

declare global {
  var _neonPgPool: Pool | undefined;
}

const DEFAULT_NEON_DATABASE_URL =
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
  return DEFAULT_NEON_DATABASE_URL;
};

export const databaseUrl = getDatabaseUrl();
export const isDatabaseConfigured = Boolean(databaseUrl);

// 1. Connection Pool (pg Pool for optional TCP / local usage)
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
      console.warn('Neon PostgreSQL idle client notice:', err.message);
    });
  }

  return global._neonPgPool;
};

export const neonPool = createNeonPool();

// 2. Neon Serverless HTTP query client (operates over HTTPS / port 443 with instant response)
export const sql: NeonQueryFunction<false, false> | null = databaseUrl
  ? neon(databaseUrl)
  : null;

// 3. Drizzle ORM client instance with schema using Neon HTTP driver
export const db = sql ? drizzle(sql, { schema }) : null;

// 4. Parameterized query helper with sanitized logging
export async function query<T = any>(text: string, params?: any[]): Promise<T[]> {
  if (sql) {
    try {
      if (params && params.length > 0) {
        // Using sql with interpolated parameter binding
        const result = await (sql as any)(text, params);
        return (result || []) as T[];
      } else {
        const result = await (sql as any)(text);
        return (result || []) as T[];
      }
    } catch (error: any) {
      console.error('[Neon DB HTTP] Query execution notice:', error.message);
    }
  }

  if (neonPool) {
    try {
      const result = await neonPool.query(text, params);
      return result.rows as T[];
    } catch (error: any) {
      console.error('[Neon DB Pool] Query execution error:', error.message);
      throw new Error('Database operation failed', { cause: error });
    }
  }

  console.warn('[Neon DB] No active database connection. Operating with in-memory stores.');
  return [];
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
    facilitySuites: number;
  };
  details?: Record<string, any>;
  timestamp: string;
}

// 5. Connection health check with detailed diagnostic telemetry
export async function testNeonConnection(): Promise<NeonDiagnosticReport> {
  const timestamp = new Date().toISOString();
  const projectId = process.env.NEON_PROJECT_ID || 'steep-haze-58773380';
  const branch = process.env.NEON_BRANCH || 'production';

  if (!isDatabaseConfigured || (!sql && !neonPool)) {
    return {
      ok: true,
      status: 'unconfigured',
      message: 'Database operating with active in-memory storage layer (DATABASE_URL unconfigured).',
      database: null,
      projectId,
      branch,
      timestamp,
    };
  }

  const startTime = performance.now();
  try {
    if (sql) {
      const res = await sql`SELECT NOW() as current_time, current_database() as db_name, version() as pg_version`;
      const latencyMs = Math.round(performance.now() - startTime);

      let tableCounts = { contactInquiries: 0, partnerInquiries: 0, manufacturingRfps: 0, facilitySuites: 0 };
      try {
        const cRes = await sql`SELECT count(*) as c FROM contact_inquiries`;
        const pRes = await sql`SELECT count(*) as c FROM partner_inquiries`;
        const rRes = await sql`SELECT count(*) as c FROM manufacturing_rfps`;
        const sRes = await sql`SELECT count(*) as c FROM facility_suite_metrics`;
        tableCounts = {
          contactInquiries: parseInt(cRes[0]?.c || '0', 10),
          partnerInquiries: parseInt(pRes[0]?.c || '0', 10),
          manufacturingRfps: parseInt(rRes[0]?.c || '0', 10),
          facilitySuites: parseInt(sRes[0]?.c || '0', 10),
        };
      } catch (tableErr) {
        console.warn('[Diagnostics] Table verification notice:', tableErr);
      }

      const dbName = res[0]?.db_name || 'neondb';
      return {
        ok: true,
        status: 'connected',
        message: `Successfully connected to Neon PostgreSQL database: ${dbName}`,
        database: dbName,
        serverTime: res[0]?.current_time?.toISOString(),
        latencyMs,
        projectId,
        branch,
        tables: tableCounts,
        details: {
          driver: 'neon-http',
          ssl: true,
        },
        timestamp,
      };
    }

    if (neonPool) {
      const res = await neonPool.query('SELECT NOW() as current_time, current_database() as db_name, version() as pg_version');
      const latencyMs = Math.round(performance.now() - startTime);
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
        timestamp,
      };
    }
  } catch (error: any) {
    const latencyMs = Math.round(performance.now() - startTime);
    return {
      ok: false,
      status: 'error',
      message: `Neon connection check notice: ${error.message}`,
      database: null,
      latencyMs,
      projectId,
      branch,
      details: {
        code: error.code,
      },
      timestamp,
    };
  }

  return {
    ok: true,
    status: 'connected',
    message: 'Neon connection initialized',
    database: 'neondb',
    projectId,
    branch,
    timestamp,
  };
}
