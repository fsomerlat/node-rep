import mysql, { Pool, RowDataPacket } from 'mysql2/promise';
import { GeneralError } from '../error/general.error';

/**
 * Padrão - Singleton - Não é possível criar uma outra instância fora
 * Não é possível -> ex: new DatabaseConfig()
 * 
*/
export default class DatabaseConfig {

    /**
     * Deve ser static para esse contexto
    */
    private static instance: DatabaseConfig; 
    private  env;

    constructor(){
        this.env = process.env;
    }

    /**
     * Função que controla o Singleton - Retorna sempre uma única instância
     * O método DEVE ser 'static' nesse padrão
     */
    static getInstance() {

        if(!DatabaseConfig.instance){
            this.instance = new DatabaseConfig();
        }
        return this.instance;
    }

   protected _db():Pool {
        
        try{
            const conn = mysql.createPool({
                "host": this.env.DB_HOST, 
                "user": this.env.DB_USER,
                "password": this.env.DB_PASS,
                "database": this.env.DB_DATABASE
            })
            return conn; 
        }catch(error){
            throw new GeneralError("Erro de conexação com a base de dados : Erro ->" + error);
        }
    }
    /**
     * RowDataPacket - O mysql2 retorna esse tipo de objeto, por isso usar 'RowDataPacket[]'
    */
    protected async prepare<T extends RowDataPacket[]>(sql: string, param?: any|null|[]):Promise<[T, any]> {
        try{
            var db = DatabaseConfig.getInstance()._db();
            return db.query<T>(sql, param);
        }catch(error){
            throw new GeneralError("DatabaseError: Erro ao preparar a queryString (prepare): Error ->" + error);
        }
    }

}


