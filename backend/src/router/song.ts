import  express  from "express";
const router=express.Router();
import { addSong } from "../controller/song";
//@ts-ignore
router.post("/addSong",addSong);
export default router;