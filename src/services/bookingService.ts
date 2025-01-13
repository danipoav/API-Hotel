import { BookingType, BookingTypeID } from "../interfaces/BookingType";
import Booking from "../models/bookingModel";
import { v4 as uuidv4 } from 'uuid'

export const fetchAllBookings = async () => {
    return await Booking.find();
};

export const fetchBookingById = async (id: string) => {
    return await Booking.findById(id);
};

export const addBooking = async (data: BookingType) => {
    const booking = { ...data, id: uuidv4() };
    const newBooking = new Booking(booking);
    return await newBooking.save();
};

export const editBooking = async (id: string, data: BookingTypeID) => {
    return await Booking.findByIdAndUpdate(id, data, { new: true });
};

export const removeBooking = async (id: string) => {
    return await Booking.findByIdAndDelete(id);
};