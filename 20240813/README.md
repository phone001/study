# CRA

## CRA 설치 명령어
```js
npx create-react-app 프로젝트명
```

## CRA 구성
1. public : 정적파일들이 있는 폴더
2. src : 소스코드를 모아두는 폴더, 동적인 파일도 포함
- src/inde.js : react의 루트 파일

## 테스트 환경 실행
- npm start : 메모리 상에 빌드 내용을 가지고 기본적으로 3000번 포트에 테스트환경을 구축해준다.

## 빌드 운영 배포
```sh
npm run build
```

### src/index.js
```js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// StrictMode 로그 엄격모드
// 로그가 두개씩 찍횜
```
정적파일을 가져오려면 src에 정적 경로를 "%PUBLIC_URL%"형식으로 작성하여 가져오면 된다.
다만 public안에 다른 디렉터리가 있다면 import로 가져와야 한다.

### 아토믹 패턴
> 원자 분자 유기물 템플릿 페이지
원자 : 가장 작은 단위 (버튼)
분자 : 버튼과 input이 결합되있는 형태
유기물 : 영역, 헤더, 푸터 같은 것 

### 컴포넌트
> UI의 단위 UI를 나눠서 구성,레이아웃 구성


### 리액트의 리렌더링
> 부모 컴포넌트가 리렌더링이 일어나면 모든 자식 컴포넌트는 리렌더링이 된다.
> 내용으로 전달된 컴포넌트는 리렌더링이 일어나지 않는 경우가 발생할 수 있다.(props로 컴포넌트를 전달했을 때)

### 리액트의 생명주기
