import CourseRepository from "./course.repo.js";

export default class CourseController{
    constructor(){
        this.courseRepo = new CourseRepository();
    }

    async addCourse(req, res){
        let courseData = req.body;
        courseData.instructor = req.userId
        let result = await this.courseRepo.addCourse(courseData);
        if(!result){
            return res.status(400).send("Unable to create course!")
        }
        res.status(201).json("Course created successfully!")
    }

    async getAllCourse(req, res){
        try{
            const {minPrice, maxPrice, category, title} = req.query;
            let filter = {};

            if(minPrice || maxPrice){
                filter.price = {};
                if(minPrice){
                    filter.price.$gte = Number(minPrice);
                }
                if(maxPrice){
                    filter.price.$lte = Number(maxPrice);
                }
            }

            if(title){
                // filter.name = {$regex: title, $options:"i"};
                filter.name = {};

                filter.name.$regex = title;
                filter.name.$options = "i";
            }
            if (category) {
                const categoryArray = category.split(",");
                filter.category = { $in: categoryArray };
            }
            let result = await this.courseRepo.getAllCoruse(filter);
                    if(!result){
                        return res.status(400).send("No course right now")
                    }
                    res.status(201).send(result);

        }catch(error){
            console.log(error)
        }
        
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