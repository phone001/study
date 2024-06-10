const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {
    console.log(app.get("views"))
    res.render("./user/login");
})
router.get("/signup", (req, res) => {
    res.render("./user/signup");
})
router.get("/info", (req, res) => {
    res.render("./user/info");
})

module.exports = router;