"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.repSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.repSchema = joi_1.default.object({
    idMusica: joi_1.default.number().required(),
    IdUsuario: joi_1.default.number().required(),
    dataCadastro: joi_1.default.string().required(),
    ultimaAtualizacao: joi_1.default.string().required(),
    situacao: joi_1.default.string().required(),
    tom: joi_1.default.string().required()
});
//# sourceMappingURL=repertorio.models.js.map