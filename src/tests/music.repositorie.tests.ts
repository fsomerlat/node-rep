import express from 'express'
import dotenv from "dotenv";
dotenv.config();

import { MusicRepositorie } from "../repositories/music.repositorie";
import { BaseError } from '../error/base.error';

(async() => {
    const app = express();
    const musics = await new MusicRepositorie();
    const rows = await musics.getAll();

    const executeTests = ( (app: express.Express) => {
        app.use((error: Error) => {
            if(error  instanceof BaseError){
                console.log(error.message);
            }else{
                console.log(`A quantidade de músicas cadastradas é de : ${rows.length} músicas !`)
            }
        }) 
    })

    executeTests(app);
})();