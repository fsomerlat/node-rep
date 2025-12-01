"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repertorioRouter = void 0;
const express_1 = __importDefault(require("express"));
const repertorio_controllers_1 = require("../controllers/repertorio.controllers");
const celebrate_1 = require("celebrate");
const repertorio_models_1 = require("../models/repertorio.models");
const repertorioRouter = express_1.default.Router();
exports.repertorioRouter = repertorioRouter;
const objRepertorio = new repertorio_controllers_1.RepertorioController();
repertorioRouter.use('/getAllRepertorio', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: repertorio_models_1.repSchema }), objRepertorio.getAllRepertorio);
//# sourceMappingURL=repertorio.routes.js.map