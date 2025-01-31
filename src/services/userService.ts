import { UserType, UserTypeID } from "../interfaces/UserType";
import { v4 as uuidv4 } from "uuid";
import connection from "../database";

export const fetchAllUsers = async () => {
    const [rows]: any = await connection.query('SELECT * FROM users')
    return rows;
}

export const fetchUserById = async (id: string) => {
    const [rows]: any = await connection.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
}

export const addUser = async (data: UserType) => {
    const id = uuidv4();
    const { name, photo, order_date, check_in, check_out, room_type, status } = data;
    await connection.query(
        'INSERT INTO users (id, name, photo, order_date, check_in, check_out, room_type, status) VALUES (?, ?, ?, ?, ?,?,?,?)',
        [id, name, photo, order_date, check_in, check_out, room_type, status]
    );
    return fetchAllUsers();
}

export const editUser = async (id: string, data: UserTypeID) => {
    const { name, photo, order_date, check_in, check_out, room_type, status } = data;
    await connection.query(
        'UPDATE users SET name = ?, photo = ?,order_date=?, check_in = ?, check_out = ?,room_type=?, status = ? WHERE id = ?',
        [name, photo, order_date, check_in, check_out, room_type, status, id]
    );
    return fetchAllUsers(); 
}

export const removeUser = async (id: string) => {
    await connection.query('DELETE FROM users WHERE id = ?', [id]);
    return fetchAllUsers();
}
