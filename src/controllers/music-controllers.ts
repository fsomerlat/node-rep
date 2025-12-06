import {Request, Response, NextFunction } from "express";
import { MusicService }  from "../service/music.service";
import { Music } from "../models/music.models";

export class MusicController {

    private musicService;

    constructor(){
        this.musicService = new MusicService();
        /**
         * O this perde a referência quando resgistra rota no express, necessário bindar os métodos
        */
        this.getAllMusic = this.getAllMusic.bind(this); 
        this.addMusic = this.addMusic.bind(this);
        this.updateMusic = this.updateMusic.bind(this);
        this.deteleMusic = this.deteleMusic.bind(this);
    }

    public async getAllMusic(req:Request, res:Response, next: NextFunction):Promise<any> {
       const result =  await this.musicService.getAllMusicService();
       res.status(200).send(result);   
    }

    async addMusic(req: Request, res: Response, next: NextFunction) {
        
        const data =  req.body as Music; 
        await this.musicService.addMusicService(data);
        
        res.status(200).send({"message" : "Música cadastrada com sucesso !"});
    }

    async updateMusic(req: Request, res: Response, next: NextFunction){

        try {
            const data = {
                id: Number(req.params.id), 
                body: req.body as Music 
            };
            await this.musicService.updateMusicService(data.body, data.id);
            res.status(200).send({"message" : "Registro atualizado com sucesso !"});
        }catch(error){
            next(error);
        }
    }

    async deteleMusic(req: Request, res: Response, next: NextFunction){

        try{
            const id = Number(req.params.id);
            await this.musicService.deleteMusicService(id);
            res.status(200).send({"message" : "Registro excluído com sucesso !"});
        }catch(error){
            next(error);
        }
    }

    async getMusic(req: Request, res: Response, next:NextFunction) {

        try{
            const id = Number(req.params.id);
            await this.musicService.getById(id);
        }catch(error){
            next(error);
        }
    }

}