"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternaServerError = void 0;
const base_error_1 = require("./base.error");
class InternaServerError extends base_error_1.BaseError {
    constructor(messagem) {
        super(500, messagem);
    }
}
exports.InternaServerError = InternaServerError;
//# sourceMappingURL=internar.server.error.js.map