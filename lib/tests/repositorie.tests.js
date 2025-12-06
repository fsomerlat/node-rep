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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const user_repositories_1 = __importDefault(require("../repositories/user.repositories"));
const music_repositorie_1 = __importDefault(require("../repositories/music.repositorie"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const repo = new user_repositories_1.default();
    const users = yield repo.getAllUsersRepositorie();
    console.log('A quantidade usuário cadastrados é de', users.length);
    const music = new music_repositorie_1.default();
    const qtdMusic = yield music.getAll();
    console.log(`A quantidade de música cadastradas é de ${qtdMusic === null || qtdMusic === void 0 ? void 0 : qtdMusic.length}`);
}))();
/*(async() => {
    console.log('Teste concluído - Removido dependências .env')
})();*/
//# sourceMappingURL=repositorie.tests.js.map