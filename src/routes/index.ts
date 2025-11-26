import express from 'express';
import { userRouter } from './user.routes'
import { musicRouter } from './music.routes';

/**
 * Orquestrador de rotas - Todas as rotas passarão por aqui
 * Chamada no arquivo de configuraçao dos servidor
*/

const routes = (app: express.Express) => {
    app.use(userRouter);
    app.use(musicRouter);
}

export {routes};