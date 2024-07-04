const express = require("express");
const path = require("path");
const { sequelize } = require("./model/lib");
const container = require("./container/DI");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
sequelize.sync({ force: false })

const UserController = container.get("UserController");

app.get("/users/:id", (req, res) => UserController.getUser(req, res));
app.post("/createUser", (req, res) => UserController.signup(req, res));

app.listen(3000, () => {
    console.log("server on");
})
