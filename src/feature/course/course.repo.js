import courseSchema from "./course.Model.js";
import mongoose from "mongoose";

let courseModel = mongoose.model("Course", courseSchema);

export default class CourseRepository{

    async addCourse(courseData){
        let newCourse = new courseModel(courseData);
        await newCourse.save();
        return newCourse;
    }

    async getAllCoruse(filter){
        try{
            let result = await courseModel.find(filter).populate({
                path:"instructor",
                select:"_id name email"}).populate({
                    path:"category",
                    select:"name"
                });
            return result;
        }catch(error){
            console.log(error);
        }
        
    }

    async getCourse(courseId){
        let course = await courseModel.findById(courseId).populate({
            path:"instructor",
            select:"_id name email"
        }).populate({
            path:"category",
            select:"name"
        });;
        return course;
    }

    async deleteCourse(id){
        let course = await courseModel.findByIdAndDelete(id)
        return course;
    }
}