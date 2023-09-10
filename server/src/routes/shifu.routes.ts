import express from "express";
import { getShifu, getAllShifus, createNewShifu, updateShifu, getShifuByUsername } from "../controllers/shifu.controller";

export const shifuRouter = express.Router();


shifuRouter.get('/:id', getShifu);
shifuRouter.get('/:username', getShifuByUsername);
shifuRouter.get('/', getAllShifus);
shifuRouter.post('/', createNewShifu);
shifuRouter.put('/:id', updateShifu);
