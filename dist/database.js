"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
// a classe POOL importada é para as conexões com o node
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: `${dbPassword}`,
    database: 'typescriptdatabase',
    port: 5432
});
