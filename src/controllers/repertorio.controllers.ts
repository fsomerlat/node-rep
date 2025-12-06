import { RepertorioService } from "../service/repertorio.service";
import { Request, Response,NextFunction } from "express";

export class RepertorioController {

    private repService;

    constructor(){
        this.repService = new RepertorioService();
    }

    async getAllRepertorio(req: Request, res: Response, next: NextFunction):Promise<any> {
        await this.repService.getAllRepertorioService(req, res, next);
    }
}