import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  // Check if user is authenticated
  const isAuthenticated = !!authCookie;

  // Root path - redirect based on auth status
  if (pathname === "/") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/user-profile", request.url));
    } else {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
  }

  // Auth pages that logged-in users should not access
  const authPages = ["/sign-in", "/sign-up"];
  const isAuthPage = authPages.some((page) => pathname.startsWith(page));

  // Protected pages that require authentication
  const protectedPages = ["/user-profile", "/dashboard", "/home", "/about"];
  const isProtectedPage = protectedPages.some((page) =>
    pathname.startsWith(page),
  );

  // If user is authenticated and trying to access auth pages, redirect to user-profile
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL("/user-profile", request.url));
  }

  // If user is not authenticated and trying to access protected pages, redirect to sign-in
  if (!isAuthenticated && isProtectedPage) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/sign-in",
    "/sign-up",
    "/user-profile/:path*",
    "/dashboard/:path*",
    "/home/:path*",
    "/about/:path*",
  ],
};
