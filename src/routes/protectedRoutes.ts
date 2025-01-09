import { Router } from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import bookingRoutes from './bookingsRoutes'
import contactRoutes from './contactsRoutes'
import userRouter from "./usersRoutes";
import roomRouter from "./roomsRoutes";

const router = Router();

router.use(authenticateToken);

router.use('/bookings', bookingRoutes);
router.use('/contacts', contactRoutes);
router.use('/users', userRouter)
router.use('/rooms', roomRouter)

export default router;