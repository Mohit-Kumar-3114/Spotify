import  { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 
import User from '../db/userSchema'; 




const signup = async function(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ email, password: hashedPassword });
        await user.save(); 
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};




const signin= async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during signin:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};



export {signin,signup}