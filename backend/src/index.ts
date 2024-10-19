import express, {Request, Response} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DATABASE_URL||"")
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((e)=>{
    console.log(`error is ${e}`)
})

const app = express();
app.use(express.json())




app.get("/",(req:Request,res:Response)=>{
    res.status(200).json("Hello World")
})




app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})