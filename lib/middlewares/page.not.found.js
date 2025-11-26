"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotFound = void 0;
const not_found_1 = require("../error/not.found");
const pageNotFound = (app) => {
    app.use((req, res, next) => {
        next(new not_found_1.NotFoundError("Página não encontrada !"));
    });
};
exports.pageNotFound = pageNotFound;
//# sourceMappingURL=page.not.found.js.map