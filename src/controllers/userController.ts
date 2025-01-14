import { Request, Response } from "express";
import { fetchAllUsers, fetchUserById, editUser, addUser, removeUser } from "../services/userService";

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await fetchAllUsers();
    res.status(200).json(users);
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await fetchUserById(id);
    if (!user) {
        res.status(404).json({ message: 'User not found' })
        return;
    }
    res.status(200).json(user);
}

export const createUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    const users = await addUser(newUser);
    res.status(201).json(users)
}

export const updateUser = async (req: Request, res: Response) => {
    const updateBooking = req.body;
    const { id } = req.params;
    const users = await editUser(id, updateBooking);
    res.status(200).json(users);
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const users = await removeUser(id);
    res.status(200).json(users)
}