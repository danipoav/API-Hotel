import { BookingType, BookingTypeID } from "../interfaces/BookingType";
import Booking from "../models/bookingModel";
import { v4 as uuidv4 } from 'uuid'
import connection from "../database";

export const fetchAllBookings = async () => {
    const [rows]: any = await connection.query('SELECT * FROM bookings')
    return rows;
};

export const fetchBookingById = async (id: string) => {
    const [rows]: any = await connection.query('SELECT * FROM bookings WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
};

export const addBooking = async (data: BookingType) => {
    const id = uuidv4();
    const { name, photo, check_in, check_out, room, requests, booking_date, price, status } = data;
    await connection.query(
        'INSERT INTO bookings (id,name, photo, check_in, check_out,room,requests,booking_date,price,status) VALUES (?, ?, ?, ?, ?)',
        [id, name, photo, check_in, check_out, room, requests, booking_date, price, status]
    );
    return fetchAllBookings();
};

export const editBooking = async (id: string, data: BookingTypeID) => {
    const { name, photo, check_in, check_out, room, requests, booking_date, price, status } = data;
    await connection.query(
        'UPDATE bookings SET name = ?, photo = ?, check_in = ?, check_out = ?,room = ?,requests = ?,booking_date = ?, price = ?,status = ?, WHERE id = ?',
        [name, photo, check_in, check_out, room, requests, booking_date, price, status, id]
    );
    return fetchAllBookings();
};

export const removeBooking = async (id: string) => {
    await connection.query('DELETE FROM bookings WHERE id = ?', [id]);
    return fetchAllBookings();
};