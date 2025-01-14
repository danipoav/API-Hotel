import { Request, Response } from "express";
import { fetchAllContacts, fetchContactById, editContact, removeContact, addContact } from "../services/contactService";

export const getAllContacts = async (req: Request, res: Response) => {
    const contacts = await fetchAllContacts();
    res.status(200).json(contacts);
};

export const getContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const contact = await fetchContactById(id);
    if (!contact) {
        res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
};

export const createContact = async (req: Request, res: Response) => {
    const newContact = req.body;
    const updatedContacts = await addContact(newContact);
    res.status(201).json(updatedContacts);
};

export const updateContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const contactUpdates = req.body;
    const updatedContacts = await editContact(id, contactUpdates);
    res.status(200).json(updatedContacts);
};

export const deleteContact = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedContacts = await removeContact(id);
    res.status(200).json(updatedContacts);
};
