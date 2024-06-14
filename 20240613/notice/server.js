const express = require('express');
const path = require("path");
const router = require("./routes/noticeRoute");
const methodOverride = require("method-override");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

// 라우터
app.use("/notice", router);

app.get("/", (req, res) => {
    res.render("main")
})

app.listen(PORT, () => {
    console.log("server on")
})