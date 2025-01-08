import { BookingType, BookingTypeID } from "../interfaces/BookingType";
import { v4 as uuidv4 } from 'uuid'
import { booking } from "../data/booking";

let bookings: BookingTypeID[] = booking;

export const fetchAllBookings = () => {
    return bookings;
};

export const fetchBookingById = (id: string) => {
    return bookings.find((booking) => booking.id === id);
};

export const addBooking = (newBooking: BookingType) => {
    const updatedBooking = { ...newBooking, id: uuidv4() };
    bookings.push(updatedBooking);
    return bookings;
};

export const editBooking = (id: string, updatedBooking: BookingTypeID) => {
    bookings = bookings.map((booking) =>
        booking.id === id ? { ...booking, ...updatedBooking } : booking
    );
    return bookings;
};

export const removeBooking = (id: string) => {
    bookings = bookings.filter((booking) => booking.id !== id);
    return bookings;
};