import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Check if URI exists
        if(!process.env.MONGO_URI){
            throw new Error("MONGO_URI is not defined");
        }

        // Check if already connected
        if(mongoose.connection.readyState >= 1){
            console.log("MongoDB already connected");
            return;
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");

    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        throw new Error(`Database connection failed: ${error.message}`);
    }
}

export default connectDB;