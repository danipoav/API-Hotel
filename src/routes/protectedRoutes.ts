import { Router } from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import { Request, Response } from "express";

const router = Router();

router.get('/protected', authenticateToken, (req: Request, res: Response) => {
    res.status(200).json({ message: 'Allowed acces to protected route' });
});

export default router;