import express from "express";
import { createNewGroup, getAllGroups, getGroup, getGroupByName, updateGroup } from "../controllers/group.controllers";


export const groupRouter = express.Router();

groupRouter.get('/', getAllGroups);
groupRouter.get('/:id', getGroup);
groupRouter.get('/:groupName', getGroupByName);
groupRouter.post('/', createNewGroup);
groupRouter.put('/:id', updateGroup);