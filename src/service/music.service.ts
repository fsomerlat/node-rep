import MusicRepositorie from "../repositories/music.repositorie"; 
import { Music } from "../models/music.models";

export class MusicService extends MusicRepositorie{

    constructor(){
       super();
    }

    /**
     * Com "any", é possível reescrever o nome do índice array no retorno -> map
     * Com type "Music[]",deve conter exatamente os nomes dos campos como schema obrigatoriamente
    */
    async getAllMusicService(): Promise<Music[]> {

        const result = await super.getAll();
        return result;
    }

    async addMusicService(data: any): Promise<void> {
        await super.add(data);
    }
    
    async updateMusicService(data: Music, id:number): Promise<void|any> {

        const result = await super.update(data, id);
        return result;        
    }

    async deleteMusicService(id: Number): Promise<void>{
        await super.delete(id);
    }
}