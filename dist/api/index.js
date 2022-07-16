"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = __importDefault(require("./images/index"));
var apiRouter = (0, express_1.Router)();
apiRouter.use('/images', index_1.default);
exports.default = apiRouter;
