import { Shifu } from '../models/Shifu.model';
import { Request, Response } from 'express';
import { createShifu,
    findAllShifus,
    findShifuById,
    findShifuByUsername,
    updateShifuById
} from '../services/shifu.service';

export const createNewShifu = async (req: Request, res: Response) => {
    try {
        const { email, location, password } = req.body;
        if(!email || !password || !location){
            return res.status(400).send('ensure all data are filled');
        }
        const shifu: Shifu = await createShifu(req.body);
        res.status(201).json({message:'Shifu successfully created', data: shifu});
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};

export const getAllShifus = async (req: Request, res: Response) => {
    try {
        const shifus: Shifu[] = await findAllShifus();
        if (shifus) {
            return res.status(200).send(shifus);
        }
        res.status(404).send('item not found');
    } catch (e:any) {
        res.status(500).send(e.message);
    }
};

export const getShifu =async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const shifu = await findShifuById(id);
        if(shifu){
            return res.status(200).send(shifu);
        }
        res.status(404).send('user does not exist');
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};

export const updateShifu =async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const existingShifu = await findShifuById(id)

        if(existingShifu){
            const shifu = await updateShifuById(id, req.body);
            return res.status(200).send(shifu);
        }
        res.status(400).send('shifu does not exists');
    } catch (e: any) {
        res.status(500).send(e.message);
    }
};