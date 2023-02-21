import { injectable } from 'tsyringe'
import UserBaseService from '../repositories/user/UserRepository'
import UserModel from '../repositories/user/model'
import  IUser from '../repositories/user/IUser'

@injectable()
export default class UserService extends UserBaseService<IUser>{
    constructor(model?:UserModel){
        super(model)
    }
}

