const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// 미들웨어로 추가, 요청과 응답이 일어나기 전에 기능을 처리한다.
// 라우팅 처리

// boardAPI
// router 요청 메서드, get요청이 들어오면 /board 콜백함수 실행
router.get("/", (req, res) => {
    const filePath = path.join(__dirname, "..", "views", "board", "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return res.send('err');
        res.send(data);
    })
})
router.get("/list", (req, res) => {
    const filePath = path.join(__dirname, "..", "views", "board", "list.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return res.send('err');
        res.send(data);
    })
})
router.get("/detail", (req, res) => {
    const filePath = path.join(__dirname, "..", "views", "board", "detail.html");
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return res.send('err');
        res.send(data);
    })
})

module.exports = router;