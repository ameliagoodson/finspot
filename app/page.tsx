import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="flex w-full max-w-sm flex-col gap-6 text-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Finspot</h1>
          <p className="text-muted-foreground text-sm">
            Log your dives and snorkel sessions
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            render={<Link href="/sign-up" />}
            nativeButton={false}
            className="w-full justify-center"
          >
            Sign up
          </Button>
          <Button
            variant="outline"
            render={<Link href="/sign-in" />}
            nativeButton={false}
            className="w-full justify-center"
          >
            Sign in
          </Button>
        </div>
      </div>
    </main>
  );
}
