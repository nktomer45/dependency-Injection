import * as  mongoose  from "mongoose";
import { injectable } from "tsyringe";
import ModelI from "../../interfaces/mode.interface";

@injectable()
export default class UserService<T>{
    model:mongoose.Model<any,any>
    constructor(model:ModelI){
        this.model=model.model
    }
    create =async(data:T)=>{
        const resource=await this.model.create(data)
            return resource
    }
    get =async (filter?:{}):Promise<T[]>=>{
        return  await this.model.find(filter)
    }
}