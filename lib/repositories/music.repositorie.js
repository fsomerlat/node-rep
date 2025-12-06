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
const general_error_1 = require("../error/general.error");
class MusicRepositorie extends db_1.default {
    constructor() {
        super();
        /**
         * O this perde a referência quando resgistra rota no express, necessário bindar os métodos
        */
        this.getById = this.getById.bind(this);
    }
    getAll() {
        const _super = Object.create(null, {
            prepare: { get: () => super.prepare }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT  idMusica, idGeneroMusical, idUsuario, titulo, descricao, autor, bpm  
                     FROM musica`;
            const [result] = yield _super.prepare.call(this, sql, null);
            if (result.length == 0) {
                throw new general_error_1.GeneralError("Registro não encontrado !");
            }
            const musics = result.map((data) => (Object.assign({}, data)));
            return musics;
        });
    }
    add(data) {
        const _super = Object.create(null, {
            prepare: { get: () => super.prepare }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `INSERT INTO musica (idGeneroMusical, idUsuario, titulo, descricao, autor, bpm)
                   VALUES (${data.idGeneroMusical}, ${data.idUsuario}, '${data.titulo}','${data.descricao}','${data.autor}', ${data.bpm})`;
            yield _super.prepare.call(this, sql);
        });
    }
    update(data, id) {
        const _super = Object.create(null, {
            prepare: { get: () => super.prepare }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getById(id);
            if ((result === null || result === void 0 ? void 0 : result.length) == 0) {
                throw new general_error_1.GeneralError("Registro não encontrado !");
            }
            const sql = `UPDATE musica SET 
            idGeneroMusical = ?, titulo = ? , descricao = ?, autor = ?, bpm = ?
            WHERE idMusica = ?`;
            yield _super.prepare.call(this, sql, [
                data.idGeneroMusical,
                data.titulo,
                data.descricao,
                data.autor,
                data.bpm,
                id
            ]);
        });
    }
    delete(id) {
        const _super = Object.create(null, {
            prepare: { get: () => super.prepare }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const musicId = yield this.getById(id);
            if ((musicId === null || musicId === void 0 ? void 0 : musicId.length) == 0) {
                throw new general_error_1.GeneralError("Registro não encontrado !");
            }
            const sql = `DELETE FROM musica WHERE idMusica = ?`;
            yield _super.prepare.call(this, sql, [id]);
        });
    }
    getById(id) {
        const _super = Object.create(null, {
            prepare: { get: () => super.prepare }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `SELECT idMusica, idGeneroMusical, idUsuario, titulo, descricao, autor, bpm
                    FROM musica 
                    WHERE idMusica = ?`;
            const [rows] = yield _super.prepare.call(this, sql, [id]);
            if (rows.length == 0) {
                throw new general_error_1.GeneralError("Registro não encontrado !");
            }
            return rows;
        });
    }
}
exports.default = MusicRepositorie;
//# sourceMappingURL=music.repositorie.js.map