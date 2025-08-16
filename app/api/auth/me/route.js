import connectDB from "@/app/lib/db";
import { verifyToken } from "@/app/lib/token";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        await connectDB();
        const token = request.cookies.get("token")?.value;

        if(!token){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);

        if(!decoded){
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const user = await User.findById(decoded.id).select("-password");

        if(!user){
            return NextResponse.json({ error: "User not found!" }, { status: 401 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}