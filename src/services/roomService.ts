import { RoomTypeID, RoomType } from "../interfaces/RoomType";
import Room from "../models/roomModel";
import { v4 as uuidv4 } from "uuid";

export const fetchAllRooms = async () => {
    return await Room.find();
}

export const fetchRoomById = async (id: string) => {
    return await Room.findById(id);
}

export const addRoom = async (data: RoomType) => {
    const room = { ...data, id: uuidv4() };
    const newRoom = new Room(room);
    return await newRoom.save();
}

export const editRoom = async (id: string, data: RoomTypeID) => {
    return await Room.findByIdAndUpdate(id, data, { new: true })
}

export const removeRoom = async (id: string) => {
    return await Room.findByIdAndDelete(id);
}