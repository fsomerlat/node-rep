import {RepertorioRepositories} from '../repositories/repertorio.repositories'
import { GeneralError } from '../error/general.error';

export class RepertorioService extends RepertorioRepositories {

    async getAllReperorioService():Promise<any> {
        try{
            const rows = await super.getAllRepRepositories();
            return rows;
        }catch(error) {
            throw new GeneralError("Nenhum registro encontrado !");
        }
    }
}