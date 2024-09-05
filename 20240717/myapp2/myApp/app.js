const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("내가 안보임?");
})

app.listen(3000, () => {
    console.log("server on");
})