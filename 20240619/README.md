# 파일 업로드 multer
> multer express환경에서 파일의 업로드를 처리하는 미들웨어
> 주로 multipart/form-data형식의 데이터,파일을 처리할 때 사용한다.
> 파일 업로드를 할 수 있도록 제공한다.
> 메모리 혹은 파일을 디렉터리에 저장하는 옵션을 사용할 수 있다.

이미지를 정적 디렉터리에 저장 후 브라우저에서 경로만 맞게 입력해주면 불러올 수 있다.

## 구조
> Multter multipar/form-data 형식의 데이터 터리하기 위해 스트림을 사용한다.
> 우리가 지정한 위치에 저장한다.

> 스토리지 옵션 : 파일을 저장할 위ㅣ 방법을 설정할 수 잇는 옵션이 제공된다
> 파일 필터링 : 업로드되는 파일을 필터링해서 확장자 등의 조건에 맞는 파일처리만 할 수 있는 기능 제공
> 파일 크기 제한 : 파일의 크기를 제한할 수 있는 옵션을 제공

## REST FUL API
> 웹 서비스 설계의 원칙 http를 사용해서 클라이언트와 서버의 통신을 할 수 있게 개발 방법을 정한 것
> 자원 기반 : 자원의 요청과 응답간에는 URI http메서드 
> get, post, put, delete
> 캐시 : 응답 데이터는 캐시화 될 수 있고 성능이 향상된다.

## fetch, ajax, axios

### ajax
> 초기 웹페이지는 서버에서 모든 데이터를 받아야 했고 페이지의 새로고침이 되지 않으면 데이터를 화면을 보여주기 불가능했다.
> 데이터를 새로고침 되지 않아도 볼 수 있는 기술을 개발을 시작했고
> 1999년 XmlHttpRequest 객체를 만들어 ajax라는 것이 생겼고 새로고침하지 않고도 서버와 데이터를 주고받을 수 있게 되었다
> XMLHttpRequest 객체로 데이터를 주고 받으면 비동기적으로 데이터를 주고 받을 수 있다.
> 정상적으로 주고 받았다는 상태가 필요했고 요청을 보내고 상태의 변화를 확인하다가 완료 상태가 되면 상태코드를 확인하고
> 코드에 맞는 내용을 작성해주어야 한다. 상태코드를 조건문으로 200이든 404든 등등의 상태 코드들을 하드코딩으로 확인해서 작성을 해주어야 한다.
> 콜백 지옥이 펼쳐질 수 있다.
```js
let xhr = new XMLHttpRequest();// 비동기 서버통신 객체 생성
xhr.open("GET","http://localhost:3000")// 통신에 대한 스틍림열고 메소드와 경로를 지정

//요청을 보내고 완료상태가 되었을 때
xhr.onreaystatechange(=()=>{

    if((xhr.readyState === 4) && (xhr.status ==200)){
        JSON.parse(xhr.responseText); // 응답으로 받은 텍스트 데이터를 JSON형태로 변환

    }
}
// 요청을 시작
xhr.send()
```

### fetch API
> ajax도 부족함은 없었는데 코드가 길어지는 문제가 있었고 이부분의 문제를 모던한 API를 개발하여 해결하자
> 2015년 fetch는 promise기반으로 코드가 좀더 직관적이고 짧아졌다.
> promise 기반이기 때문에 좀 더 비동기 처리를 쉽게 할 수 있게 되었다.
> 응답의 메시지를 객체로 받아 json이나 text형식의 데이터를 파싱해서 사용
> 상태 코드를 제어해서 코드를 작성해야하는 경우에는 따로 처리를 해줘야 한다.
```js
fetch("http://localhost:3000").then(res=>{
    if(!res.ok)// true and false로 ok이면 true
    return console.error("네트워크 에러");
    return res.json();
}).then(console.log(data));
```

### Axios
> fetch 이후 기능적으로 요청을 취소하거나 시간을 정하거나 타임아웃이나 json변환을 기본으로 제공을 해주게 개발
> 자바스크립트 기반으로 개발한 라이브러리
> fetch와 차이점은 promise를 반환하는 것은 같지만 
> axios의 경우 json변환은 자동으로 이루어지며 추가적으로 타임아웃 성정, 요청취소, 요청 응답의 인터셉터를 막아줄 수 있다.?

```sh
npm i axios
```
```js
axios.get("http://localhost:3000").then(console.log(res.data));
const data =  await axios.get("http://localhost:3000");
console.log(data)
```
 
1. Ajax
    > XMLHttpRequest 객체기반, 콜백 지옥의 문제가 있다.
2. fetch 
    > Promise 기반, 코드가 간결하고 직관적으로 작성할 수 있다.
    > http응답 내용 파싱작업은 해줘야 함 
3. axios
    > promise기반으로 파싱된 json데이터를 기본으로 제공하고 추가기능 등등 제공
    > nodejs 라이브러리