import express from "express";
import { getAllUsers, getUser, createNewUser, updateUser } from "../controllers/user.controller";

export const userRouter = express.Router();


userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUser);
userRouter.post('/', createNewUser);
userRouter.put('/:id', updateUser);
