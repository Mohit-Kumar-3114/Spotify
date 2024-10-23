import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import songRouter from "./router/song"
import userRouter from "./router/user"
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
app.use("/api/user",userRouter)
app.use("api/song",songRouter)
app.listen(3000)



