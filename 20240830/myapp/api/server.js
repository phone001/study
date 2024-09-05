const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 보여주는 글의 갯수
const pageViewCount = 2;

// 2개씩 보여준다 가정하면 5개의 페이지 넘버
const Item = [
    { id: 1, title: 'kim1' },
    { id: 2, title: 'kim2' },
    { id: 3, title: 'kim3' },
    { id: 4, title: 'kim4' },
    { id: 5, title: 'kim5' },
    { id: 6, title: 'kim6' },
    { id: 7, title: 'kim7' },
    { id: 8, title: 'kim8' },
    { id: 9, title: 'kim9' },
    { id: 10, title: 'kim10' }
]

app.get("/page/:pageIndex", (req, res) => {
    const { pageIndex } = req.params;
    // index
    const index = parseInt(pageIndex);

    // 페이지 번호에 해당하는 시작인덱스
    // startIndex 글의 배열에서 잘라야하는 시작점 인덱스
    const startIndex = (index - 1) * pageViewCount;
    const pageItem = Item.slice(startIndex, startIndex + pageViewCount);
    res.send(pageItem);
})

app.listen(4000, () => {
    console.log("server on");
})