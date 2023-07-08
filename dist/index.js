"use strict";
// pode-se compilar esse código digitando no terminal "npx tsc" -> typescriptCompiler
// usa-se "npx tsc --init" para criar um tsconfig.json -> esse arquivo faz a configuração do TS pro JS
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen(4000);
console.log('Servidor rodando na porta', 4000);
