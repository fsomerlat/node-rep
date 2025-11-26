import {Request, Response, NextFunction } from "express";
import { MusicService } from "../service/music.service";
import { Music } from "../models/music.models";

export class MusicController {

    static async getAllMusic(req:Request, res:Response, next: NextFunction) {

        const result = await new MusicService().getAll();
        res.status(200).send(result);   
    }

    static async addMusic(req: Request, res: Response, next: NextFunction) {
        
        const data =  req.body as Music; 
        await new MusicService().addMusic(data);
        
        res.status(200).send({"message" : "Música cadastrada com sucesso !"});
    }

    static async updateMusic(req: Request, res: Response, next: NextFunction){

        const data = {
            id: Number(req.params.id), 
            body: req.body as Music 
        };

        await new MusicService().update(data.body, data.id);
        res.status(200).send({"message" : "Registro atualizado com sucesso !"});
    }

}