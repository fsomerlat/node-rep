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
exports.MusicController = void 0;
const music_service_1 = require("../service/music.service");
class MusicController {
    constructor() {
        this.musicService = new music_service_1.MusicService();
        /**
         * O this perde a referência quando resgistra rota no express, necessário bindar os métodos
        */
        this.getAllMusic = this.getAllMusic.bind(this);
        this.addMusic = this.addMusic.bind(this);
        this.updateMusic = this.updateMusic.bind(this);
        this.deteleMusic = this.deteleMusic.bind(this);
    }
    getAllMusic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.musicService.getAllMusicService();
            res.status(200).send(result);
        });
    }
    addMusic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            yield this.musicService.addMusicService(data);
            res.status(200).send({ "message": "Música cadastrada com sucesso !" });
        });
    }
    updateMusic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = {
                    id: Number(req.params.id),
                    body: req.body
                };
                yield this.musicService.updateMusicService(data.body, data.id);
                res.status(200).send({ "message": "Registro atualizado com sucesso !" });
            }
            catch (error) {
                next(error);
            }
        });
    }
    deteleMusic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                yield this.musicService.deleteMusicService(id);
                res.status(200).send({ "message": "Registro excluído com sucesso !" });
            }
            catch (error) {
                next(error);
            }
        });
    }
    getMusic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                yield this.musicService.getById(id);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.MusicController = MusicController;
//# sourceMappingURL=music-controllers.js.map