import categorySchema from "./category.model.js";
import mongoose from "mongoose";

let categoryModel = mongoose.model("Category",categorySchema)

export default class CategoryRepository{
    async addCategory(categoryDetail){
        let newCategory = new categoryModel(categoryDetail);
        await newCategory.save();
        return newCategory;
    }

    async getCategory(){
        let allCategory = await categoryModel.find();
        return allCategory;
    }
}