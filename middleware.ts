import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  let user = request.cookies.get("user");
  let token = request.cookies.get("token");
  let email = request.cookies.get("email");

  if (
    (request.nextUrl.pathname.startsWith("/profile") ||
      request.nextUrl.pathname.startsWith("/invoice")) &&
    (!user || !token)
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/auth") && user && token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/auth/verify") && !email) {
    return NextResponse.redirect(new URL("/auth/register", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/auth/reset-password") && !email) {
    return NextResponse.redirect(new URL("/auth/forget-password", request.url));
  }

  // if (request.nextUrl.pathname.startsWith("/admin") && (!user || !token)) {
  //   return NextResponse.redirect(new URL("/not-found", request.url));
  // }
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:path*",
    "/auth/:path*",
    "/admin/:path*",
    "/invoice",
  ],
};
