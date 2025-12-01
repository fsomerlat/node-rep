import DatabaseConfig from '../config/db';
import {Repertorio} from '../models/repertorio.models'

export class RepertorioRepositories extends DatabaseConfig {

  constructor(){
      super();
  } 

  async getAllRepRepositories(): Promise<Repertorio[]|null> {
        
    
       const sql = `SELECT   idMusica, IdUsuario, dataCadastro, ultimaAtualizacao, situacao, tom
                        FROM repertorio`;

        const [rows] = await super.prepare(sql); 
    
        const repertorio = rows.map( (data) => ({
            ...data
        })) as Repertorio[]
        return repertorio;    
    }
}