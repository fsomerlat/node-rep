import MusicRepositorie from "../repositories/music.repositorie"; 
import { Music } from "../models/music.models";
import { NotFoundError } from "../error/not.found";
//import DatabaseConfig from "../config/db";

export class MusicService extends MusicRepositorie{

    constructor(){
       super();
    }

    /**
     * Com "any", é possível reescrever o nome do índice array no retorno -> map
     * Com type "Music[]",deve conter exatamente os nomes dos campos como schema obrigatoriamente
    */
    async getAll(): Promise<Music[]> {

        const result = await super.getAll();
    
        if(result == null) {
             throw new NotFoundError("Nenhum registro encontrado !");
        }
        return result;
    }

    async addMusic(data: any): Promise<void> {

        const sql = `INSERT INTO musica (idGeneroMusical, idUsuario, titulo, descricao, autor, bpm)
                   VALUES (${data.idGeneroMusical}, ${data.idUsuario}, '${data.titulo}','${data.descricao}','${data.autor}', ${data.bpm})`;
        
        await this.prepare(sql, null);
    }
    
    async update(data: Music, id:number): Promise<void> {

        const _sql = `SELECT idMusica FROM musica WHERE idMusica = ?`;

        const [rows] = await this.prepare(_sql, [id]);

        if(rows.length > 0) {
            const sql =`UPDATE musica SET 
                        idGeneroMusical = ?, titulo = ? , descricao = ?, autor = ?, bpm = ?
                        WHERE idMusica = ?`;
            
            await this.prepare(sql, [
                data.idGeneroMusical,
                data.titulo,
                data.descricao,
                data.autor,
                data.bpm,
                id
            ]);
        }else{
            throw new NotFoundError("Registro não encontrado !");
        }
    }
}