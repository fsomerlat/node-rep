"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepertorioController = void 0;
const repertorio_service_1 = require("../service/repertorio.service");
class RepertorioController extends repertorio_service_1.RepertorioService {
    constructor() {
        super();
    }
    getAllRepertorio(req, res, next) {
        const _super = Object.create(null, {
            getAllRepertorioService: { get: () => super.getAllRepertorioService }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.getAllRepertorioService.call(this, req, res, next);
        });
    }
}
exports.RepertorioController = RepertorioController;
//# sourceMappingURL=repertorio.controllers.js.map