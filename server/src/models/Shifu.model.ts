import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { User } from "./User.model";

export class Shifu{
    @prop()
    public _id?: string;
    
    @prop()
    public firstName?: string;

    @prop()
    public lastName?: string;

    @prop({required: true})
    public email!: string;

    @prop({required: true})
    public password!: string;

    @prop({ required: true, type: String, default: "Shifu" })
    public role!: string;

    @prop()
    public avatar?: string;

    @prop({required: true})
    public location!: string;

    @prop()
    public username?: string;

    @prop({ ref: () => 'User', type: () => String })
    public trainees?: Ref<User, string>[];
}

const ShifuModel = getModelForClass(Shifu);

export default ShifuModel;