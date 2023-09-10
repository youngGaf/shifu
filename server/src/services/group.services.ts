import GroupModel, { Group } from "../models/Group.model";


export const createGroup = async (group: Group): Promise<Group> => {
    const createdGroup = await GroupModel.create(group);
    return createdGroup;
};

export const findGroupById = async (_id: string): Promise<Group | null> => {
    const group = await GroupModel.findById(_id);
    return group
};

export const findGroupByName = async (groupName: string): Promise<Group | null> => {
    const group = await GroupModel.findOne({groupName});
    return group
};

export const findAllGroups = async (): Promise<Group[]> => {
    const group = await GroupModel.find();
    return group
};

export const updateGroupById = async (_id: string, data: Group): Promise<Group | null> => {
    const updatedGroup = await GroupModel.findByIdAndUpdate(_id, data);
    return updatedGroup;
};