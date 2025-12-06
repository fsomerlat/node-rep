"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const internar_server_error_1 = require("../error/internar.server.error");
const celebrate_1 = require("celebrate");
const base_error_1 = require("../error/base.error");
const errorHandler = (app) => {
    app.use((0, celebrate_1.errors)()); /* Tratar erros de validação definido por schema */
    app.use((error, req, res, next) => {
        //console.log(error);
        if (error instanceof base_error_1.BaseError) {
            error.send(res);
        }
        else {
            new internar_server_error_1.InternaServerError("Erro interno no servidor ! Error:" + error).send(res);
        }
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.handler.js.map