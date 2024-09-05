# babel
# WebPack

## Babel commonjs 문법
 - 자바스크립트 코드를 변환해준다. ES6 -> ES5
 - 자바스크립트 컴파일

## babel의 목적
 - 자바스크립트 문법이 진화를 꾸준히 하면서 ES5 -> ES6로 문법이 개발되고
 - ES6문법이 개발되면서 많은 모듈이 생겼는데 ES5에서 개발한 모듈을 모두 Es6로 직접 작성해서 수정하기에는 무리가 있고 모듈이 많아
 - ES6를 ES5로 트랜스 파일을 해서 사용하게 되었다.
 - 손으로 일일히 수정하기에는 무리가 있기 때문에 탄생하게 되었다.

## babel사용
common.js
```js
//a.js
const text = "hello";
const text2 = "hello2";

module.exports = {text,text2};


const {text,text2} = require("./a.js")

```

ES6
```js
//a.js
const text ='hello';
const text2 = 'hello2';

//여러개 내보내는 경우
export {text,text2};
//하나만 내보내는 경우
export default text;

// 여러개 내보낼 경우 구조분해할당으로 여러개를 받을 수 있다.
import {text,text2} from './a.js';

import text from './a.js';
```

ES6문법은 우리가 개발환경에서 편하게 작성하기 위해서 사용하는 문법

### babel
 - babel은 기본적으로 자바스크립트로 구성되어있다.
 - npm으로 설치를 해서 사용

 ```sh
    # --save-dev === -D : 개발 의존성 설치
    npm install -D @babel/core @babel/cli @babel/preset-env
 ```

 ### babel의 환경 설정
 - 변환을 하기 전에 우리가 원하는 형태로 변환하기 위해서 설정이 필요하다.
 - .babelrc 파일을 만들어서 속성 설정 값을 작성
 ```json
 {
    // 기본 preset설정
    "preset":["@babel/preset-env"]
 }
 ```  
 > babel 컴파일
 ```sh
npx babel ["변환할 파일의 경로"] --out-file "내보낼 경로" 
 ```

> babel 컴파일 es6 commonjs(import, require) 모듈 시스템
```sh
npm install @babel/plugin-transform-modules-commonjs
```

> babel의 컴파일 jsx 문법 -> javascript문법
```sh
npm install -D @babel/preset-react
```

## babel의 사용 목적
 - 자바스크립트의 컴파일러 es6 jsx문법같은 자바스크립트 문법을 트랜스파일해서 브라우저에서 이해할 수 있는 자바스크립트의 문법으로 변환한다.
 

## Webpack의 사용목적
- 모듈 번들러의 역할을 해준다.
- 여러개의 js파일이나 css등의 작업한 내용의 파일을 하나의 번들 파일로 묶어준다.
- 프로젝트의 실행 속도가 빨라진다.
- react는 webpack을 사용해서 작업파일을 번들로 묶어서 배포를 진행

## 모듈 번들러
- 웹을 구성할 때 다양한 파일과 기능을 작성한 작업파일을 가지고 웹페이지를 그리는데 최소한의 파일만 가지고 컴파일을 진행한다.
(웹페이지의 로딩 속도를 개선)
- 모듈 :  프로그램을 구성하는 구성 요소
- 번들러 : 의존성이 있는 모듈 코드들을 파일로 만들어준다. 파일을 하나로 묶어서 만들어주는 역할

## webpack의 속성
1. entry : 진입점 지정, 시작점으로 사용할 모듈을 webpack에게 알려줌
2. output : 번들링해서 내보내는 경로
3. loadres : 번들링 중에 모듈의 소스 코드에 적용되는 자바스크립트나 css파일을 어떻게 처리할건지
4. plugins : 추가로 사용할 플러그인들 사용, html파일 생성, 번들을 최적화 , 환경변수 세팅 등등

## webpack 실행
```sh
npm install -D webpack webpack-cli
npx webpack
```


## style설정
```sh
npm install -D webpack webpack-cli css-loader
```


## webpack jsx babel 설정 
```sh
#jsx -> js 바벨변환 html 생성
npm install webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader html-webpack-plugin react react-dom
```