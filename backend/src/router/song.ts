import  express  from "express";
const router=express.Router();
import { addSong , getSong} from "../controller/song";
//@ts-ignore
router.post("/addsong",addSong);
router.get('/all', getSong);
export default router;