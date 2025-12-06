import { Music } from '../models/music.models';
import DatabaseConfig from '../config/db';
import { GeneralError } from '../error/general.error';

export default class MusicRepositorie extends DatabaseConfig {

    constructor(){

        super();
        /**
         * O this perde a referência quando resgistra rota no express, necessário bindar os métodos
        */        
        this.getById = this.getById.bind(this);
    }

    async getAll():Promise<Music[]|any>{
        
        const sql = `SELECT  idMusica, idGeneroMusical, idUsuario, titulo, descricao, autor, bpm  
                     FROM musica`;
        const [result] = await super.prepare(sql, null);
        
        if(result.length == 0){ 
           throw new GeneralError("Registro não encontrado !");
        }

        const musics = result.map( (data) => ({
            ...data
        })) as Music[];

        return musics;
    }

    async add(data:any) {
        const sql = `INSERT INTO musica (idGeneroMusical, idUsuario, titulo, descricao, autor, bpm)
                   VALUES (${data.idGeneroMusical}, ${data.idUsuario}, '${data.titulo}','${data.descricao}','${data.autor}', ${data.bpm})`;

        await super.prepare(sql) 
    }

    async update(data: Music, id:number): Promise<void|null> {

        const result = await this.getById(id); 

        if(result?.length == 0) {
            throw new GeneralError("Registro não encontrado !");
        }

        const sql =`UPDATE musica SET 
            idGeneroMusical = ?, titulo = ? , descricao = ?, autor = ?, bpm = ?
            WHERE idMusica = ?`;
        
        await super.prepare(sql, [
            data.idGeneroMusical,
            data.titulo,
            data.descricao,
            data.autor,
            data.bpm,
            id
        ]);  
    } 
    
    async delete(id: Number):Promise<void> {

        const musicId = await this.getById(id);

        if(musicId.length == 0){
            throw new GeneralError("Registro não encontrado !");
        }

        const sql= `DELETE FROM musica WHERE idMusica = ?`;
        await super.prepare(sql, [id]);
    }   

    async getById(id: Number):Promise<Music[]|any>{

        const sql  = `SELECT idMusica, idGeneroMusical, idUsuario, titulo, descricao, autor, bpm
                    FROM musica 
                    WHERE idMusica = ?`;

        const [rows] = await super.prepare(sql, [id]);

        return rows as Music[];
    }  

}