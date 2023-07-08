import { Pool } from 'pg'
// a classe POOL importada é para as conexões com o node

new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '',
})