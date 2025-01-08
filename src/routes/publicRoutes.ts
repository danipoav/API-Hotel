import { Router } from "express";
import { getHotelInfo } from "../controllers/hotelController";

const publicRouter = Router();

publicRouter.get('/', getHotelInfo);

export default publicRouter;