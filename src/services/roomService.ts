import { RoomTypeID, RoomType } from "../interfaces/RoomType";
import { v4 as uuidv4 } from "uuid";
import { room } from "../data/room";

let rooms: RoomTypeID[] = room;

export const fetchAllRooms = () => {
    return rooms;
}

export const fetchRoomById = (id: string) => {
    return rooms.find((room) => room.id === id);
}

export const addRoom = (newRoom: RoomType) => {
    const updatedRoom = { ...newRoom, id: uuidv4() };
    rooms.push(updatedRoom);
    return rooms;
}

export const editRoom = (id: string, updatedRoom: RoomTypeID) => {
    rooms = rooms.map((room) =>
        room.id === id ? { ...room, ...updatedRoom } : room
    );
    return rooms;
}

export const removeRoom = (id: string) => {
    rooms = rooms.filter((room) => room.id !== id);
    return rooms;
}