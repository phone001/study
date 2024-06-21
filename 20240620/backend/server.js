const express = require("express");
const paht = require("path");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }))
server.use(cors({
    origin: "http://127.0.0.1:5500",
    methods: ["get", "post"]
}));
server.post("/login", (req, res) => {
    console.log("로그인 요청 됨")
    const { id, pw } = req.body;
    res.send(`${id}:${pw}`)
})
server.post("/signup", (req, res) => {
    const { id, pw } = req.body;
    res.send(`${id}:${pw}`)
})


server.listen(4000, () => {
    console.log("back server on");
})