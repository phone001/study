const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

let count = 10;
const todoList = [{ id: 1, name: 'kim' }]
const users = [];
app.get("/count", (req, res) => {
    res.status(200).send(count.toString());
})
app.post("/count", (req, res) => {
    const { incrementsCount } = req.body;
    console.log(incrementsCount)
    count += incrementsCount
    res.status(201).send(count.toString());
})

app.get("/todo", (req, res) => {
    const data = "test";
    res.send(todoList);
})
app.post("/todo", (req, res) => {
    setTimeout(() => {

        const { todo } = req.body;
        todoList.push(todo);
        res.status(201).send(todoList);
    }, 2000)
})

app.post("/signup", (req, res) => {
    const { uid, upw } = req.body;
    users.push({ uid, upw });
    res.send("가입 완료");
})

app.get("/users", (req, res) => {
    res.send(users);
})


app.listen(4000, () => {
    console.log("server on")
})