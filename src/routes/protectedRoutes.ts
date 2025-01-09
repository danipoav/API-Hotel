import { Router } from "express";
import { authenticateToken } from "../middleware/authMiddleware";
import bookingRoutes from './bookingsRoutes'
import contactRoutes from './contactsRoutes'

const router = Router();

router.use(authenticateToken);

router.use('/bookings', bookingRoutes);
router.use('/contacts', contactRoutes);

export default router;