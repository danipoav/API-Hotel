import mongoose from "mongoose";

const url = "mongodb://localhost:27017/api"

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.log('Error connection to MongoDB: ' + error);
        process.exit(1);
    }
}

export default connectDB;