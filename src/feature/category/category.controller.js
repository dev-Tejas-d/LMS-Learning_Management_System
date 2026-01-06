import CategoryRepository from "./category.repo.js";

export default class CategoryController{
    constructor(){
        this.categoryRepo = new CategoryRepository();
    }

    async addCategory(req, res){
        try{
            let categoryDetail = req.body;
            let result = await this.categoryRepo.addCategory(categoryDetail);
            if(!result){
                return res.status(400).send("Unable to create ctegory")
            }
            return res.status(201).send(result);
        }
        catch(error){
            console.log(error)
        }
    }

    async getCategory(req, res){
        try{
            let result = await this.categoryRepo.getCategory();
            if(!result){
                return res.status(400).send("No category")
            }

            return res.status(200).send(result);
        }
        catch(error){
            console.log(error);
        }
    }
}