import { Joi } from "celebrate"

/**
 * Schema para validação
*/
export type Music = {
   idMusica: number,
   idGeneroMusical: number ,
   idUsuario : number , 
   titulo : string, 
   descricao : string,
   autor : string,
   bpm : number
}

export const musicSchema = Joi.object().keys({
    idGeneroMusical: Joi.number().required(),
    idUsuario: Joi.number(),
    titulo: Joi.string().required(),
    descricao: Joi.string().required(),
    autor: Joi.string().required(),
    bpm: Joi.number().required()
});