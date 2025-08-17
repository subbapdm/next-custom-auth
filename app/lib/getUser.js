import User from "@/models/User";
import connectDB from "./db";
import { verifyToken } from "./token";
import { cookies } from "next/headers";

export async function getCurrentUser(){
    try {
        const token = (await cookies()).get('token')?.value;
        if(!token) return null;

        const decoded = await verifyToken(token);
        if(!decoded) return null;

        await connectDB();
        const user = await User.findById(decoded.id).select("-password").lean();

        if(!user) return null;

       return {
        ...user,
        _id: user._id.toString(),
        createdAt: user.createdAt?.toISOString(),
        updatedAt: user.updatedAt?.toISOString()
       }
    } catch (error) {
        console.log("getCurrentUser error:", error.message);
        return null;
    }
}