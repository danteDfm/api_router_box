"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkModel = void 0;
const mongoose_1 = require("mongoose");
const linkSchema = new mongoose_1.Schema({
    nombre: String,
    link: String,
    descripcion: String,
    categoria: String
});
exports.linkModel = (0, mongoose_1.model)('links', linkSchema);
