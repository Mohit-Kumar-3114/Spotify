import express from 'express';
import { signin, signup } from "../controller/user";

const router = express.Router();
//@ts-ignore
router.post("/signin", signin);
//@ts-ignore
router.post("/signup", signup);

export default router; 
