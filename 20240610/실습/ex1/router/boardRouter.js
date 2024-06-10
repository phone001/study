const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const board = require("../src/board/main");

router.get("/", (req, res) => {
    board.main(res);
    //res.render("./board/boardList");
})

router.get("/write", (req, res) => {
    res.render("./board/boardWrite");
})

module.exports = router;