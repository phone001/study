const express = require("express")
const userrouter = require("./router/user.router");
const path = require("path");
const cookie = require("cookie-parser");
const app = express();


app.get("/", (req, res) => {
    res.render("main")
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use("/user", userrouter);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"))


app.listen(3000, () => {
    console.log('server on')
})
