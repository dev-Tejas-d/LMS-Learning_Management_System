import UserRepository from "./user.repo.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default class UserController{
    constructor(){
    this.userRepository = new UserRepository();
    }

    async registration(req, res){
        try{
            let userData = req.body;
            let hashedPassword = await bcrypt.hash(userData.password, 12);
            userData.password = hashedPassword;
            let result = await this.userRepository.registration(userData);
            if(!result){
                return res.status(400).json({message:"Something went wrong"})
            }
            res.status(201).json({message:result});
        }catch(error){
            console.log(error);
        }
       
    }

    async login(req, res){
        try{
            let userCred = req.body;
            let result = await this.userRepository.login(userCred);
            if(!result.result){
                return res.status(404).send(`${result.message}`);
            }
            let token = jwt.sign({userRole:result.result.role, userName:result.result.name, userId:result.result._id},process.env.JWT_KEY, {expiresIn:"1h"})
            return res.status(200).json({Token: token});
        }
        catch(error){
            console.log(error);
        }
    }
}