# 웹 소켓
> 채팅을 구현한더던지 알람기능 데이터를 요청해서 받아서페이지의 내용을 그려준다거나 했지만 
> 이제 서버에서 요청을 보낼 수 있게 양방향 통신이 가능하게
> 보기에는 실시간으로 채팅이나 게시글이 등록되는것 처럼 동작하고 싶을 때 사용

> 웹소켓 프로토콜 일반벅인 http 요청과 응답의 흐릅과는 다름
> http 초기 논리적 연결 요청 이우에 웹소켓 프로토콜인지 확인을 한다.

## 클라이언트
> get 요청 메시지를 받고 
> 헤더의 내용에 
```sh
GET / HTTP1.1
host : http://127.0.0.1:0000
Upgrade : websocket
Sec-WebSocket-Key : 해시 문자열
Sec-WebSocket-Version : 버전

Upgrade : websocket의 연결을 요청한다.
Sec-WebSocket-Key : 클라이언트가 만든 고유 키
```

# 서버
> 요청을 받고 Upgrade : websocket의 요청을 수락하면 101상태코드
```sh
HTTP1.1 101 switching protocols
Upgrade : websocket
Sec-WebSocket-Accept : 해시문자열
```

> 핸드 쉐이크가 성공하면 http 연결이 웹소켓 연결로 변경된다.
> 양방향으로 데이터를 프레임 단위로 주고 받는다.

# 웹소켓 핸드쉐이크 4way 핸드 쉐이크
- 4-way handshake : 안전하게 연결을 종료할 때 사용했고
- 웹소켓 핸드쉐이크 :  http 기반의 연결을 요청하고 웹소켓 프로토콜로 데이터를 주고 받겠다.
- 이어간다.

- 3 way handshake
1. 클라이언트 -> 서버로 syn
2. 서버 -> 클라이언트: syn+ack
3. 클라이언트 -> ack

- 웹소켓 핸드쉐이크
1. 설정되어있는 tcp 연결에서 http 기반의 웹소켓 핸드쉐이크

```js
// socket.io
// ws

```