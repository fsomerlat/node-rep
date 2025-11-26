import {Request, Response} from 'express';
import { UserService } from '../service/user.service';

export default class UserController extends UserService {

    constructor(){
        super();
    }

    async  getAllUsers(req:Request, res: Response):Promise<any> {        
        await super.getUsersService(res);
    }

    async addUser(req:Request, res: Response) {
        console.log(req.body);
        await super.addUserService(req.body, res);
    }
}