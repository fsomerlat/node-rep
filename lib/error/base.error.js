"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
    send(res) {
        res.status(this.status).send({ "message": this.message });
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=base.error.js.map