const mysql = require("./config");

async function createTable() {
    try {
        const query = "show tables where tables_in_test='users'";
        const [data] = await mysql.query(query);
        if (data.length === 0) {
            const createQuery = "create table users( id varchar(20) primary key, pw varchar(128))";
            await mysql.query(createQuery);
        }
    } catch (e) {
        console.error(e);
    }
}

async function addUser(id, pw) {
    try {
        await createTable();
        const query = "insert into users(id,pw) values(?,?)";
        await mysql.query(query, [id, pw]);
    } catch (e) {
        console.error(e);
    }
}
async function getUserInfo(id, pw) {
    try {
        const query = "select * from users where id =?";
        const [[data]] = await mysql.query(query, [id]);
        console.log(data)
        return data;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { addUser, getUserInfo }