"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../service/user.service");
class UserController extends user_service_1.UserService {
    constructor() {
        super();
    }
    getAllUsers(req, res) {
        const _super = Object.create(null, {
            getUsersService: { get: () => super.getUsersService }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.getUsersService.call(this, res);
        });
    }
    addUser(req, res) {
        const _super = Object.create(null, {
            addUserService: { get: () => super.addUserService }
        });
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield _super.addUserService.call(this, req.body, res);
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user-controllers.js.map