import { Joi } from "celebrate"

export type User = {
    idUsuario: number,
    idGrupo: number,
    nome: string,
    telefone?: string|number,
    email: string,
    status: string,
    termo: string
}

export const userSchema = Joi.object().keys({
    idGrupo: Joi.number().required(),
    nome: Joi.string().required(),
    email: Joi.string().required(),
    telefone: Joi.string(), // Não é obrigatório, mas deve ser uma string se enviado
    status: Joi.string().required(),
    termo: Joi.string().required()
});