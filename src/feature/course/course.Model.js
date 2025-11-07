import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId, href:"User"},
    category:{type:mongoose.Schema.Types.ObjectId, href:"Category"}
})