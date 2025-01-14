import { Request, Response } from "express";
import { fetchAllRooms, fetchRoomById, removeRoom, editRoom, addRoom } from "../services/roomService";

export const getAllRooms = async (req: Request, res: Response) => {
    const rooms = await fetchAllRooms()
    res.status(200).json(rooms)
}

export const getRoomById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const room = await fetchRoomById(id);
    if (!room) {
        res.status(404).json({ message: 'Room not found' })
        return;
    }
    res.status(200).json(room);
}

export const createRoom = async (req: Request, res: Response) => {
    const newRoom = req.body;
    const rooms = await addRoom(newRoom);
    res.status(201).json(rooms);
}

export const updateRoom = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedRoom = req.body;
    const rooms = await editRoom(id, updatedRoom);
    res.status(200).json(rooms)
}

export const deleteRoom = async (req: Request, res: Response) => {
    const { id } = req.params;
    const rooms = await removeRoom(id);
    res.status(200).json(rooms);
}