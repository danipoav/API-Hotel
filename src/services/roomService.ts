import { RoomTypeID, RoomType } from "../interfaces/RoomType";
import Room from "../models/roomModel";
import { v4 as uuidv4 } from "uuid";
import connection from '../database'

export const fetchAllRooms = async () => {
    const [rows] = await connection.query('SELECT * FROM rooms')
    return rows
}

export const fetchRoomById = async (id: string) => {
    const [rows] = await connection.query('SELECT * FROM rooms WHERE id = ?', [id])
    return rows
}

export const addRoom = async (data: RoomType) => {
    const id = uuidv4();
    const { name, photo, bed_type, room_number, facilities, price, status } = data;
    await connection.query('INSERT INTO rooms (id,name,photo,bed_type,room_number,facilities,price,status) VALUES (?,?,?,?,?,?,?,?)',
        [id, name, photo, bed_type, room_number, facilities, price, status]
    );
    return fetchAllRooms();
}

export const editRoom = async (id: string, data: RoomTypeID) => {
    const { name, photo, bed_type, room_number, facilities, price, status } = data;
    await connection.query('UPDATE rooms SET name = ?, photo = ?,bed_type=?, room_number = ?, facilities = ?,price=?, status = ? WHERE id = ?',
        [name, photo, bed_type, room_number, facilities, price, status, id]
    )
    return fetchAllRooms();
}

export const removeRoom = async (id: string) => {
    await connection.query('DELETE FROM rooms WHERE id=?', [id]);
    return fetchAllRooms();
}