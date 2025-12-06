"use strict";
/*import dotenv from "dotenv";
dotenv.config();


import UserRepositorie from "../repositories/user.repositories";
import MusicRepositorie from "../repositories/music.repositorie";

(async () => {

    const repo = new UserRepositorie();
    const users = await repo.getAllUsersRepositorie();
    console.log('A quantidade usuário cadastrados é de', users.length);

    const music = new MusicRepositorie();

    const qtdMusic = await music.getAll();
    console.log(`A quantidade de música cadastradas é de ${qtdMusic?.length}`);

})();*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Teste concluído - Removido dependências .env');
}))();
//# sourceMappingURL=repositorie.tests.js.map