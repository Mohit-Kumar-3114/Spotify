"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("../Routes/auth"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DATABASE_URL || "")
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((e) => {
    console.log(`Error connecting to MongoDB: ${e}`);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json("Hello World");
});
app.use("/api/auth", auth_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
