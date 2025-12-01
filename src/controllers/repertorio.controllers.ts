import { RepertorioService } from "../service/repertorio.service";

export class RepertorioController extends RepertorioService {

    async getAllRepertorio():Promise<any> {
       return  await super.getAllReperorioService();
    }
}