"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralError = void 0;
const base_error_1 = require("./base.error");
class GeneralError extends base_error_1.BaseError {
    constructor(message) {
        super(400, message);
    }
}
exports.GeneralError = GeneralError;
//# sourceMappingURL=general.error.js.map