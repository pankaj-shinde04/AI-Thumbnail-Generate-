import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';


await connectDB(); 

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('server is live');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 