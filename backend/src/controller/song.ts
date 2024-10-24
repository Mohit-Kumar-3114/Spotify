import { Request, Response } from 'express';
import Song from '../db/songSchema'; 
import User from '../db/userSchema'; 

export const addSong = async (req: Request, res: Response) => {
    const { url, title, userId } = req.body;
    if (!url || !title || !userId) {
        return res.status(400).json({ message: 'URL, title, and user ID are required.' });
    }

    try {

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        const newVideoLink = new Song({
            url,
            title,
            user: user._id 
        });


        await newVideoLink.save();

        res.status(201).json({ message: 'Video link added successfully!' });
    } catch (error) {
        console.error('Error during video link creation:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};



export const getSong = async (req: Request, res: Response) => {
    try {
        const songs = await Song.find(); 
        res.status(200).json({songs:songs}); 
    } catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};