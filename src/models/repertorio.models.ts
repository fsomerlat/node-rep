import Joi from 'joi';

export type Repertorio = {
    idMusica : number, 
    IdUsuario: number, 
    dataCadastro: string, 
    ultimaAtualizacao: string,
    situacao: string, 
    tom: string
}

export const repSchema = Joi.object({
    idMusica : Joi.number().required(), 
    IdUsuario: Joi.number().required(), 
    dataCadastro: Joi.string().required(), 
    ultimaAtualizacao: Joi.string().required(),
    situacao: Joi.string().required(), 
    tom: Joi.string().required()
});