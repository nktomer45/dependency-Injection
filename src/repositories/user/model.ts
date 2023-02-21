import { injectable, singleton } from "tsyringe";
import * as mongoose from 'mongoose'
import ModelI from "../../interfaces/mode.interface";
import IUser from "./IUser";

@singleton()
@injectable()

export default class UserModel implements ModelI {
    schema: mongoose.Schema<any> = new mongoose.Schema({
        original: {
            required: true,
            type: String
        },
        name: { 
            type: String, 
            required: true 
        },

        email: { 
            type: String, 
            required: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        role: { 
            type: String, 
            required: true 
        },
        work: { 
            type: String, 
            // required: true 
        }
    })

model: mongoose.Model<any, {}>=mongoose.model<IUser>("User",this.schema);    
}

