const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
    setTimeout(() => {
        res.send("하이")
    }, 2000)
})

app.listen(4000, () => {
    console.log("server on~")
})