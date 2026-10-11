import { Pool, PoolConfig } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { neon, NeonQueryFunction } from '@neondatabase/serverless';
import * as schema from '../db/schema.ts';

declare global {
  var _neonPgPool: Pool | undefined;
}

// Extract connection string from available environment variables
export const getDatabaseUrl = (): string | undefined => {
  return (
    process.env.DATABASE_URL ||
    process.env.NEON_DATABASE_URL ||
    (process.env.SQL_HOST
      ? `postgresql://${process.env.SQL_USER || 'neon'}:${process.env.SQL_PASSWORD || ''}@${process.env.SQL_HOST}/${process.env.SQL_DB_NAME || 'neondb'}`
      : undefined)
  );
};

export const databaseUrl = getDatabaseUrl();
export const isDatabaseConfigured = Boolean(databaseUrl || process.env.SQL_HOST);

// 1. Connection Pool (pg Pool with SSL for Neon)
export const createNeonPool = (): Pool | null => {
  if (!isDatabaseConfigured) {
    return null;
  }

  if (!global._neonPgPool) {
    const poolConfig: PoolConfig = databaseUrl
      ? {
          connectionString: databaseUrl,
          ssl: databaseUrl.includes('localhost') ? false : { rejectUnauthorized: false },
          max: 10,
          idleTimeoutMillis: 30000,
          connectionTimeoutMillis: 5000,
        }
      : {
          host: process.env.SQL_HOST,
          user: process.env.SQL_USER || 'neon',
          password: process.env.SQL_PASSWORD,
          database: process.env.SQL_DB_NAME || 'neondb',
          ssl: false,
          max: 10,
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

// 5. Connection health check
export async function testNeonConnection(): Promise<{ ok: boolean; message: string; timestamp?: string }> {
  if (!isDatabaseConfigured || !neonPool) {
    return {
      ok: false,
      message: 'Neon connection is unconfigured (DATABASE_URL not set). In-memory mock layer is active.',
    };
  }

  try {
    const res = await neonPool.query('SELECT NOW() as current_time, current_database() as db_name');
    return {
      ok: true,
      message: `Connected to Neon database: ${res.rows[0]?.db_name}`,
      timestamp: res.rows[0]?.current_time?.toISOString(),
    };
  } catch (error: any) {
    return {
      ok: false,
      message: `Neon connection check failed: ${error.message}`,
    };
  }
}
