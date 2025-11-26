import express from "express";
import {MusicController} from '../controllers/music-controllers'
import expressAsyncHandler from "express-async-handler"; 
import { celebrate, Segments } from "celebrate";
import { musicSchema } from "../models/music.models";

export const musicRouter = express.Router();

musicRouter.get('/getAllMusic', MusicController.getAllMusic)
musicRouter.post('/addMusic',celebrate({[Segments.BODY] : musicSchema}), expressAsyncHandler(MusicController.addMusic));
musicRouter.put('/updateMusic/:id', celebrate({[Segments.BODY] : musicSchema}), expressAsyncHandler(MusicController.updateMusic));

