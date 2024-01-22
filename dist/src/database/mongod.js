"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function mongoConnect() {
    return mongoose_1.default.connect('mongodb://127.0.0.1:27017/urlBox');
}
exports.mongoConnect = mongoConnect;
