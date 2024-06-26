const express = require("express");
const path = require("path");
const router = require("./routers/mainRouter");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log("server on");
});