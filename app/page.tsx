"use client"
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";

export default function Home() {
  const { data, isPending } = useSession();

  if (isPending) {
    return (
      <main className="flex items-center justify-center h-screen bg-neutral-950 text-white">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center h-screen bg-neutral-950 text-white">
      {!data?.user ?
        <div className="flex gap-4">
          <Link href="/sign-up" className="bg-white text-black font-medium px-6 py-2 rounded-md hover:bg-gray-200">
            Sign Up
          </Link>
          <Link href="/sign-in" className="border border-cyan font-medium px-6 py-2 rounded-md hover:bg-neutral-800">
            Sign In
          </Link>
        </div>
        :
        <div className="flex gap-4">
          <button onClick={() => signOut()} className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200">Sign Out</button>
        </div>}
    </main>
  );
}