import { ContactType, ContactTypeID } from "../interfaces/ContactType";
import Contact from "../models/contactModel";
import { v4 as uuidv4 } from "uuid";
import connection from '../database'

export const fetchAllContacts = async () => {
    const [rows]: any = await connection.query('SELECT * FROM contacts')
    return rows;
}

export const fetchContactById = async (id: string) => {
    const [rows]: any = await connection.query('SELECT * FROM contacts WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
}

export const addContact = async (data: ContactType) => {
    const id = uuidv4();
    const { name, join_date, job_desc, phone, days, photo, status } = data;
    await connection.query(
        'INSERT INTO contacts (id, name, join_date, job_desc, phone, days, photo, status) VALUES (?, ?, ?, ?, ?,?,?,?)',
        [id, name, join_date, job_desc, phone, days, photo, status]
    );
    return fetchAllContacts();
}

export const editContact = async (id: string, data: ContactTypeID) => {
    const { name, join_date, job_desc, phone, days, photo, status } = data;
    await connection.query(
        'UPDATE contacts SET name = ?, join_date = ?,job_desc=?, phone = ?, days = ?,photo=?, status = ? WHERE id = ?',
        [name, join_date, job_desc, phone, days, photo, status, id]
    );
    return fetchAllContacts();
}

export const removeContact = async (id: string) => {
    await connection.query('DELETE FROM contacts WHERE id = ?', [id]);
    return fetchAllContacts();
}