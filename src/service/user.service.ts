import { Response } from "express";
import { GeneralError } from "../error/general.error";
import { User } from "../models/user.models";
import UserRepositorie from "../repositories/user.repositories";

export class UserService extends UserRepositorie {

    constructor(){
        super();
    }
    
    protected async getUsersService(res: Response):Promise<any> {
        
       const users:User[] = await super.getAllUsersRepositorie();
        
       if(users.length <= 0) {
           throw new GeneralError("Nenhum registro encontrado !");
       }
       res.status(200).send(users);
    }

    async addUserService(body:any, res:Response): Promise<any>{
        const result = await super.addUserRepositorie(body);
        if(result == null){
           throw new GeneralError("Erro ao tentar cadastrar usuário !");
        }
        res.status(200).send({"message":"Usuário cadastrado com sucesso !"});
    }

}