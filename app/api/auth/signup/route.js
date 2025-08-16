import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import User from "@/models/User";
import { hashPassword } from "@/app/lib/auth";

export async function POST(request){
    try {
        await connectDB();
        const {fullName, email, password} = await request.json();

        if(!fullName || !email || !password){
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });

        if(existingUser){
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await hashPassword(password);

        User.create({ fullName, email, password: hashedPassword });
        return NextResponse.json({ message: "User registered successfully" });

    } catch (error) {
        return NextResponse.json({ error: "Server error with singup api"}, { status: 500 });
    }
}