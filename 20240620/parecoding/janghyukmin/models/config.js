const mysql = require("mysql2/promise");

const DBInfo = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "test"
}

const mysql2 = mysql.createPool(DBInfo);

mysql2.getConnection();
module.exports = mysql2;