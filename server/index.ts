import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import AuthRouter from './routes/authroute.js';

declare module 'express-session' {
    interface SessionData {
        isLoggedIn: boolean;
        userId: string;
    }
}

await connectDB(); 

const app = express();

const port = process.env.PORT || 8000;

app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:8000'],
    credentials: true,
}));

app.use(session ({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie:{maxAge: 1000 * 60 * 60 *  24 * 7}, // 7 days
    store :MongoStore.create({
        mongoUrl: process.env.MONGODB_URI as string,
        collectionName: 'sessions',
    })
}))
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('server is live');
});

app.use('/api/auth', AuthRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 