
/* 
    TCP 서버를 간단하게 구현
    nodejs의 내장 모듈
    net 내장 모듈을 제공
    TCP 소켓을 만들어서 사용
    TCP 연결을 맺는 프로토콜을 만들수 있다.
*/

const net = require("net");
const PORT = 8000;


//서버 객체 생성
const server = net.createServer((client) => {
    // 클라이언트가 접속하면 보내는 데이터를 받기 위해서
    // 'data' => 이벤트 데이터를 전송하게 되면 네트워크에 전송된 데이터
    // 바이너리 형식으로 전송이 된다.
    // 클라이언트가 보낸 데이터는 buffer형태로 전송이 되며
    // 서버측에서는 해석해서 문자열로 변환해서 사용
    // 출력된 데이터는 인코딩해서 데이터를 표현해주면 되는 것

    // 인코딩 방식 UTF-8
    client.setEncoding("utf-8");
    client.on('data', (data) => {
        // 클라이언트에서 보낸 데이터 
        // 네트워크를 통해 전송되는 데이터
        // 바이너리 형식으로 전송
        console.log(data.toString());
        //응답
        //client.end("end");

        //TCP는 HTTP와 계층이 달라 응답내용과 헤더를 직접 작성해주어야 함
        const body = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <div>안녕하세요</div>
        </body>
        
        </html>`;
        const resMsg = `HTTP/1.1 200 ok
        Content-Type : text/html
        Content-Length :${body.length}

        ${body}
        `;
        client.write(resMsg);
        client.end();
    });
})

server.listen(PORT, () => {
    console.log("server on")
})


// 서버에 요청 헤더의 내용

// GET조회하겠다
// http의 버전은 1.0, 1.1 ,2.0이 있음
// 우리가 사용하는 버전은 1.1버전
// GET / HTTP/1.1
// Host: localhost:8000
// Sec-Fetch-Site: none
// Connection: keep-alive => 클라이언트와 서버의 연결 상태의 속성을 정한다. 
// Upgrade-Insecure-Requests: 1
// Sec-Fetch-Mode: navigate
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15
// Accept-Language: ko-KR,ko;q=0.9
// Sec-Fetch-Dest: document
// Accept-Encoding: gzip, deflate


// Connection: keep-alive => 클라이언트와 서버의 연결 상태의 속성을 정한다. 
// 다음 요청을 보낼때까지 연결유지

// content-type(Accept) => 전송하는 데이터의 타입이 어떤거다 명시


// body의 내용
// 전송 본문의 내용