"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const song_1 = require("../controller/song");
//@ts-ignore
router.post("/addsong", song_1.addSong);
router.get('/all', song_1.getSong);
exports.default = router;
