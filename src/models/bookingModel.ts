import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
    id: string,
    name: string;
    photo: string;
    check_in: string;
    check_out: string;
    room: number;
    requests: string;
    booking_date: string;
    price: number;
    status: 'Paid' | 'Refunded' | 'Pending';
};

const bookingSchema = new Schema<IBooking>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    check_in: { type: String, required: true },
    check_out: { type: String, required: true },
    room: { type: Number, required: true },
    requests: { type: String, required: true },
    booking_date: { type: String, required: true },
    price: { type: Number, required: false },
    status: { type: String, required: true, enum: ['Paid', 'Refunded', 'Pending'] },
});

const BookingModel = mongoose.model<IBooking>('Booking', bookingSchema);

export default BookingModel;