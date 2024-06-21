# CORS(Cross origin resource sharing)
> 웹 브라우저의 보안 기능
> 서로 다른 도메인, 프로토콜, 포트 등 간에 데이터를 공유하는 것을 제어한다.

## 브라우저 보안 정책(smae-origin policy)
> 요청을 보낼 때 헤더 내용에 출처가 있는데 이 출처가 같은 경우에 허용하겠다.
> A가 B라는 서버에 요청을 보낼 때 헤더에 포힘된 url이 다르면 에러발생

## CORS 구조
> 서버가 http 헤더를 사용해서 브라우저에게 특정 출처를 응답메시지로 허용할지 여부를 알려준다.
> 두가지 유형이 있는데 cors의 단순 요청, 프리플라이트 요청 

### 단순 요청
> 요청 메서드가 get이나 post등 중의 하나

### 프리플라이트 요청(커스텀 요청)
> 요청 메서드가 get, post가 아닌 이외의 모든 메서드
> put, delete,patch, header 등
> 브라우저가 실제 요청을 보낻기 전에 메서드로 프리플라이트 요청을 한번 보낸다.
> 응답 헤더에는 허용할 메서드와 헤더, 출처를 보내준다.
> 응답 내용을 받고 허용되지 않은 메서드는 브라우저는 요청을 끝냄
> 서버는 요청을 처리해주고 응답을 다시 보내준다.

## CORS 헤더
1. Origin 
> 클라이언트의 요청의 출처
2. Access-Controll-Allow-Origin(중요)
> 서버 응답에서 허용할 출처
3. Access-Controll-Allow-Methods(중요)
> 허용할 http 메서드
4. Access-Controll-Allow-Headers
> 허용할 요청 헤더를 명시
5. Access-Controll-Allow-Credentials(중요)
> 자격증명(쿠키), 세션 등을 포함해서 요청 허용
6. Access-Controll-Max-Age 
> 요청 결과를 캐시하는 시간(초)

## CORS 문법
```sh
npm install cors
```
```js
app.use(cors());
// 반환값은 핸들러 함수=> 미들웨어의 역할은 함수
//모든 충처를 허용하겠다. *

app.use(cors({
    origin:"http://domain.com",//허용할 출처, 여러개를 주면 배열로
    methods:["GET","POST"],// 허용할 메서드
    credentials: true // 자격증명 허용으로 true면 허용, false는 불가
}));
```