// 서버 객체 생성
const app = require('express')();
const fs = require('fs');
const path = require('path');
const boardRouter = require('./routers/board.router');

// 미들웨어 : 요청과 응답 전에 동작할 기능
// 
app.use("/board", boardRouter);
// 루트 경로에서 요청이 들어오는 경우
// /board : 루트에서 board라는 경로로 요청이 들어오는 경우

// 라우팅 처리
app.get("/", (req, res) => {
    // res.write("456");
    // res.write("456");
    // res.end("123");
    // end : 기본적인 스트림을 다룰 때
    // 해더의 내용으로 정해진 컨텐츠 타입으로 보낼 때 사용하는 메서드
    // 문자열, 객체, 배열, 버퍼 등의 내용을 클라이언트에게 응답하면서 응답 종료
    // html contentType
    //res.send("{a:1}");

    // 주요차이
    // end : 스트리밍 응답이나 응답의 부분을 나눠서 보낼 때
    // send : 간한한 응답을 보낼때 한번으로 응답 종료

    // 서버에서 브라우저에 응답메시지를 주는 것
    // 따로 지정하지 않으면 리다렉트가 안된다.
    // res.redirect();


    const filePath = path.join(__dirname, "views", "index.html");
    //const file = fs.readFileSync(filePath);
    fs.readFile(filePath, "utf8", (err, data) => {
        // res 응답 헤더의 상태코드를 404로 할당
        if (err) return res.status(404).send("페이지 파일을 읽는데 오류났음");

        res.send(data);
    })
})


// 클라이언트 서버가 없는데 그 역할을 브라우저에서 함
// 서버 측에서 페이지를 보여주는 역할까지 하고 있는것
// 클라이언트를 보여주는 서버(정적 파일을 보여주는 서버)
// 객체나 DB 등의 데이터를 응답해주는 서버

// 서버 대기상태
app.listen(3000, () => {
    console.log('server on');
})