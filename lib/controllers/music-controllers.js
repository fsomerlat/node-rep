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
    static getAllMusic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new music_service_1.MusicService().getAll();
            res.status(200).send(result);
        });
    }
    static addMusic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            yield new music_service_1.MusicService().addMusic(data);
            res.status(200).send({ "message": "Música cadastrada com sucesso !" });
        });
    }
    static updateMusic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                id: Number(req.params.id),
                body: req.body
            };
            yield new music_service_1.MusicService().update(data.body, data.id);
            res.status(200).send({ "message": "Registro atualizado com sucesso !" });
        });
    }
}
exports.MusicController = MusicController;
//# sourceMappingURL=music-controllers.js.map