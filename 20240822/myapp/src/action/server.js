const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())
app.get("/", (req, res) => {
    res.send("계란볶음밥");
})

app.listen(3001, () => {
    console.log("server on");
})