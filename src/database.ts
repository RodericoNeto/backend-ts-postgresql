import { Pool } from 'pg'
// a classe POOL importada é para as conexões com o node

require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: `${dbPassword}`,
    database: 'typescriptdatabase',
    port: 5432
});