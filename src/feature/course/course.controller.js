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

    async getAllCourse(req, res) {
  try {
    const { minPrice, maxPrice, category, title } = req.query;
    let filter = {};

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }


    if (typeof title === "string" && title.trim() !== "") {
      filter.name = {
        $regex: title.trim(),
        $options: "i"
      };
    }

    if (typeof category === "string" && category.trim() !== "") {
      filter.category = { $in: category.split(",") };
    }

    const result = await this.courseRepo.getAllCoruse(filter);

    return res.status(200).json(Array.isArray(result) ? result : []);

  } catch (error) {
    console.error(error);
    return res.status(500).json([]);
  }
}


async getCourse(req, res) {
    try {
        const id = req.params.id;
        const result = await this.courseRepo.getCourse(id);

        if (!result) {
        return res.status(404).json({});
        }

        return res.status(200).json(result);

    } catch (error) {
        console.error(error);
        return res.status(500).json(null);
    }
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