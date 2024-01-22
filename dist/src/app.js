"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const mongod_1 = require("./database/mongod");
const routes_1 = __importDefault(require("./routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.PORT = 3001;
        this.out();
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        (0, mongod_1.mongoConnect)()
            .then(() => {
            console.log('Conexion a base de datos realizada');
        })
            .catch(err => {
            console.log(err);
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        (0, routes_1.default)(this.app);
    }
    out() {
        this.app.listen(this.PORT, () => {
            console.log(`http://localhost:${this.PORT}`);
        });
    }
}
exports.Server = Server;
