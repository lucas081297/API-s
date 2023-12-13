const mysql = require('mysql2');
require('dotenv').config();

var pool = mysql.createPool({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    port: process.env.BD_PORT,
    database: process.env.DATABASE,
    ssl: {
        rejectUnauthorized: true
    }
})

exports.pool = pool
