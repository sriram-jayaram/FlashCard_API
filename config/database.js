const { createPool } = require("mysql");
require("dotenv").config();

const pool = createPool({
    port: process.env.srvport,
    host : process.env.host,
    user : process.env.uname,
    password : process.env.password,
    database : process.env.db,
    connectionLimit : 10
})

module.exports = pool;