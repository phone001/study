const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("main");
});

router.get("/chating", (req, res) => {
    res.render("main2")
})
module.exports = router;