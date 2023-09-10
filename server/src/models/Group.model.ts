import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User, Trainings } from "./User.model";
import { Shifu } from "./Shifu.model";



export class Group{
    @prop()
    public _id?: string;

    @prop()
    public groupName!: string;

    @prop({ ref: () =>  'Shifu', type: () => String })
    public shifu!: Ref<Shifu, string>;

    @prop({ ref: () => User, type: () => String })
    public trainees?: Ref<User, string>[];

    @prop({type: () => [Trainings]})
    public trainings?: Trainings[];
};

const GroupModel = getModelForClass(Group);


export default GroupModel;