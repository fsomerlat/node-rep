import { NextFunction, Response } from "express";
import { GeneralError } from "../error/general.error";
import { User } from "../models/user.models";
import UserRepositorie from "../repositories/user.repositories";

export class UserService extends UserRepositorie {

    constructor(){
        super();
    }
    
    protected async getUsersService(res: Response, next:NextFunction):Promise<any|[]> {
        
        try{
            const users:User[] = await super.getAllUsersRepositorie();
                
            if(users.length <= 0) {
                throw new GeneralError("Nenhum registro encontrado !");
            }
            res.status(200).send(users);
        }catch(error){     
            next(error);    
        }
    }

    async addUserService(body:any, res:Response, next:NextFunction): Promise<any>{

        try {
            const result = await super.addUserRepositorie(body);

            if(result == null){
                throw new GeneralError("Erro ao tentar cadastrar usuário !");
            }
            res.status(200).send({"message":"Usuário cadastrado com sucesso !"});   
        } catch (error) {
            next(error);   
        }
    }

}