import express from "express"
import UserController from "./user.controller.js"

let userRouter = express.Router();
let userController = new UserController();


userRouter.post("/registration", (req, res, next)=>{
    userController.registration(req, res, next);
})

userRouter.post("/login", (req, res, next)=>{
    userController.login(req, res, next);
})

export default userRouter;