import { Request, Response } from "express";
import { fetchAllContacts, fetchContactById, editContact, removeContact, addContact } from "../services/contactService";

export const getAllContacts = (req: Request, res: Response) => {
    const contacts = fetchAllContacts();
    res.status(200).json(contacts);
};

export const getContact = (req: Request, res: Response) => {
    const { id } = req.params;
    const contact = fetchContactById(id);
    if (!contact) {
        res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
};

export const createContact = (req: Request, res: Response) => {
    const newContact = req.body;
    const updatedContacts = addContact(newContact);
    res.status(201).json(updatedContacts);
};

export const updateContact = (req: Request, res: Response) => {
    const { id } = req.params;
    const contactUpdates = req.body;
    const updatedContacts = editContact(id, contactUpdates);
    res.status(200).json(updatedContacts);
};

export const deleteContact = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedContacts = removeContact(id);
    res.status(200).json(updatedContacts);
};
