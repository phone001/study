const express = require("express");
const path = require("path");
const router = require("./routes/list");

const app = express();
const PORT = 3000;

const DBInfo = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test'
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router);

app.get("/", (req, res) => {
    console.log("요청 옴")
    res.render("index");
})

app.listen(PORT, () => {
    console.log("on")
});