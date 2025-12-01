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
exports.RepertorioService = void 0;
const repertorio_repositories_1 = require("../repositories/repertorio.repositories");
const general_error_1 = require("../error/general.error");
class RepertorioService extends repertorio_repositories_1.RepertorioRepositories {
    getAllReperorioService() {
        const _super = Object.create(null, {
            getAllRepRepositories: { get: () => super.getAllRepRepositories }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rows = yield _super.getAllRepRepositories.call(this);
                return rows;
            }
            catch (error) {
                throw new general_error_1.GeneralError("Nenhum registro encontrado !");
            }
        });
    }
}
exports.RepertorioService = RepertorioService;
//# sourceMappingURL=repertorio.service.js.map