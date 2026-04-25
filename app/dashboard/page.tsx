import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { SignOutButton } from "@/components/sign-out-button";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log("session:", session);
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground text-sm">
            Welcome back, {session.user?.name || "User"}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Email</p>
          <p className="text-muted-foreground text-sm">{session.user?.email}</p>
        </div>
        <Link href="/logs">Logs</Link>
        <SignOutButton />
      </div>
    </main>
  );
}
