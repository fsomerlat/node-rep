"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const validation_error_1 = require("../error/validation.error");
const general_error_1 = require("../error/general.error");
const internar_server_error_1 = require("../error/internar.server.error");
const not_found_1 = require("../error/not.found");
const celebrate_1 = require("celebrate");
const errorHandler = (app) => {
    app.use((0, celebrate_1.errors)()); /* Tratar erros de validação definido por schema */
    app.use((error, req, res, next) => {
        //console.log(error);
        if (error instanceof validation_error_1.ValdationError) {
            error.send(res);
        }
        else if (error instanceof general_error_1.GeneralError) {
            error.send(res);
        }
        else if (error instanceof not_found_1.NotFoundError) {
            error.send(res);
        }
        else {
            new internar_server_error_1.InternaServerError("Erro interno no servidor ! Error:" + error).send(res);
        }
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.handler.js.map