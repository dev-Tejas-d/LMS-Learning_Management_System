import express from "express";
import CategoryController from "./category.controller.js";
import jwtAuth from "../../middleware/jwtAuth.middleware.js";
import adminAuth from "../../middleware/adminAuth.middleware.js";

let categoryRouter = express.Router();
let categoryController = new CategoryController();

categoryRouter.post("/addCategory", jwtAuth, adminAuth, (req, res)=>{
    categoryController.addCategory(req, res);
})

categoryRouter.get("/getCategory", (req, res)=>{
    categoryController.getCategory(req, res);
})

export default categoryRouter;