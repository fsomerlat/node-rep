import express from "express";
import {MusicController} from '../controllers/music-controllers'
import expressAsyncHandler from "express-async-handler"; 
import { celebrate, Segments } from "celebrate";
import { musicSchema } from "../models/music.models";

const objMusic = new MusicController();

export const musicRouter = express.Router();

musicRouter.get('/getAllMusic', objMusic.getAllMusic)
musicRouter.post('/addMusic',celebrate({[Segments.BODY] : musicSchema}), expressAsyncHandler(objMusic.addMusic));
musicRouter.put('/updateMusic/:id', celebrate({[Segments.BODY] : musicSchema}), expressAsyncHandler(objMusic.updateMusic));
musicRouter.delete('/deleteMusic/:id', objMusic.deteleMusic);
musicRouter.get('/getByIdMusic/:id', objMusic.getMusic)


