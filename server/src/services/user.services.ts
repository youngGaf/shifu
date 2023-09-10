import UserModel, { User } from "../models/User.model";


export const createUser = async (user: User): Promise<User> => {
    const createdUser = await UserModel.create(user);
    return createdUser;
};

export const findUserById = async (_id: string): Promise<User | null> => {
    const user = await UserModel.findById(_id);
    return user
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
    const user = await UserModel.findOne({username});
    return user
};

export const findAllUsers = async (): Promise<User[]> => {
    const users = await UserModel.find();
    return users
};

export const updateUserById = async (_id: string, data: User): Promise<User | null> => {
    const updatedUser = await UserModel.findByIdAndUpdate(_id, data);
    return updatedUser;
};
