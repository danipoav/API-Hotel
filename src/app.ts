import express, { Response, Request } from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes'
import protectedRoutes from './routes/protectedRoutes'
import publicRouter from "./routes/publicRoutes";
import connectDB from "./database";

const serverless = require('serverless-http');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

//ts-node src/app.ts

//Restricciones de CORS para que solo permita solicitudes de mi dominio
// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));
app.use(cors({
    origin: 'http://hotel-db.s3-website.eu-west-3.amazonaws.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/assets', express.static('public/assets'))

app.use(express.json());

//Rutas Publicas.
app.use('/api', publicRouter)

//Ruta Autentificación para generar un token.
app.use('/api/auth', authRoutes);

//Rutas Privadas, tener necesariamente un token valido.
app.use('/api', protectedRoutes);

//Ruta raíz para dar la Bienvenida.
app.use('/', (req: Request, res: Response) => {
    res.json({ message: `Bienvenido a al API de Danipoav's Hotel` })
})

export const handler = serverless(app);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
