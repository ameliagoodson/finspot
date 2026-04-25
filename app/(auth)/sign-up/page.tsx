"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await authClient.signUp.email(
        {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          callbackURL: "/dashboard",
        },
        {
          onRequest: (context) => {
            setLoading(true);
          },
          onSuccess: (context) => {
            router.push("/dashboard");
          },
          onError: (context) => {
            setError(context.error.message || "Something went wrong.");
          },
        }
      );
    } finally {
      setLoading(false);
    }

    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-muted-foreground text-sm">
              Enter your details to get started
            </p>
          </div>

          {error && <p className="text-destructive text-sm">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Min. 8 characters"
                minLength={8}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating account" : "Sign up "}
            </Button>
          </form>
        </div>
      </main>
    );
  };
}
