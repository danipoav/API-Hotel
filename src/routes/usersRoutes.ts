import { Router } from "express";
import { getAllUsers, getUser, updateUser, createUser, deleteUser } from "../controllers/userController";

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;