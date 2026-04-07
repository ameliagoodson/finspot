"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending)
    return <p className="text-muted-foreground mt-8 text-center">Loading...</p>;
  if (!session?.user)
    return (
      <p className="text-muted-foreground mt-8 text-center">Redirecting...</p>
    );

  const { user } = session;

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground text-sm">
            Welcome back, {user.name || "User"}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Email</p>
          <p className="text-muted-foreground text-sm">{user.email}</p>
        </div>

        <Button
          variant="outline"
          className="w-full"
          onClick={() => authClient.signOut()}
        >
          Sign out
        </Button>
      </div>
    </main>
  );
}
