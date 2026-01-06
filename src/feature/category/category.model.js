import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{type:String, unique:true},
    userId:{type:mongoose.Schema.ObjectId, ref:"User"}
})

export default categorySchema;