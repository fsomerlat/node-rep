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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepertorioRepositories = void 0;
const db_1 = __importDefault(require("../config/db"));
class RepertorioRepositories extends db_1.default {
    constructor() {
        super();
    }
    getAllRepRepositories() {
        const _super = Object.create(null, {
            prepare: { get: () => super.prepare }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT   idMusica, IdUsuario, dataCadastro, ultimaAtualizacao, situacao, tom
                        FROM repertorio`;
            const [rows] = yield _super.prepare.call(this, sql);
            const repertorio = rows.map((data) => (Object.assign({}, data)));
            return repertorio;
        });
    }
}
exports.RepertorioRepositories = RepertorioRepositories;
//# sourceMappingURL=repertorio.repositories.js.map