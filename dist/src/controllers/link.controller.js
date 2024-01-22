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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkController = void 0;
const link_service_1 = require("../services/link.service");
const objLink = new link_service_1.LinkQuerieService();
class LinkController {
    static routeSaveLink(req, res) {
        if (!req.body) {
            res.status(401).json('data vaci');
        }
        objLink.saveLink(req.body);
        res.status(201).json('create successfully');
    }
    static routeFindLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataLink = yield objLink.findLink();
            if (!dataLink) {
                res.status(401).json('base de datos vacia');
            }
            res.status(201).json(dataLink);
        });
    }
}
exports.LinkController = LinkController;
