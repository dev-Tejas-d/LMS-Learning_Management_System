import express from "express";
import CourseController from "./course.controller.js";

let courseRouter = express.Router();
let courseController = new CourseController();

courseRouter.post("/addCourse", (req, res)=>{
    courseController.addCourse(req, res);
})

courseRouter.get("/getAllCourse", (req, res)=>{
    courseController.getAllCourse(req, res);
})

courseRouter.get("/:id", (req,res)=>{
    courseController.getCourse(req, res);
})

courseRouter.delete("/:id", (req, res)=>{
    courseController.deleteCourse(req, res)
})


export default courseRouter;