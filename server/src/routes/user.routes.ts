import express from "express";
import { getAllUsers, getUser, createNewUser, updateUser, getUserByUsername } from "../controllers/user.controller";

export const userRouter = express.Router();


userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUser);
userRouter.get('/:username', getUserByUsername)
userRouter.post('/', createNewUser);
userRouter.put('/:id', updateUser);
