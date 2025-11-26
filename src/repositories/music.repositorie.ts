import { Music } from '../models/music.models';
import DatabaseConfig from '../config/db';

export default class MusicRepositorie extends DatabaseConfig {

    constructor(){
        super();
    }

    async getAll():Promise<Music[]|null>{

        const sql = `SELECT  idMusica, idGeneroMusical, idUsuario, titulo, descricao, autor, bpm  FROM musica`;
        const [result] = await this.prepare(sql, null);
        
        if(result.length <= 0){
            return null;
        }

        const musics = result.map( (data) => ({
            ...data
        })) as Music[];

        return musics;
    }
}