import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

// Sets up db connection using database URL
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

// If prisma client exists, use that, otherwise create a new one
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
