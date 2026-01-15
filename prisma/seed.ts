import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Amelia",
    email: "ameliajanegoodson@gmail.com",
    logs: {
      create: [
        {
          date: new Date("2026-01-10"),
          location: "Fairlight Beach, Sydney",
          species: "Porcupine fish, green moray eel, herring cale",
          notes:
            "A delightful super hot day at Fairlight with Isabelle where we saw a porcupine fish for the first time as well as beautiful moray eel. The porcupine fine ('porky' for short) did not appear to be threatened by us at all and allowed us to hang around it for a long time",
        },
        {
          date: new Date("2026-01-03"),
          location: "Fairlight Beach, Sydney",
          species:
            "Neon damsel, spotted sawtail, massive silver fish, red morwongs",
        },
      ],
    },
  },
  {
    name: "Isabelle",
    email: "bellegoodson@outlook.com",
    logs: {
      create: [
        {
          date: new Date("2026-01-10"),
          location: "Fairlight Beach, Sydney",
          species: "Yellow moray eel, porcupine fish",
          notes:
            "A lovely day at new fave spot Fairlight. Saw a porcupine fish ('porky') for the first time as well as beautiful moray eel.",
        },
        {
          date: new Date("2026-01-03"),
          location: "Fairlight",
          species:
            "Neon damsel, spotted sawtail, red morwongs, HUGE silver fish",
          notes:
            "The spotted sawtail was absolutely beautiful and reminded me of the maze fish I saw in Thailand",
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
