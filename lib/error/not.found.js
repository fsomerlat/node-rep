"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const base_error_1 = require("./base.error");
class NotFoundError extends base_error_1.BaseError {
    constructor(message) {
        super(404, message);
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=not.found.js.map