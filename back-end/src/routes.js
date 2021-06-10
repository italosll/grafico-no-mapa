"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
var express_1 = require("express");
var answer_controller_1 = __importDefault(require("../src/controllers/answer.controller"));
var routes = express_1.Router();
routes.post('/answer', answer_controller_1.default.create);
routes.get('/answer', answer_controller_1.default.read);
routes.delete('/answer', answer_controller_1.default.delete);
exports.default = routes;
