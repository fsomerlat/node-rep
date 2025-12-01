import express from 'express';
import {RepertorioController} from '../controllers/repertorio.controllers';


const repertorioRouter = express.Router();
const objRepertorio = new RepertorioController();

repertorioRouter.use('/repertorioAll', objRepertorio.getAllRepertorio);

export {repertorioRouter};
