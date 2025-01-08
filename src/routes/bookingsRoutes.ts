import { Router } from "express";
import { getAllBookings, getBooking, createBooking, updateBooking, deleteBooking } from "../controllers/bookingController";

const router = Router();

router.get('/', getAllBookings);
router.get('/:id', getBooking);
router.post('/', createBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

export default router; 