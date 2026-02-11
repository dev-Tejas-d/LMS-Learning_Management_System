import express from "express"
import UserController from "./user.controller.js"
import jwtAuth from "../../middleware/jwtAuth.middleware.js";

let userRouter = express.Router();
let userController = new UserController();


userRouter.post("/registration", (req, res, next)=>{
    userController.registration(req, res, next);
})

userRouter.post("/login", (req, res, next)=>{
    userController.login(req, res, next);
})

userRouter.get("/getUser",  jwtAuth, (req, res, next)=>{
    userController.getUser(req, res, next);
})

userRouter.post("/updateProfile", jwtAuth, (req, res, next)=>{
    userController.userUpdate(req, res, next);
})
export default userRouter;