"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_routes_1 = __importDefault(require("./link.routes"));
const express_1 = require("express");
function apiRouter(app) {
    const router = (0, express_1.Router)();
    app.use('/api/v1', router);
    router.use('/link', link_routes_1.default);
}
exports.default = apiRouter;
