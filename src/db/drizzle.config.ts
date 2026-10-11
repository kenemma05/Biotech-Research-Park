import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;
const sqlHost = process.env.SQL_HOST || "localhost";
const sqlDbName = process.env.SQL_DB_NAME || "neondb";
const user = process.env.SQL_USER || process.env.SQL_ADMIN_USER || "neon";
const password = process.env.SQL_PASSWORD || process.env.SQL_ADMIN_PASSWORD || "";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  schemaFilter: ["public"],
  dbCredentials: connectionString
    ? { url: connectionString }
    : {
        host: sqlHost,
        user: user,
        password: password,
        database: sqlDbName,
        ssl: Boolean(process.env.DATABASE_URL),
      },
  verbose: true,
});
