import prisma from "@/lib/prisma";

// ROUTE: api/users

// GET ALL USERS
export async function GET() {
  try {
    // Fetch users from database
    const users = await prisma.user.findMany();

    return Response.json({ users });

    // Return an error if it doesn't work
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}

// ADD ONE USER
export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();

  // Create a new user using the request data
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  return Response.json(user, { status: 201 });
}
