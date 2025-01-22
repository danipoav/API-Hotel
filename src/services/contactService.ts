import { ContactType, ContactTypeID } from "../interfaces/ContactType";
import Contact from "../models/contactModel";
import { v4 as uuidv4 } from "uuid";

export const fetchAllContacts = async () => {
    return await Contact.find();
}

export const fetchContactById = async (id: string) => {
    return await Contact.findOne({ id });
}

export const addContact = async (data: ContactType) => {
    const contact = { ...data, id: uuidv4() };
    const newContact = new Contact(contact);
    await newContact.save();
    return await Contact.find();
}

export const editContact = async (id: string, data: ContactTypeID) => {
    await Contact.findOneAndUpdate({ id }, data, { new: true });
    return await Contact.find();

}

export const removeContact = async (id: string) => {
    await Contact.findOneAndDelete({ id });
    return await Contact.find();

}