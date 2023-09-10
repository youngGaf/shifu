import ShifuModel, { Shifu } from "../models/Shifu.model";

export const createShifu = async (shifu: Shifu): Promise<Shifu> => {
    const createdShifu = await ShifuModel.create(shifu);
    return createdShifu;
};

export const findShifuById = async (_id: string): Promise<Shifu | null> => {
    const shifu = await ShifuModel.findById(_id);
    return shifu
};

export const findShifuByUsername = async (username: string): Promise<Shifu | null> => {
    const shifu = await ShifuModel.findOne({username});
    return shifu
};

export const findAllShifus = async (): Promise<Shifu[]> => {
    const shifu = await ShifuModel.find();
    return shifu
};

export const updateShifuById = async (_id: string, data: Shifu): Promise<Shifu | null> => {
    const updatedShifu = await ShifuModel.findByIdAndUpdate(_id, data);
    return updatedShifu;
};