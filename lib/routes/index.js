"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_routes_1 = require("./user.routes");
const music_routes_1 = require("./music.routes");
const repertorio_routes_1 = require("./repertorio.routes");
/**
 * Orquestrador de rotas - Todas as rotas passarão por aqui
 * Chamada no arquivo de configuraçao dos servidor
*/
const routes = (app) => {
    app.use(user_routes_1.userRouter);
    app.use(music_routes_1.musicRouter);
    app.use(repertorio_routes_1.repertorioRouter);
};
exports.routes = routes;
//# sourceMappingURL=index.js.map