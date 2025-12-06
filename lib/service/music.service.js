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
exports.MusicService = void 0;
const music_repositorie_1 = require("../repositories/music.repositorie");
class MusicService extends music_repositorie_1.MusicRepositorie {
    constructor() {
        super();
    }
    /**
     * Com "any", é possível reescrever o nome do índice array no retorno -> map
     * Com type "Music[]",deve conter exatamente os nomes dos campos como schema obrigatoriamente
    */
    getAllMusicService() {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.getAll.call(this);
            return result;
        });
    }
    addMusicService(data) {
        const _super = Object.create(null, {
            add: { get: () => super.add }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.add.call(this, data);
        });
    }
    updateMusicService(data, id) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.update.call(this, data, id);
            return result;
        });
    }
    deleteMusicService(id) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.delete.call(this, id);
        });
    }
}
exports.MusicService = MusicService;
//# sourceMappingURL=music.service.js.map