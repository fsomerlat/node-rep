"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicRouter = void 0;
const express_1 = __importDefault(require("express"));
const music_controllers_1 = require("../controllers/music-controllers");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const celebrate_1 = require("celebrate");
const music_models_1 = require("../models/music.models");
exports.musicRouter = express_1.default.Router();
exports.musicRouter.get('/getAllMusic', music_controllers_1.MusicController.getAllMusic);
exports.musicRouter.post('/addMusic', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: music_models_1.musicSchema }), (0, express_async_handler_1.default)(music_controllers_1.MusicController.addMusic));
exports.musicRouter.put('/updateMusic/:id', (0, celebrate_1.celebrate)({ [celebrate_1.Segments.BODY]: music_models_1.musicSchema }), (0, express_async_handler_1.default)(music_controllers_1.MusicController.updateMusic));
//# sourceMappingURL=music.routes.js.map