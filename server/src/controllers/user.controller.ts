import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/User.model';
import { Request, Response } from 'express';
import { 
    createUser, 
    findAllUsers, 
    findUserById,
    findUserByUsername, 
    updateUserById } from '../services/user.services';

export const createNewUser = async (req: Request, res: Response) => {
    try {
        const _id: string = uuidv4();
        const { email, location, password } = req.body;

        if(!email || !password || !location){
            return res.status(400).send('ensure all data are filled');
        }

        const user: User = await createUser({ _id, ...req.body});
        res.status(201).json({message:'user successfully created', data: user});
    } catch (e: any) {
        res.status(500).json({status: 500, message: e.message});
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await findAllUsers();
        if (users) {
            return res.status(200).send(users);
        }
        res.status(404).send('item not found');
    } catch (e:any) {
        res.status(500).send(e.message);
    }
};

export const getUser =async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await findUserById(id);
        if(user){
            return res.status(200).send(user);
        }
        res.status(404).send('user does not exist');
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};

export const getUserByUsername = async (req: Request, res: Response) => {
    try {
        const { username } = req.params;
        const user = await findUserByUsername(username);
        if(user){
            return res.status(200).send(user);
        }
        res.status(404).send('user does not exist');
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};

export const updateUser =async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const existingUser = await findUserById(id);

        if(existingUser){
            const user = await updateUserById(id, req.body);
            return res.status(200).json(user)
        }
        res.status(400).send('user does not exists')
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};