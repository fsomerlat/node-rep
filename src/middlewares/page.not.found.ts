import express,{Request, Response, NextFunction} from 'express';
import { NotFoundError } from '../error/not.found';

export const pageNotFound = (app: express.Express) => {
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(new NotFoundError("Página não encontrada !"));
    })
}