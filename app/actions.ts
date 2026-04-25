"use server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const addLog = async (formData: FormData) => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Not authenticated");

  await prisma.log.create({
    data: {
      userId: session.user.id,
      date: new Date(formData.get("date") as string),
      location: formData.get("location") as string,
    },
  });
};
