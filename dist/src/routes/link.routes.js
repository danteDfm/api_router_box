"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const link_controller_1 = require("../controllers/link.controller");
const router = (0, express_1.Router)();
router.post('/save', link_controller_1.LinkController.routeSaveLink);
router.get('/find', link_controller_1.LinkController.routeFindLink);
exports.default = router;
