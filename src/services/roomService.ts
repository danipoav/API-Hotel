import { RoomTypeID, RoomType } from "../interfaces/RoomType";
import Room from "../models/roomModel";
import { v4 as uuidv4 } from "uuid";

export const fetchAllRooms = async () => {
    return await Room.find();
}

export const fetchRoomById = async (id: string) => {
    return await Room.findOne({ id });
}

export const addRoom = async (data: RoomType) => {
    const room = { ...data, id: uuidv4() };
    const newRoom = new Room(room);
    await newRoom.save();
    return await Room.find();
}

export const editRoom = async (id: string, data: RoomTypeID) => {
    await Room.findOneAndUpdate({ id }, data, { new: true })
    return await Room.find();
}

export const removeRoom = async (id: string) => {
    await Room.findOneAndDelete({ id });
    return await Room.find();
}