const express = require("express");
const path = require("path");
const socket = require("socket.io")
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("main");
})

const server = app.listen(3000, () => {
    console.log("server on")
})


// 좌석이 있는지 없는지 나눈 것, 빈좌석은 1, 좌석의 여백은 0
let seat01 = [
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1],
];
let seat02 = [
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1],
];
let seat03 = [
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1],
];
let seat04 = Array.from({ length: 100 }, () => Array(100).fill(1));
//let seats = [[...seat01], [...seat01], [...seat01]]
let seats = [seat01, seat02, seat03, seat04]

app.get("/seats/:id", (req, res) => {
    const { id } = req.params;
    // 어떤 버스의 좌석에 앉을 건지
    res.send(seats[id]);
})
// socket io 스크립트 아루팅
const io = socket(server);
io.sockets.on("connection", (socket) => {
    // 클라이언트가 접속
    console.log("클라이언트 접속");
    socket.on("reserve", (data) => {
        console.log("예약 됐음");
        const { selectIndex: { x, y }, index } = data;
        const selectSeats = seats[index];
        selectSeats[y][x] = 2;
        io.sockets.emit("reRender", data)
    })

})