import { NextResponse } from "next/server";
import { verifyToken } from "./app/lib/token";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = publicRoutes.includes(path);

  const token = request.cookies.get("token")?.value;

  // calling verifyToken without passing token works fine inside server components/API routes because next/headers is available but it will fail in middleware, because middleware runs in the Edge Runtime, where cookies() from next/headers is not available. So cookies from the request.cookies API need to be read.
  const decoded = await verifyToken(token);

  if (isProtectedRoute) {
    if (!token || !decoded?.id) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }

  if (isPublicRoute && decoded?.id) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", // Protect the dashboard route
    "/login", // Add login to be checked by the middleware
    "/signup", // Add register to be checked by the middleware
  ],
};
