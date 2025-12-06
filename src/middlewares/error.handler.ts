import express, {Request, Response, NextFunction } from 'express';
import { InternaServerError } from '../error/internar.server.error';
import { errors } from 'celebrate';
import { BaseError } from '../error/base.error';


const errorHandler = (app: express.Express) => {
    app.use(errors());/* Tratar erros de validação definido por schema */
    app.use( (error:Error, req: Request, res: Response, next: NextFunction) => {    
        //console.log(error);
        if(error instanceof BaseError) {
            error.send(res);
        }else{
            new InternaServerError("Erro interno no servidor ! Error:" + error).send(res);
        }
    })
}

export {errorHandler};