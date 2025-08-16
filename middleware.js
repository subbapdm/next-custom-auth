import { NextResponse } from "next/server";
import { verifyToken } from "./app/lib/token";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(request){
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const decoded = await verifyToken();

    if(isProtectedRoute && !decoded?.id){
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if(isPublicRoute && decoded?.id && !request.nextUrl.pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
 matcher: [
    '/dashboard/:path*',   // Protect the dashboard route
    '/login',              // Add login to be checked by the middleware
    '/signup',           // Add register to be checked by the middleware
  ],
}