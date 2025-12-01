import express from 'express';
import { userRouter } from './user.routes'
import { musicRouter } from './music.routes';
import { repertorioRouter } from './repertorio.routes';
/**
 * Orquestrador de rotas - Todas as rotas passarão por aqui
 * Chamada no arquivo de configuraçao dos servidor
*/

const routes = (app: express.Express) => {
    app.use(userRouter);
    app.use(musicRouter);
    app.use(repertorioRouter);
}

export {routes};