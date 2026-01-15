import prisma from "@/lib/prisma";

// ROUTE: api/logs

// GET ALL LOGS
export async function GET() {
  const logs = await prisma.log.findMany();

  return Response.json(logs);
}
