import express from "express";
import connectToDB from "./src/config/connectDB.js";
import userRouter from "./src/feature/user/user.routes.js";
import courseRouter from "./src/feature/course/course.routes.js";
import dotenv from "dotenv";

dotenv.config();

let server = express();
server.use(express.json());

server.use("/api/user", userRouter);
server.use("/api/course", courseRouter);



server.listen(3002, ()=>{
    console.log("Server on port 3002");
    connectToDB();
})