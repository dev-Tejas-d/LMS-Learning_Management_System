import express from "express";
import connectToDB from "./src/config/connectDB.js";
import userRouter from "./src/feature/user/user.routes.js";
import courseRouter from "./src/feature/course/course.routes.js";
import dotenv from "dotenv";
dotenv.config();
import categoryRouter from "./src/feature/category/category.routes.js";
import paymentRouter from "./src/feature/payment/payment.routes.js";
import cors from "cors"
import errorHandler from "./src/middleware/errorHandler.js";

let server = express();


// server.use(cors({
//   origin: "https://lms-frontend-psi-indol.vercel.app",
//   credentials: true
// }));

server.use(cors());
server.use(express.json());

server.use("/api/user", userRouter);
server.use("/api/course", courseRouter);
server.use("/api/category", categoryRouter);
server.use("/api/payment", paymentRouter);


server.use(errorHandler);

server.listen(process.env.PORT, ()=>{
    console.log("Server on port 3002");
    connectToDB();
})