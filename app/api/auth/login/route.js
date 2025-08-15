import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { comparePassword } from "@/lib/auth";
import { generateToken } from "@/lib/token";

export async function POST(request){
    try {
        await connectDB();
        const { email, password } = await request.json();

        if(!email || !password){
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const user = await User.findOne({ email });

        if(!user){
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const isMatch = await comparePassword(password, user.password);


        if(!isMatch){
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const token = generateToken(user);

        const response = NextResponse.json({ message: "Login successful"});
        response.cookies.set('token', token, { httpOnly: true, path: '/' });

        return response;

    } catch (error) {
        return NextResponse.json({ error: "Server error with login api" }, { status: 500 });
    }
}