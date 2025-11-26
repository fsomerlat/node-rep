"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const celebrate_1 = require("celebrate");
exports.userSchema = celebrate_1.Joi.object().keys({
    idGrupo: celebrate_1.Joi.number().required(),
    nome: celebrate_1.Joi.string().required(),
    email: celebrate_1.Joi.string().required(),
    telefone: celebrate_1.Joi.string(), // Não é obrigatório, mas deve ser uma string se enviado
    status: celebrate_1.Joi.string().required(),
    termo: celebrate_1.Joi.string().required()
});
//# sourceMappingURL=user.models.js.map