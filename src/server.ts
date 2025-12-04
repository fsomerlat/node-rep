import dotenv from "dotenv";
import cors from "cors";

import express from 'express';
import { routes } from './routes';
import { errorHandler } from './middlewares/error.handler'
import { pageNotFound } from './middlewares/page.not.found';

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

routes(app);
pageNotFound(app);
errorHandler(app);

app.use('/', (req, res) => {
    res.status(200).send({"message":"API repertório !"});
})

app.listen(port,()  =>{
    console.log(`Servidor rodando na porta ${port}`);
})