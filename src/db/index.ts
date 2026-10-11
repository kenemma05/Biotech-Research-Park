import { db, neonPool, isDatabaseConfigured, createNeonPool } from '../lib/db.ts';

export { db, neonPool, isDatabaseConfigured };
export const createPool = createNeonPool;
export default db;

