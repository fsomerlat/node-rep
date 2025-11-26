"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const celebrate_1 = require("celebrate");
const user_models_1 = require("../models/user.models");
const user_controllers_1 = __importDefault(require("../controllers/user-controllers"));
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
const objUser = new user_controllers_1.default();
userRouter.get("/getAllUsers", objUser.getAllUsers);
userRouter.post("/addUser", (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: user_models_1.userSchema }), objUser.addUser);
//# sourceMappingURL=user.routes.js.map