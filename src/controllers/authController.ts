import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { Request, Response } from "express";
import Auth from "../models/authModel";
import bcrypt from 'bcryptjs';

dotenv.config();

const secretKey = process.env.SECRET_KEY as string;

export const login = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    try {
        const user = await Auth.findOne({ username: username })

        if (!user) {
            res.status(401).json({ message: 'Invalid Username' });
            return;
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            res.status(401).json({ message: 'Invalid Password' });
            return;
        }

        const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
        return;

    } catch (error) {
        res.status(500).json({ message: 'Error loggin in: ', error });
    }
}