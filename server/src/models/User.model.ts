import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Shifu } from './Shifu.model';
import { Group } from './Group.model';

export enum Roles {
    Tr = 'Trainee',
    Sh = 'Shifu',
    Ad = 'Admin'
}

export class Trainings{
    @prop()
    kicks?: string;

    @prop()
    runs?: number;

    @prop()
    stance?: string;
}

export class User{
    @prop()
    public _id?: string;

    @prop()
    public firstName?: string;

    @prop()
    public lastName?: string;

    @prop({required: true})
    public email!: string;

    @prop({ required: true, type: String, default: 'Trainee', enum: Roles })
    public role!: Roles[];

    @prop()
    public avatar?: string;

    @prop({required: true})
    public location!: string;

    @prop({required: true})
    public password!: string;

    @prop({type: () => [Trainings]})
    public trainings?: Trainings[];

    @prop()
    public username?: string

    @prop({ ref: () =>  'Shifu', type: () => String })
    public shifu?: Ref<Shifu, string>;

    @prop({ ref: () => 'Group', type: () => String})
    public group?: Ref<Group, string>[];

}

const UserModel = getModelForClass(User);

export default UserModel;

