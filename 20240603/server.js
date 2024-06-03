const net = require("net");

const PORT = 3000;

const server = net.createServer(() => { })

server.on("connection", (client) => {
    console.log("클리이언트가 접속함")
    //console.log(client)
    client.setEncoding("utf8")
    //console.log(client)
    client.on('data', (chunk) => {
        console.log(chunk);
    })
    client.end("이거 맞음")
    // console.log(client)
})

server.listen(PORT, () => {
    console.log("server on");
})