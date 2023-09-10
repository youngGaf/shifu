import express from "express";
import { getShifu, getAllShifus, createNewShifu, updateShifu } from "../controllers/shifu.controller";

export const shifuRouter = express.Router();


shifuRouter.get('/', getAllShifus);
shifuRouter.get('/:id', getShifu);
shifuRouter.post('/', createNewShifu);
shifuRouter.put('/:id', updateShifu);
