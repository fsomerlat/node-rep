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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const general_error_1 = require("../error/general.error");
/**
 * Padrão - Singleton - Não é possível criar uma outra instância fora
 * Não é possível -> ex: new DatabaseConfig()
 *
*/
class DatabaseConfig {
    constructor() {
        this.env = process.env;
    }
    /**
     * Função que controla o Singleton - Retorna sempre uma única instância
     * O método DEVE ser 'static' nesse padrão
     */
    static getInstance() {
        if (!DatabaseConfig.instance) {
            this.instance = new DatabaseConfig();
        }
        return this.instance;
    }
    _db() {
        try {
            const conn = promise_1.default.createPool({
                "host": this.env.DB_HOST,
                "user": this.env.DB_USER,
                "password": this.env.DB_PASS,
                "database": this.env.DB_DATABASE
            });
            return conn;
        }
        catch (error) {
            throw new general_error_1.GeneralError("Erro de conexação com a base de dados : Erro ->" + error);
        }
    }
    /**
     * RowDataPacket - O mysql2 retorna esse tipo de objeto, por isso usar 'RowDataPacket[]'
    */
    prepare(sql, param) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var db = DatabaseConfig.getInstance()._db();
                return db.query(sql, param);
            }
            catch (error) {
                throw new general_error_1.GeneralError("DatabaseError: Erro ao preparar a queryString (prepare): Error ->" + error);
            }
        });
    }
}
exports.default = DatabaseConfig;
//# sourceMappingURL=db.js.map