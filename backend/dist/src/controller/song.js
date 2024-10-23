"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSong = void 0;
const songSchema_1 = __importDefault(require("../db/songSchema"));
const userSchema_1 = __importDefault(require("../db/userSchema"));
const addSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { url, title, userId } = req.body;
    if (!url || !title || !userId) {
        return res.status(400).json({ message: 'URL, title, and user ID are required.' });
    }
    try {
        const user = yield userSchema_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        const newVideoLink = new songSchema_1.default({
            url,
            title,
            user: user._id
        });
        yield newVideoLink.save();
        res.status(201).json({ message: 'Video link added successfully!' });
    }
    catch (error) {
        console.error('Error during video link creation:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});
exports.addSong = addSong;
