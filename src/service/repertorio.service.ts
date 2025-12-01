import { Request, Response, NextFunction } from 'express';
import { RepertorioRepositories} from '../repositories/repertorio.repositories'
import { GeneralError }  from '../error/general.error';
//import { InternaServerError } from '../error/internar.server.error';

export class RepertorioService extends RepertorioRepositories {

    constructor(){
        super();
    }

    async getAllRepertorioService(req:Request, res: Response, next:NextFunction):Promise<any> {
            
        try{ 
            const rows = await super.getAllRepRepositories();
            
            if(rows?.length == 0){  
                throw new GeneralError("Nenhum registro encontrado ! ");
            }
          
            res.status(200).send(rows);

        }catch(error){
            next(error);
        }   
    }
}