const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
// cookie parser
const cookie = require("cookie-parser")
require("dotenv").config();
const app = express();
const PORT = 3000;

// process 객체에 env 키에 우리가 작성한 내용이 키와 값으로 할당된다.
console.log(process.env.KEY);
// .env 파일은 올리면 안되고 빌드를 해서 올리거나
// 환경변수 지정하는 페이지에서 값을 적어주면 된다.

const user = {
    uid: "kim",
    password: "123"
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
function tokenMiddle(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.send("유효하지 않은 유저");
    req.user = jwt.verify(token, process.env.KEY);
    next();
}

app.set("views", path.join(__dirname, "page"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/board", tokenMiddle, (req, res) => {
    res.send(`게시판 페이지 ${req.user.name}`);
})

app.post("/login", (req, res) => {
    const { id, password } = req.body;

    if ((id == user.uid) && (password == user.password)) {
        const key = process.env.KEY;
        // JWT를 발급할 때 비밀키를 넣어서 만들어 줄것
        // payload 값도 복원하고 검증을 하기 위해선 key값이 있어야 한다.
        //let token = jwt.sign({},"",{});
        let token = jwt.sign({
            type: "JWT",
            name: "kim"
        }, key, {
            // 토큰 유지시간
            expiresIn: "5m",
            // 발급자
            issuer: "발급자"
        });
        console.log(token);
        // 토큰을 검증하고 payload값을 복호화
        const data = jwt.verify(token, key);
        console.log(data);
        // 단순 쿠키로 저장을 할 것
        // httponly : 클라이언트의 js에서 제어할 수 없고 요청과 응답에서만 사용된다. 보안에 유리함
        res.cookie("token", token, { httpOnly: true });
    } else {

    }
    res.redirect("/board");
})
app.listen(PORT, () => {
    console.log("server on~");
});