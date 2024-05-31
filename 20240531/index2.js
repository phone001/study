// http 프로토콜
// http 요청을 보내게 되면

// tcp 3-way-handshaking의 과정을 거치고 
// 3-way-handshaking : 클라이언트와 서버가 데이터 통신을 하기전에 통신 준비가 되었다는 것을 확인하는 것
// 아무나 네이버 데이터베이스에 값을 넣거나 사용자 정보같은 것을 조회하거나 하면 안됨
// 요청을 보낼 수 있는 host인지 확인

// 클라이언트는 서버에 통신요청을 하고
// 서버는 통신 요청을 받아 클라이언트에게 통신 요청을 수락하고 응답
// SYN + ACK

// 클라이언트는 SYN을 서버에 요청하고
// 서버는 SYN+ACK를 클라이언트에게 통신 요청 수락을 응답해줌
// 클라이언트는 서버로 ACK를 보내면 요청을 보낸다

// 서버에 요청을 보내고 응답을 받고 

// 4 way-handshaking TCP연결을 종료
// 통신을 종료하기 위해 클라이언트가 서버가 서로의 상태 확인
// 서버 FIN메세지를 받고 클라이언트는 데이터가 없다는 것을 의미하는
// 메시지인 ACK를 보내고 서버는 데이터가 더 없으면 자신이 보내지짖 않은 데이터를 확인한 뒤
// 전송데이터가 있으면 전송하고 클라이언트에게 FIN메시지를 전송  클라이언트는 서버가 더이상 전송할 데이터가 없는 것을 확인하고 ACK메시지를 보내줌

//이후 통신 종료

//월요일  요청과 응답 객체 

const http = require('http');
const file = require('fs');
const path = require("path")

const server = http.createServer((req, res) => {
    // createServer 서버 객체를 만들고 콜백함수로 익명함수 전달
    // 요청과 응답의 처리 내용의 로직을 작성

    // 상태코드
    // 응답 해줄 때 200

    /*
    1XX : 거의 없음
    2XX : 성공
    3XX : 리다이렉트, 요청을 다시 다른 곳으로 보내라
    4XX : URL 정상적이지 않거나 페이지가 없거나
    5XX : 서버가 정상적이지 않음
    */
    let body = '';
    req.on('data', chunk => {
        console.log(chunk.toString());
        body += chunk.toString();
    })

    //성공 응답
    res.statusCode = 200;
    //실패 응답
    // res.statusCode = 400;

    //요청한 host의 url
    const url = req.url;


    console.log("요청", body)

    res.setHeader("Content-Type", "text/html;charset=UTF-8");
    let fileName = '';
    console.log(url)
    switch (url) {
        case "/":
            //res.end("main page");
            fileName = "";
            break;
        case "/mypage":
            // res.end("my page");
            fileName = "";
            break;
        case "/postBoard":
            // res.end("board view");
            fileName = "index.html";
            break;
    }
    fileName = "index.html";
    const f = file.readFileSync(path.join(__dirname, fileName));
    //console.log(f)
    //console.log(path.join(__dirname, fileName))

    /*
        비동기 프로미스 객체이지만 then과 catch가 없음
        콜백함수의 data를 응답내용으로 추가하고 종료
    */
    file.readFile(path.join(__dirname, fileName), "utf-8", (err, data) => {
        if (err) {
            console.error("에러발생");
            throw err;
        }

        res.end(data);
    })
});



server.listen(3000, () => {
    console.log("server start")
});