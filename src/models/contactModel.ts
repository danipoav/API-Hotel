import mongoose, { Document, Schema } from "mongoose";

export interface IContact extends Document {
    id: string,
    name: string;
    join_date: string;
    job_desc: string;
    phone: string;
    status: string
    days: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
    photo: string;
}

const contactSchema = new Schema<IContact>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    join_date: { type: String, required: true },
    job_desc: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, required: true },
    days: { type: String, required: true },
    photo: { type: String, required: true },
})

const ContactModel = mongoose.model<IContact>('Contact', contactSchema);

export default ContactModel;