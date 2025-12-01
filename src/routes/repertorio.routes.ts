import express from 'express';
import {RepertorioController} from '../controllers/repertorio.controllers';
import { celebrate, Segments } from 'celebrate';
import { repSchema } from '../models/repertorio.models';


const repertorioRouter = express.Router();
const objRepertorio = new RepertorioController();

repertorioRouter.use('/getAllRepertorio', celebrate({[Segments.BODY] : repSchema}), objRepertorio.getAllRepertorio);

export {repertorioRouter};
