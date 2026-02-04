import userSchema from "./user.model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import AppError from "../../utils/AppError.js";

let userModel = mongoose.model("User", userSchema);

export default class UserRepository{
    async registration(userData){

        let {email} = userData;
        let alreadyExist = await userModel.findOne({email});
        if(alreadyExist){
            throw new AppError("User Already Exist!", 409);
        }
        let newUser = new userModel(userData);
        await newUser.save();
        return "User created succesfully";
    }

    async login(userCred){
            let {email, password} = userCred;
            let user = await userModel.findOne({email});
            if(!user){
                throw new AppError("User does not exist with this email, please register", 404);
            }
            let checkPass = await bcrypt.compare(password, user.password);
            if(!checkPass){
                throw new AppError("Please enter a valid password", 401);
            }
            return user;
    }
}