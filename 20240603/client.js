const net = require("net");

const socket = net.connect({
    port: 3000,
    host: "192.168.0.146"
    // host: "127.0.0.1"
})

socket.on("connect", () => {
    console.log("연결됨");
    socket.write("나 바보아니다");//서버측에 데이터를 보냄
})