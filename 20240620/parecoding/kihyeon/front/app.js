const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const axios = require('axios');
const { signup } = require("./controller/user.controller");
const app = express();
app.listen(5000, () => {
    console.log("server on");
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "page"));
app.get("/", (req, res) => {
    res.render("main");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});
app.post("/signup", (req, res) => {
    const { uid, upw } = req.body;
    console.log(uid, upw);
    signup(uid, upw);
    res.render("login");
});
app.post("/login", (req, res) => {

});


