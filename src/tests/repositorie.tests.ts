import dotenv from "dotenv";
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

})();

/*(async() => {
    console.log('Teste concluído - Removido dependências .env')
})();*/

