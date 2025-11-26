"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValdationError = void 0;
const base_error_1 = require("./base.error");
class ValdationError extends base_error_1.BaseError {
    constructor(messagem) {
        super(400, messagem);
    }
}
exports.ValdationError = ValdationError;
//# sourceMappingURL=validation.error.js.map