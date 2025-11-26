import { User } from "../models/user.models";
import DatabaseConfig from "../config/db";

export default class UserRepositorie extends DatabaseConfig{

    constructor(){
        super();
    }

    public async getAllUsersRepositorie():Promise<User[]> {
        
        const sql = `SELECT idUsuario, idGrupo, nome, telefone, email, status, termo
                    FROM usuario`;
        
        const [rows] = await super.prepare(sql, null)

        const users = rows.map( (data) => ({
            ...data
        })) as User[];
    
        return users;
    }

    async addUserRepositorie(data: any): Promise<any|null> {

        try{
            const sql = ` INSERT INTO usuario (idGrupo, nome, telefone, email, status, termo)
            VALUES(${data.idGrupo}, '${data.nome}','${data.telefone}','${data.email}','${data.status}','${data.termo}' )`;
            return await super.prepare(sql);
        }catch(error){
            return null;
        }
    }

}