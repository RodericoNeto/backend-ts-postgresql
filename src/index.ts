
// pode-se compilar esse código digitando no terminal "npx tsc" -> typescriptCompiler
// usa-se "npx tsc --init" para criar um tsconfig.json -> esse arquivo faz a configuração do TS pro JS


import express from 'express'

const app = express()

import indexRoutes from './routes/index'


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(indexRoutes);

app.listen(4000);
console.log('Servidor rodando na porta', 4000);