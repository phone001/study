const mysql = require("mysql2/promise");

const mysql2 = mysql.createPool({
    user: "root",
    password: "root",
    database: "test"
});

mysql2.getConnection();
module.exports = mysql2;