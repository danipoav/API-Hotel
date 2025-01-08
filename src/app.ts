import express, { Response, Request } from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes'
import protectedRoutes from './routes/protectedRoutes'

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})