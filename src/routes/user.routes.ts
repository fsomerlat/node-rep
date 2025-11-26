import express from 'express';
import { celebrate, Segments } from 'celebrate';
import {userSchema } from '../models/user.models';
import UserController from '../controllers/user-controllers';

const userRouter = express.Router();

const objUser = new UserController();

userRouter.get("/getAllUsers", objUser.getAllUsers);
userRouter.post("/addUser", celebrate({[Segments.BODY]: userSchema}), objUser.addUser);

export {userRouter};