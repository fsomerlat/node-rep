import {Request, NextFunction, Response} from 'express';
import { UserService } from '../service/user.service';

export default class UserController extends UserService {

    constructor(){
        super();
    }

    async  getAllUsers(req: Request, res: Response, next: NextFunction):Promise<string|any> {        
        await super.getUsersService(res, next);
    }

    async addUser(req:Request, res: Response, next: NextFunction):Promise<void> {
        await super.addUserService(req.body, res, next);
    }
}