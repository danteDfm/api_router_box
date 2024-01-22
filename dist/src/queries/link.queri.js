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
exports.LinkQuerie = void 0;
const links_class_1 = require("../models/class/links.class");
class LinkQuerie {
    saveLink(dataLink) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const link = new links_class_1.linkModel(dataLink);
                const resMongo = yield link.save();
                console.log(resMongo);
            }
            catch (err) {
                err = err;
                throw new Error(err);
            }
        });
    }
    findLink() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const links = yield links_class_1.linkModel.find();
                console.log(links);
            }
            catch (err) {
                err = err;
                throw new Error(err);
            }
        });
    }
}
exports.LinkQuerie = LinkQuerie;
