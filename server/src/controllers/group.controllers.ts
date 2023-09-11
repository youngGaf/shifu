import { Group } from "../models/Group.model";
import {v4 as uuidv4} from 'uuid';
import { Request, Response } from 'express';
import { 
    createGroup, 
    findAllGroups, 
    findGroupById, 
    findGroupByName, 
    updateGroupById 
} from "../services/group.services";

export const createNewGroup = async (req: Request, res: Response) => {
    try {
        const _id: string = uuidv4();
        const { shifu, groupName } = req.body;
        if(!shifu || !groupName){
            return res.status(400).send('ensure all data are filled');
        }
        
        const group: Group = await createGroup({ _id, ...req.body});
        res.status(201).json({message:'Shifu successfully created', data: group});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};

export const getAllGroups = async (req: Request, res: Response) => {
    try {
        const groups: Group[] = await findAllGroups();
        if (groups) {
            return res.status(200).send(groups);
        }
        res.status(404).send('item not found');
    } catch (e:any) {
        res.status(500).send(e.message);
    }
};

export const getGroup = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const group = await findGroupById(id);
        if(group){
            return res.status(200).send(group);
        }
        res.status(404).send('group does not exist');
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};

export const getGroupByName = async (req: Request, res: Response) => {
    try {
        const { groupName } = req.params;
        const group = await findGroupByName(groupName);
        if(group){
            return res.status(200).send(group);
        }
        res.status(404).send('group does not exist');
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};

export const updateGroup = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const existingGroup = await findGroupById(id)

        if(existingGroup){
            const group = await updateGroupById(id, req.body);
            return res.status(200).send(group);
        }
        res.status(400).send('group does not exists');
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};

