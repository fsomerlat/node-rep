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
exports.MusicService = void 0;
const music_repositorie_1 = __importDefault(require("../repositories/music.repositorie"));
const not_found_1 = require("../error/not.found");
//import DatabaseConfig from "../config/db";
class MusicService extends music_repositorie_1.default {
    constructor() {
        super();
    }
    /**
     * Com "any", é possível reescrever o nome do índice array no retorno -> map
     * Com type "Music[]",deve conter exatamente os nomes dos campos como schema obrigatoriamente
    */
    getAll() {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.getAll.call(this);
            if (result == null) {
                throw new not_found_1.NotFoundError("Nenhum registro encontrado !");
            }
            return result;
        });
    }
    addMusic(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `INSERT INTO musica (idGeneroMusical, idUsuario, titulo, descricao, autor, bpm)
                   VALUES (${data.idGeneroMusical}, ${data.idUsuario}, '${data.titulo}','${data.descricao}','${data.autor}', ${data.bpm})`;
            yield this.prepare(sql, null);
        });
    }
    update(data, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const _sql = `SELECT idMusica FROM musica WHERE idMusica = ?`;
            const [rows] = yield this.prepare(_sql, [id]);
            if (rows.length > 0) {
                const sql = `UPDATE musica SET 
                        idGeneroMusical = ?, titulo = ? , descricao = ?, autor = ?, bpm = ?
                        WHERE idMusica = ?`;
                yield this.prepare(sql, [
                    data.idGeneroMusical,
                    data.titulo,
                    data.descricao,
                    data.autor,
                    data.bpm,
                    id
                ]);
            }
            else {
                throw new not_found_1.NotFoundError("Registro não encontrado !");
            }
        });
    }
}
exports.MusicService = MusicService;
//# sourceMappingURL=music.service.js.map