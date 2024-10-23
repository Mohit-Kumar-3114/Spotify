import mongoose, { Document, Schema } from "mongoose";


interface IUser extends Document {
  email: string;
  password: string;
  createdAt: Date;
  videoLinks: mongoose.Types.ObjectId[]; 
}


const userSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  videoLinks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VideoLink' }], 
});


const User = mongoose.model<IUser>('User', userSchema);
export default User