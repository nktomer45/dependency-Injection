import { autoInjectable } from "tsyringe";
import BaseController from "./base";
import UserService from "../service/user";

@autoInjectable()
export default class UserController extends BaseController{

    constructor(service?: UserService){
        super(service)
    }
}