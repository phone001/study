// ejs 템플릿 엔진

// 템플릿 엔진 => 서버 측에서 html을 만들어서 응답해주는 것
// 서버 사이드 렌더링 
// express에서 ejs를 많이 사용했었음
// express가 업데이트 되면서 ejs를 기본적으로 제공하게 됨

// <% `js 코드` %>
// <%= `변수의 내용`%>// 참조 html 수정 변수를 삽입

// react와 next에서 도움이 된다.

// 파일을 다르게 가져오자.
// 파일을 제공하는 경로를 설정할 수 있음
const express = require('express');
const path = require("path");
const app = express();
//const ejs = express.ejs;
const PORT = 3000;

// set : 서버 객체 안에 있는 내용을 수정하겠다.
console.log(app)
// 뷰 엔진으로 ejs를 사용하겠다.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))// 파일을 찾을 디렉터리를 변경
console.log(app.get("views"))
// /Volumes/작업드라이브/DevOps/day38/20240610/ejs/views에서 파일을 찾는다.


// 정적파일 미들웨어로 추가
// public이라는 폴더를 찾아 정적 라우팅 설정을 한다.
// 앞에 경로를 쓰면 public까지의 경로를 해당 경로로 사용하겠다는 의미
app.use(express.static("public"));


const boardList = [
    {
        id: 1,
        name: "kim"
    },
    {
        id: 2,
        name: "kim2"
    },
    {
        id: 3,
        name: "kim3"
    },
    {
        id: 4,
        name: "kim4"
    },
];
const title = "페이지 제목";

app.get("/", (req, res) => {
    // res.send('하이');
    // 페이지에서 변수를 사용해서 페이지를 완성시켜 보여주기
    // 문자열 파싱을 해서 스크립트 변수 내용을 포함한 완성된 html을 응답
    // render : view engine ejs를 사용할 때 페이지를 완성시켜 응답 
    // 문자열을 파싱해서 html을 완성시켜서 최종적으로 만들어진 html을 응답

    // views경로에서 index라는 파일을 찾고 읽음
    // <% js %> <%= %> 이런 문자열을 찾음
    // 해당 키에 맞는 value를 넣어줌
    res.render("index", { boardList, title })

})

app.listen(PORT, () => {
    console.log("server on~");
})

