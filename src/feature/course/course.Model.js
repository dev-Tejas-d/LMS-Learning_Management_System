import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    tumbnailURL:{type:String, default:"https://img.freepik.com/premium-photo/java-code-laptop-window-it-developers_338925-423.jpg"},
    instructor:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    category:{type:mongoose.Schema.Types.ObjectId, ref:"Category"},

})

export default courseSchema;