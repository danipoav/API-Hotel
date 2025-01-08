import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { Request, Response } from "express";

dotenv.config();

const secretKey = process.env.SECRET_KEY as string;

const hardCodedUser = {
    username: 'dani',
    password: 'user'
}

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (username === hardCodedUser.username && password === hardCodedUser.password) {
        const token = jwt.sign({ username: hardCodedUser.username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
        return;
    }

    res.status(401).json({ message: 'Invalid credentials.' })
    return;
}