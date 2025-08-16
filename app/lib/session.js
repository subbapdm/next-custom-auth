import User from "@/models/User";
import connectDB from "./db";
import { verifyToken } from "./token";


export async function getServerSession(){
    try {
        const decoded = await verifyToken();
        if(!decoded) return null;

        await connectDB();
        const user = await User.findById(decoded.id).select("-password");

        return user ? { user } : null;
    } catch (error) {
        console.log("getServerSession error:", error.message);
        return null;
    }
}