import { NextResponse } from "next/server";
import { verifyToken } from "./lib/token";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login", "/signup"];

export default async function middleware(request){
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const token = request.cookies.get("token")?.value;
    const decoded = await verifyToken(token);
    console.log(decoded);

    if(isProtectedRoute && !decoded?.id){
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    if(isPublicRoute && decoded?.id && !request.nextUrl.pathname.startsWith("/dashboard")){
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}