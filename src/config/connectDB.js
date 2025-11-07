import mongoose from "mongoose";

let connectToDB = async()=>{
    
    await mongoose.connect(`${process.env.DB_URL}`);
    console.log("database is connected");
}

export default connectToDB;