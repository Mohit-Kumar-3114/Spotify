import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    videoLinks: [{
      url: { type: String, required: true },
      videoId: { type: String, default: uuidv4, unique: true},
      title: { type: String },
      addedAt: { type: Date, default: Date.now } 
    }],
    createdAt: { type: Date, default: Date.now }
  });

  const User = mongoose.model('User', userSchema);

  export default User;
  