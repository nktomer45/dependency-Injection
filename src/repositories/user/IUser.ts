import * as mongoose from 'mongoose';


export interface UserI {
    original:string
    name:string
    email:string
    password:string
    role:string
    work:string
}

export default interface IUser extends UserI, mongoose.Document{}