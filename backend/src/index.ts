import express, {Request, Response} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "../Routes/auth";

dotenv.config(); 


mongoose.connect(process.env.DATABASE_URL || "")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.log(`Error connecting to MongoDB: ${e}`);
    });

const app = express();
app.use(express.json())




app.get("/",(req:Request,res:Response)=>{
    res.status(200).json("Hello World")
})



