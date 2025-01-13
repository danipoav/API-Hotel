import express, { Response, Request } from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes'
import protectedRoutes from './routes/protectedRoutes'
import publicRouter from "./routes/publicRoutes";

const serverless = require('serverless-http')

dotenv.config();

const app = express();

app.use(express.json());

//Rutas Publicas.
app.use('/api', publicRouter)

//Ruta Autentificación para generar un token.
app.use('/api/auth', authRoutes);

//Rutas Privadas, tener necesariamente un token valido.
app.use('/api/protected', protectedRoutes);

//Ruta raíz para dar la Bienvenida.
app.use('/', (req: Request, res: Response) => {
    res.json({ message: `Bienvenido a al API de Danipoav's Hotel` })
})

export const handler = serverless(app);