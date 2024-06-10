const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {
    console.log(app.get("views"))
    res.render("./cart/add");
})

module.exports = router;