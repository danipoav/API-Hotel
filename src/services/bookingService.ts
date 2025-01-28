import { BookingType, BookingTypeID } from "../interfaces/BookingType";
import Booking from "../models/bookingModel";
import { v4 as uuidv4 } from 'uuid'
import connection from "../database";

export const fetchAllBookings = async () => {
    const [rows]: any =  await connection.query('SELECT * FROM bookings')
    return rows;
};

export const fetchBookingById = async (id: string) => {
    return await Booking.findOne({ id })
};

export const addBooking = async (data: BookingType) => {
    const booking = { ...data, id: uuidv4() };
    const newBooking = new Booking(booking);
    await newBooking.save();
    return await Booking.find();
};

export const editBooking = async (id: string, data: BookingTypeID) => {
    await Booking.findOneAndUpdate({ id }, data, { new: true });
    return Booking.find();
};

export const removeBooking = async (id: string) => {
    await Booking.findOneAndDelete({ id });
    return await Booking.find();
};