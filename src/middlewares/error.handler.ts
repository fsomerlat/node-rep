import express, {Request, Response, NextFunction } from 'express';
import { ValdationError } from '../error/validation.error';
import { GeneralError } from '../error/general.error';
import { InternaServerError } from '../error/internar.server.error';
import { NotFoundError } from '../error/not.found';
import { errors } from 'celebrate';


const errorHandler = (app: express.Express) => {
    app.use(errors());/* Tratar erros de validação definido por schema */
    app.use( (error:Error, req: Request, res: Response, next: NextFunction) => {    
        //console.log(error);
        if(error instanceof ValdationError) {
            error.send(res);
        }else if(error instanceof GeneralError ){
            error.send(res);
        }else if(error instanceof NotFoundError) {
            error.send(res);
        }
        else{
            new InternaServerError("Erro interno no servidor ! Error:" + error).send(res);
        }
    })
}

export {errorHandler};