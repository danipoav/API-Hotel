import mongoose, { Document, Schema } from "mongoose";

export interface IAuth extends Document {
    username: string,
    password: string
}

export const authSchema = new Schema<IAuth>({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Auth = mongoose.model<IAuth>('Auth', authSchema);

export default Auth;