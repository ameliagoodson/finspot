import { NextRequest, NextResponse } from "next/server";

import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  const { pathname } = request.nextUrl;

  // Logged-in user trying to visit sign-in or sign-up? Send them to dashboard.
  if (sessionCookie && ["/sign-in", "/sign-up"].includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Not logged in and trying to visit dashboard? Send them to sign-in.
  if (!sessionCookie && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in", "/sign-up"],
};
