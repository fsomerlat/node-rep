import UserRepositorie from "../repositories/user.repositories";
(async () => {
    const repo = new UserRepositorie();
    const users = await repo.getAllUsersRepositorie();
    console.log('Quantidade usuário = ', users.length);
})();