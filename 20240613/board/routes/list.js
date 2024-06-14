const router = require("express").Router();
const mysql = require('mysql2');
const DBInfo = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test'
}
const mysqlConnect = mysql.createConnection(DBInfo);

router.get("/list", (req, res) => {
    const query = "select * from products"
    mysqlConnect.query(query, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            console.log(data)
            res.render("listPage", { data });
        }
    })
})

router.get("/insert", (req, res) => {
    res.render("insert")
})

router.post("/insert", (req, res) => {
    const { name, number } = req.body;
    const query = "insert into products(name,number) values(?,?)";
    mysqlConnect.query(query, [name, number], (err) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        }
        console.log('데이터 추가 완료');
        res.redirect("/list")
    })
})


module.exports = router;