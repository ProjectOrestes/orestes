import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
   connectionString: process.env.DATABASE_URL,
 // connectionString: "postgresql://postgres:milagritos@localhost:5432/orestes_db", // hardcoding para testear

});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

export default prisma;
