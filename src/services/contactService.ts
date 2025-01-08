import { ContactType, ContactTypeID } from "../interfaces/ContactType";
import { v4 as uuidv4 } from "uuid";
import { contact } from "../data/contact";

let contacts: ContactTypeID[] = contact;

export const fetchAllContacts = () => {
    return contacts;
}

export const fetchContactById = (id: string) => {
    return contacts.find((contact) => contact.id === id);
}

export const addContact = (newContact: ContactType) => {
    const updatedContact = { ...newContact, id: uuidv4() };
    contacts.push(updatedContact);
    return contacts;
}

export const editContact = (id: string, updatedContact: ContactTypeID) => {
    contacts = contacts.map((contact) =>
        contact.id === updatedContact.id ? { ...contact, ...updatedContact } : contact
    );
    return contacts;
}

export const removeContact = (id: string) => {
    contacts = contacts.filter((contact) => contact.id !== id);
    return contacts;
}