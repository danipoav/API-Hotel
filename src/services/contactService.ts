import { ContactType, ContactTypeID } from "../interfaces/ContactType";
import Contact from "../models/contactModel";
import { v4 as uuidv4 } from "uuid";

export const fetchAllContacts = async () => {
    return await Contact.find();
}

export const fetchContactById = async (id: string) => {
    return await Contact.findById(id);
}

export const addContact = async (data: ContactType) => {
    const contact = { ...data, id: uuidv4() };
    const newContact = new Contact(contact);
    return await newContact.save();
}

export const editContact = async (id: string, data: ContactTypeID) => {
    return await Contact.findByIdAndUpdate(id, data, { new: true });
}

export const removeContact = async (id: string) => {
    return await Contact.findByIdAndDelete(id);
}