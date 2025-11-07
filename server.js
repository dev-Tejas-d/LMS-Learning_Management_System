import express from "express";
import connectToDB from "./src/config/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

let server = express();
server.use(express.json());



server.listen(3002, ()=>{
    console.log("Server on port 3002");
    connectToDB();
})