import mongoose, { Document, Schema } from "mongoose"

export interface IUser extends Document {
    id: string,
    name: string,
    photo: string,
    order_date: string;
    check_in: string;
    check_out: string;
    room_type: string;
    status: string;
}

const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    photo: { type: String, required: true },
    order_date: { type: String, required: true },
    check_in: { type: String, required: true },
    check_out: { type: String, required: true },
    room_type: { type: String, required: true },
    status: { type: String, required: true },
})

const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;