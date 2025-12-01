import { RepertorioService } from "../service/repertorio.service";
import { Request, Response,NextFunction } from "express";

export class RepertorioController extends RepertorioService {

    constructor(){     
        super();
    }

    async getAllRepertorio(req: Request, res: Response, next: NextFunction):Promise<any> {
        await super.getAllRepertorioService(req, res, next);
    }
}