import userSchema from "./user.model.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

let userModel = mongoose.model("User", userSchema);

export default class UserRepository{
    async registration(userData){
        try{
            let {email} = userData;
            let alreadyExist = await userModel.findOne({email});
            if(alreadyExist){
                return "User Already Exist!";
            }
            let newUser = new userModel(userData);
            await newUser.save();
            return "User created succesfully";
        }
        catch(error){
            console.log(error);
        }
    }

    async login(userCred){
        try{
            let {email, password} = userCred;
            let user = await userModel.findOne({email});
            if(!user){
                return {result:false, message:"User does not exist with this email please register"};
            }
            let checkPass = await bcrypt.compare(password, user.password);
            if(!checkPass){
                return {result:false, message:"Please enter valid password"};
            }
            return {result:user};
        }
        catch(error){
            console.log(error)
        }
    }
}