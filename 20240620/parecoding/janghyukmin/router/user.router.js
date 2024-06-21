const router = require('express').Router()
const { addUsers, getUserInfos, decodedToken } = require('../controller/user.controller');


router.get("/login", (req, res) => {
    res.render("login")
})
router.get("/signup", (req, res) => {
    res.render("signup")
})
router.post("/login", async (req, res) => {
    console.log("로그인")
    const { id, pw } = req.body;
    const token = await getUserInfos(id, pw);
    console.log(token);
    if (token == null) {
        console.log(token);
        res.send("토큰 발급안됨");
    }

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/user/userinfo");
})
router.post("/signup", (req, res) => {
    const { id, pw } = req.body;
    addUsers(id, pw);
    res.redirect("/user/login")
})

router.get("/userinfo", (req, res) => {
    const token = req.cookies.token;
    decodedToken(token);
    console.log(token);
})

module.exports = router