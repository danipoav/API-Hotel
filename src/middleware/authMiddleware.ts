import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

dotenv.config()

const secretKey = process.env.SECRET_KEY as string;

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(401).json({ message: 'Acces Denied, No token provided.' });
        return;
    }

    try {
        jwt.verify(token, secretKey);
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid token.' })
        return;
    }
}