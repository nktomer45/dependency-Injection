import { Request, Response, NextFunction } from "express";
import { autoInjectable, injectable } from "tsyringe";
import BaseService from "../repositories/user/UserRepository";

@autoInjectable()
export default class BaseController {
   private baseService: BaseService<any>
   
   public constructor(service: BaseService<any>) {
        this.baseService = service;
    }

    post = async (req: Request, res: Response, next: NextFunction) => {
        const resource = await this.baseService.create(req.body)
        res.send(resource)
    }

    get = async (req: Request, res: Response) => {
        const resource = await this.baseService.get()
        res.send(resource)
    }
}