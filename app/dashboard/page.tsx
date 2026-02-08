"use client";

import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";

export default function DashboardPage() {
    const router = useRouter();
    //  key to managing authentication state on the client side. It provides the session data and a pending status
    const { data: session, isPending } = useSession();


    // To protect this route, use a useEffect hook. It checks if the session has loaded (!isPending) 
    // and if there is no authenticated user (!session?.user). If both are true, it redirects the user to the sign-in page.
    useEffect(() => {
        if (!isPending && !session?.user) {
            router.push("/sign-in");
        }
    }, [isPending, session, router]);

    if (isPending)
        return (
            <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4" >
                <p className="text-center mt-8 text-white">Loading...</p>
            </main >
        )

    if (!session?.user)
        return (
            <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4" >
                <p className="text-center mt-8 text-white">Redirecting...</p>
            </main>);

    const { user } = session;

    return (
        <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p>Welcome, {user.name || "User"}!</p>
            <p>Email: {user.email}</p>
            <button
                onClick={() => signOut()}
                className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
            >
                Sign Out
            </button>
        </main>
    );
}