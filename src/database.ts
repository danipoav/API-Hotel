import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import Auth from "./models/authModel";
import { bookingSeed } from "./seed/seed";
import Booking from "./models/bookingModel";

const url = "mongodb://localhost:27017/api"

const connectDB = async (): Promise<void> => {
    try {
        //DB Connection
        const conn = await mongoose.connect(url);
        console.log(`MongoDB connected: ${conn.connection.host}`);

        // Creating new credentials using hash
        // const saltRounds = 10;
        // const hasehdPassword = await bcrypt.hash('admin', saltRounds);
        // const newAuth = new Auth({
        //     username: 'Daniel',
        //     password: hasehdPassword
        // })
        // await newAuth.save()
        // console.log('New User created');
        // mongoose.connection.close();

        //Creating Faker datas using Faker on seed file
        // await Booking.insertMany(bookingSeed);
        

    } catch (error) {
        console.log('Error connection to MongoDB: ' + error);
        process.exit(1);
    }
}

export default connectDB;