import DatabaseConfig from '../config/db';
import {Repertorio} from '../models/repertorio.models'

export class RepertorioRepositories extends DatabaseConfig {

  async  getAllRepRepositories(): Promise<Repertorio[]|null> {
        
        const sql = `SELECT idMusica, IdUsuario, dataCadastro, ultimaAtualizacao, situacao, tom
                        FROM  reposiorio`;

        const [rows] = await super.prepare(sql); 

        if(rows.length == 0) {
            return null;
        }else{
            const repertorio = rows.map( (data) => ({
                ...data
            })) as Repertorio[]
            return repertorio;
        }
    }
}