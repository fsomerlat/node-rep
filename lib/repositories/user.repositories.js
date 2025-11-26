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
const db_1 = __importDefault(require("../config/db"));
class UserRepositorie extends db_1.default {
    constructor() {
        super();
    }
    getAllUsersRepositorie() {
        const _super = Object.create(null, {
            prepare: { get: () => super.prepare }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT idUsuario, idGrupo, nome, telefone, email, status, termo
                    FROM usuario`;
            const [rows] = yield _super.prepare.call(this, sql, null);
            const users = rows.map((data) => (Object.assign({}, data)));
            return users;
        });
    }
    addUserRepositorie(data) {
        const _super = Object.create(null, {
            prepare: { get: () => super.prepare }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = ` INSERT INTO usuario (idGrupo, nome, telefone, email, status, termo)
            VALUES(${data.idGrupo}, '${data.nome}','${data.telefone}','${data.email}','${data.status}','${data.termo}' )`;
                return yield _super.prepare.call(this, sql);
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.default = UserRepositorie;
//# sourceMappingURL=user.repositories.js.map