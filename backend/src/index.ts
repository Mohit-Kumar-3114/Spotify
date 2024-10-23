import express from "express";
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
import userRoutes from "./router/user";
import songRouter from "./router/song"
app.use('/api/users', userRoutes); 


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})