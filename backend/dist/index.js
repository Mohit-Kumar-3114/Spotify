"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(process.env.DATABASE_URL || "")
    .then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log(`error is ${e}`);
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
const user_1 = __importDefault(require("./router/user"));
app.use('/api/users', user_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
