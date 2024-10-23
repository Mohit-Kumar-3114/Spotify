import mongoose, { Document, Schema } from "mongoose";


interface IVideoLink extends Document {
  url: string;
  title: string; 
  addedAt: Date;
  user: mongoose.Types.ObjectId; 
}


const videoLinkSchema = new Schema<IVideoLink>({
  url: { type: String, required: true },
  title: { type: String, required: true },
  addedAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } 
});


const Song = mongoose.model<IVideoLink>('VideoLink', videoLinkSchema);

export default Song;
