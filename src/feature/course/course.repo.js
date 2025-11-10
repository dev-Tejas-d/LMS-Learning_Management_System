import courseSchema from "./course.Model.js";
import mongoose from "mongoose";

let courseModel = mongoose.model("Course", courseSchema);

export default class CourseRepository{

    async addCourse(courseData){
        let newCourse = new courseModel(courseData);
        await newCourse.save();
        return newCourse;
    }

    async getAllCoruse(){
        let result = await courseModel.find();
        return result;
    }

    async getCourse(courseId){
        let course = await courseModel.findById(courseId);
        return course;
    }

    async deleteCourse(id){
        let course = await courseModel.findByIdAndDelete(id)
        return course;
    }
}