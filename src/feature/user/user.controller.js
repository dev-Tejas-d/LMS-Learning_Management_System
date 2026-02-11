import UserRepository from "./user.repo.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default class UserController{
    constructor(){
    this.userRepository = new UserRepository();
    }

    async registration(req, res, next){
        try{
            let userData = req.body;
            let hashedPassword = await bcrypt.hash(userData.password, 12);
            userData.password = hashedPassword;
            let result = await this.userRepository.registration(userData);
            res.status(201).json(result);
        }catch(error){
           next(error);
        }
       
    }

    async login(req, res, next){
        try{
            let userCred = req.body;
            let result = await this.userRepository.login(userCred);
            let token = jwt.sign(
                {
                    userRole:result.role, 
                    userName:result.name, 
                    userId:result._id
                },process.env.JWT_KEY, 
                {
                    expiresIn:"1h"
                }
            )
            return res.status(200).json({token, profilePicture:result.profilePicture});
        }
        catch(error){
            next(error)
        }
    }

    async getUser(req, res, next){
        try{
            let id =  req.userId;
            let result = await this.userRepository.getUser(id);
            return res.status(200).json({user:result});
        }catch(error){
            next(error)
        }
    }

    async userUpdate(req, res, next){
        try{
            let id =  req.userId;
            let data = req.body;

            let result = await this.userRepository.updateUser(id, data);
            return result;
        }catch(error){
            next(error);
        }
    }   
}