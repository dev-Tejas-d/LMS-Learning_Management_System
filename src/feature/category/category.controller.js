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

    async getCategory(req, res) {
        try {
            const result = await this.categoryRepo.getCategory();
            return res.status(200).json(Array.isArray(result) ? result : []);
        } catch (error) {
            console.error(error);
            return res.status(500).json([]);
        }
    }

}