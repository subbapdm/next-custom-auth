import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import User from "@/models/User";
import { verifyToken } from "@/app/lib/token";


export async function GET(request){
    try {
        await connectDB();
        const token = request.cookies.get("token")?.value;

        if(!token){
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // const decoded = await verifyToken(token);

        // if(!decoded || decoded.role !== "admin"){
        //     return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        // }

        const users = await User.find().select("-password");
        return NextResponse.json({ users });
        
    } catch (error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}