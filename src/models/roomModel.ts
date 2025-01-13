import mongoose, { Document, Schema } from "mongoose";

export interface IRoom extends Document {
    id: string,
    name: string,
    photo: string,
    bed_type: string;
    room_number: string;
    facilities: string;
    price: number;
    status: string;
}

const roomSchema = new Schema<IRoom>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    bed_type: { type: String, required: true },
    room_number: { type: String, required: true },
    facilities: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
})

const roomModel = mongoose.model<IRoom>('Room', roomSchema);

export default roomModel;