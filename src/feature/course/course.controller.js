import CourseRepository from "./course.repo.js";

export default class CourseController{
    constructor(){
        this.courseRepo = new CourseRepository();
    }

    async addCourse(req, res){
        let courseData = req.body;
        let result = await this.courseRepo.addCourse(courseData);
        if(!result){
            return res.status(400).send("Unable to create course!")
        }
        res.status(201).json("Course created successfully!")
    }

    async getAllCourse(req, res){
        let result = await this.courseRepo.getAllCoruse();
         if(!result){
            return res.status(400).send("No course right now")
        }
        res.status(201).send(result);
    }

    async getCourse(req, res){
        let id = req.params.id;
        let result = await this.courseRepo.getCourse(id);
        if(!result){
            return res.status(400).send("Course not found");
        }
        res.status(201).send(result);
    }

    async deleteCourse(req, res){
        let id = req.params.id;
        let result = await this.courseRepo.deleteCourse(id);
        if(!result){
            return res.status(400).send("Course not found");
        }
        res.status(201).send("Course deleted!");
    }
}