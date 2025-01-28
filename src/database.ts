import mongoose from "mongoose";
import dotenv from 'dotenv'
import mysql from 'mysql2'
import bcrypt from 'bcrypt';
import Auth from "./models/authModel";
import { bookingSeed, contactSeed, roomSeed, userSeed } from "./seed/seed";
import Booking from "./models/bookingModel";
import Contact from "./models/contactModel";
import User from "./models/userModel";
import Room from "./models/roomModel";
import { authSchema } from "./models/authModel";
import { getAllBookings } from "./controllers/bookingController";

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const connectDB = (): void => {
    connection.connect((error) => {
        if (error) {
            console.log('Error getting connection to DB: ', error);
            process.exit(1);
        } else {
            console.log('Connected correctly to MySQL')
        }
    })
}

export default connectDB;