import express from "express";
import jwt from "jsonwebtoken";

let jwtAuth = async(req, res, next)=>{
    let token = req.headers.authorization;
    if(!token){
        return res.status(400).send("Unauthorised!!!!");
    }

    let result = jwt.verify(token, process.env.JWT_KEY);
    if(!result){
        return res.status(400).send("Wrong auth token!!!!");
    }
    req.userId = result._id;
    next();
}

export default jwtAuth;