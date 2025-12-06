import dotenv from "dotenv";
dotenv.config();


import UserRepositorie from "../repositories/user.repositories";

(async () => {

    const repo = new UserRepositorie();
    const users = await repo.getAllUsersRepositorie();
    if(users.length > 0) {
        console.log(`A quantidade usuários cadastrados é de: ${users.length} usuário !`);
    }else{
        console.log(`Houve uma ocorrência de excessão !`);
    }

})();

/*(async() => {
    console.log('Teste concluído - Removido dependências .env')
})();*/

