"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repertorioRouter = void 0;
const express_1 = __importDefault(require("express"));
const repertorio_controllers_1 = require("../controllers/repertorio.controllers");
const repertorioRouter = express_1.default.Router();
exports.repertorioRouter = repertorioRouter;
const objRepertorio = new repertorio_controllers_1.RepertorioController();
repertorioRouter.use('/repertorioAll', objRepertorio.getAllRepertorio);
//# sourceMappingURL=repertorio.routes.js.map