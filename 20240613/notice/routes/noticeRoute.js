const router = require('express').Router();
const mysql = require("mysql2");
// const methodOverride = require("method-override");

const DBInfo = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "example",
    multipleStatements: true
}

const mysqlConnect = mysql.createConnection(DBInfo);

// router.use(methodOverride("_method"));
router.get("/", (req, res) => {
    const query = 'select RANK () over(order by id)as "index",id,title,date,view from notice';
    mysqlConnect.query(query, (err, data) => {
        if (err) {
            console.error(er);
            res.status(500).end("DB조회실패");
        }
        res.render("list/listView", { data });
    })
})

router.get("/insert", (req, res) => {
    res.render("list/insertView");
})

router.post("/insert", (req, res) => {
    const { title, content } = req.body;
    const user = "kim";//나중에 변경
    const query = "insert into notice(title,content,owner) values(?,?,?)"
    mysqlConnect.query(query, [title, content, user], () => {
        console.log("작성완료");
        res.redirect("/notice")
    })
})


router.get("/detail/:index", (req, res) => {
    console.log("디테일")
    const index = req.params.index;
    console.log(index)
    const selectQuery = "select id,title ,content from notice where id=?"
    const updateQuery = "set @view = (select view from notice where id = ?); update notice set view = @view+1 where id=?;"

    mysqlConnect.query(updateQuery, [index, index], (err) => {
        if (err) console.log(err);
    })
    mysqlConnect.query(selectQuery, [index], (err, data) => {
        console.log(data)
        res.render(`list/detailView`, { data })
    })
})

router.patch("/update/:index", (req, res) => {
    const index = req.params.index;
    console.log("test");
    const selectQuery = "select title ,content from notice where id=?"
    mysqlConnect.query(selectQuery, [index], (err, data) => {
        console.log(data)
        res.render(`list/updateNoticeView`, { data })
    })
})

router.delete("/delete/:index", (req, res) => {
    const index = req.params.index;
    const query = "delete from notice where id=?"
    mysqlConnect.query(query, [index], (err, data) => {
        console.log(data)
        res.redirect("/notice");
    })
})

module.exports = router;