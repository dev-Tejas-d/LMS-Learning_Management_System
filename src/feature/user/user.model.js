import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    age:{type:Number, default:null },
    gender:{type:String, default:null},
    profilePicture:{type:String, default:"https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-default-avatar-profile-icon-vector-png-image_16213769.png"},
    phoneNumber:{type:Number, default:null},
    role:{type:String, enum:["student", "teacher", "admin"], default:"student"}
})

export default userSchema;