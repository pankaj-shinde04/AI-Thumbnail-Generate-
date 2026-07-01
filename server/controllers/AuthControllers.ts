import { Request, Response } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

// controllers for user registration
export const registerUser = async (req: Request, res: Response) => {

    try {
        const { name, email, password } = req.body;

        // find user by email
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // setting session
        req.session.isLoggedIn = true;
        req.session.userId = newUser._id;

        return res.status(201).json({
            message: 'User registered successfully',
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            }

        });
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: error.message || 'Server error' });
    }
}

// controllers for user login
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        // setting session
        req.session.isLoggedIn = true;
        req.session.userId = user._id;

        return res.json({
            message: 'User logged in successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,

            }
        })
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: error.message || 'Server error' });
    }
}

// controllers for user logout
export const logoutUser = (req: Request, res : Response) => {
     req.session.destroy((err : any) =>{
          if(err) {
            console.error(err);
            return res.status(500).json({ message: err.message || 'Server error' });  
          }
     });
     return res.status(200).json({ message: 'User logged out successfully' });
}

// controllers for user verification
export const verifyUser = async (req: Request, res: Response) => {
      try {
           const {userId} = req.session;

           const user = await User.findById(userId).select('-password');
              if(!user) {
                return res.status(404).json({ message: 'User not found' });
              }
              return res.json({user});
              
      } catch (error: any) {
        console.error(error);
        return res.status(500).json({ message: error.message || 'Server error' });
      }
}