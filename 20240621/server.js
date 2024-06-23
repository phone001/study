const webSocket = require("ws");

// 서버 객체를 생성
// 웹소켓의 서버 포트는 따로 지정한다.
const wss = new webSocket.Server({ port: 3000 });

// 연결 이벤트를 사용
// 클라이언트가 웹소켓에 접속을 요청했을때 발생하는 이벤트
wss.on("connection", (socket, request) => {
    console.log("연결 완료")
    // 서버 측에서 클라이언트에게 요청을 받고
    // message라는 이벤트 명이면 콜백함수 호출
    // on : 이벤트에 콜백함수로 등록
    // emit : 이벤트 호출
    socket.on("message", (msg) => {
        console.log(msg.toString());
        console.log(wss.clients)
        wss.clients.forEach(client => {
            client.send(msg.toString())
            //client.send(request.socket.remoteAddress);

        })
    });
    socket.on("close", () => {
        console.log("클라이언트 연결 종료");
    })

    // ws :  localhost:0000

})