import { Router } from "express";
import { container } from 'tsyringe';
import User from "./user";
import Base from "./base"



const userRouter = Router()
const userController = container.resolve(User)
userRouter.get("/", userController.get);
userRouter.post("/", userController.post);

export default userRouter