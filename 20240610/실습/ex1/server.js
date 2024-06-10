const express = require("express");
const mainRouter = require("./router/mainRouter");
const fs = require('fs');
const path = require("path");
const app = express();
const PORT = 3000;

app.use("/", mainRouter);
app.use(express.static("public"))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("root 경로 옴")
    fs.readFile(path.join(__dirname, "views", "index.html"), "utf8", (err, data) => {
        if (err) return res.status(404).send("파일 없음");

        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log("server on!!!!!");
})