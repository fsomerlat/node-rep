"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicSchema = void 0;
const celebrate_1 = require("celebrate");
exports.musicSchema = celebrate_1.Joi.object().keys({
    idGeneroMusical: celebrate_1.Joi.number().required(),
    idUsuario: celebrate_1.Joi.number().required(),
    titulo: celebrate_1.Joi.string().required(),
    descricao: celebrate_1.Joi.string().required(),
    autor: celebrate_1.Joi.string().required(),
    bpm: celebrate_1.Joi.number().required()
});
//# sourceMappingURL=music.models.js.map