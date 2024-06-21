// ejs 사용
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("main");
})

app.get("/login", (req, res) => {
    res.render("login");
})
app.get("/signup", (req, res) => {
    // axios.post("http://localhost:4000", { uid: 1, upw: 2 }, {
    //     "Content-Type": "application/json"
    // })

    res.render("login");
})
app.post("/login", async (req, res) => {
    const { id, pw } = req.body;
    const data = await axios.put("http://54.180.109.51:8000/login", { id: 1, pw: 2 }, {
        "Content-Type": "application/json"
    })
    //console.log(data);
    res.send(data.data);

})
app.post("/signup", (req, res) => {
    const { id, pw } = req.body;
    res.send(`${id},${pw} `)
})

app.listen(3000, () => {
    console.log("client server on");
});