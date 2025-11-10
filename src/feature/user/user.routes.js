import express from "express"
import UserController from "./user.controller.js"

let userRouter = express.Router();
let userController = new UserController();


userRouter.post("/registration", (req, res)=>{
    userController.registration(req, res);
})

userRouter.post("/login", (req, res)=>{
    userController.login(req, res);
})

export default userRouter;