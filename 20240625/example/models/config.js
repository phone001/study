const mysql = require("mysql2/promise");
require("dotenv").config();

// const info = {
//     host: `${process.env.DB_URL}`,
//     port: `${process.env.DB_PORT}`,
//     user: `${process.env.DB_USER}`,
//     password: `${process.env.DB_PASSWORD}`,
//     database: `${process.env.DB_NAME}`,
// }
const info = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "example"
}

const connection = mysql.createPool(info);
connection.getConnection();
module.exports = connection;