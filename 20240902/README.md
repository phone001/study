# Nextjs
> vercel이라는 미국의 클라우드 컴퓨팅 회사 
> 오픈 소스로 배포중
> react의 확장 프레임워크
> 벨로그나 카카오 등등 대기업에서 사용중이다.
> react로 개발을 할 때 더 확정된 편환 기능을 제공한다.(페이지 라우팅, 최적화등)

## Nextjs의 라우팅
1. page Router
2. app Router

## Nextjs CSR SSR pre-render
> 브라우저에서 요청을 받으면 HTML완성해서 응답해주는 방식
> CSR의 단점을 극복한 것
> 브라우저 - > 서버 -> 서버에서 HTML완성 -> 브라우저로 응답
> CSR은 js를 읽어서 동적으로 생성해서 렌더링을 해주는 구조
> CSR은 페이지의 이동이 모척 빠르지만 대신 초기 로딩이 느리다.
> nextjs는 초기 로딩이 느린 단점을 보완했다.
- CSR : 브라우저 > 서버 > 빈 HTML root태그 있는 index.html > 브라우저 > 브라우저에 bundle.js > 브라우저에서 js를 실행해서 컨텐츠를 동적으로 생성( 빈 HTML을 받아서 보여주고 js를 받아서 동적으로 렌더링을 하는 과정이 오래걸린다.)

## nextjs의 pre-render
> 브라우저 > 서버 > 서버측에서 js를 실행해서 동적으로 html을 완성 -> 브라우저(완성된 화면이 보이는 상태, 상호작용은 안되는 상태) > 서버에서 브라우저에게 bundle.js를 받고(상호작용)(hydration 개념) > 브라우저(CSR로 처리, 페이지의 이동의 이점)
- 처음 페이지에 접근할 때는 느릴수 있으나 이후에는 캐싱으로 인해 빠르다

### CSR
> 자바스크립트를 사용해서 브라우저에 렌더링을 하는 것, 동적으로 생성하는 걸 브라우저에서 차리한다.

### SSR
> 서버에서 완전히 렌더링 된 페이지를 브라우저에서 응답을 받아서 렌더링 처리를 한다.

### Nextjs 설치
```sh
npx create-next-app [설치할 폴더 이름]
npx create-next-app myapp

# 타입스크립트를 사용할지 
✔ Would you like to use TypeScript?  Yes
# 코드 작성이 문제가 될수 있는 패턴을 식별할지?
✔ Would you like to use ESLint? Yes
# 테일윈드 CSS를 사용할지
✔ Would you like to use Tailwind CSS?  Yes
# src 디렉터리를 사용할지
✔ Would you like to use `src/` directory?  Yes
# app 라우터를 사용할지
✔ Would you like to use App Router? (recommended)  Yes
# 경로에 별칭을 붙일것인가. 개발할 때만 씀
✔ Would you like to customize the default import alias (@/*)? … No 

```

### src
1. page.tsx : 페이지를 담당하는 파일, 우리가 보는 페이지 단위
2. layout.tsx : 레이아웃을 담당하는 파일

nextjs는 빌드를 해야한다.
개발단계에서는 dev를 사용
```sh
npm run dev
```

## app Router
> page.tsx가 페이지의 라우팅을 처리하는 역할
> src기준으로 page가 /페이지
> 폴더를 만들면 어떻게 되나?
> mypage폴더를 만들고 폴더 안에 page.tsx를 만들면 
> /mypage
> /mypage/test === mypage폴더안에 test폴더안에 page.tsx

```sh
app
- page.tsx ===/

mypage
- page.tsx === /mypage
-- test
   - page.tsx === /mypage/test

detail
- page.tsx === /detail
- [index] === /detail/index의 값
```

- 동적 라우팅의 경우
> params값을 사용해서 동적 라우팅 처리를 하고 싶은 경우
> 폴더명을 대괄호 표기볍을 사용해서 만들면 된다
> 폴더명 안에 사용할 파라미터의 이름을 작성해면 됨


> 쿼리스트링과 params는 컴포넌트의 props에 객체로 할당된다.

## layout
> 레이아웃의 파일이 있는 경로붵 적용페이지의 시작점
```sh
app
- layout.tsx ===/ 경로로 시작하는 모든 페이지의 레이아웃

mypage
- layout.tsx === /mypage 경로로 시작하는 모든 페이지의 레이아웃
-- test
   - layout.tsx === /mypage/test 경로로 시작하는 모든 페이지의 레이아웃

detail
- layout.tsx === /detail 경로로 시작하는 모든 페이지의 레이아웃
- [index] === /detail/index의 값
```

> layout이 있는 경루부터 시작 경로 layoyt이 경로 안에 또 있으면 중복된다.
> layout파일에는 children으로 page의 내용을 할당해준다.
> 경로의 상위의 layout이 먼저 적용된다.


### 레이아웃 관리 팁
> 레이아웃을 다룰 때 상위의 경로에서 레이아웃이 적용되는 것을 막고싶다.

### 라우트 그룹핑
> 원하는 페이지들을 묶어서 레이아웃을 관리할 수 있다.
> 레이아웃 단위로 묶을 수 있다.
> 폴더에 () 소괄호로 폴더를 작성하면 라우트 그룹으로 만들어준다.
> (레이아웃 네이밍) 레이아웃이 공통으로 적용되는 페이지를 묶음으로 해준다.
> () 소괄호 폴더 안에 있는 바로 아래 있는 page파일은 루트경로의 페이지
> 루트 경로에 있는 laytout은 없으면 안된다.(이동하면 안됨)

### nextjs의 클라이언트 컴포넌트와 서버 컴포넌트
> nextjs의 컴포넌트는 몽땅 서버 컴포넌트로 만들어진다.
> 브라우저에서 기능과 실행을 못시킨다.
> react hook을 사용할 수 없다.
> 클라이언트 컴포넌트를 사용해야할 경우 컴포넌트를 만들때 "useClient"
> "use client"를 작성하면 나 이 컴포넌트 클라이언트 컴포넌트로 사용할거야 
> 클라이언트 컴포넌트가 많으면 bundle.js의 양이 많아진다
> 그럼 최적화성능이 떨어진다.
> 최적화 성능을 위해 되도록 적게 사용하는 것이 좋다.

### 서버 컴포넌트 와 클라이언트 컴포넌트를 구분하는 기준과 주의점
> 상호작용이 있는 상태관리를 해야하는 컴포넌트는 클라이언트 컴포넌트로 구성
> 예를 들면 검색했을 때 검색어에 따라 목록이 보여야 한다면 -> 검색창은 클라이언트 컴포넌트 -> 뷰는 서버 컴포넌트
> 서버 컴포넌트를 최대한 많이 사용하면 좋고
> 클라이언트 컴포넌트는 최대한 줄이는게 효율이 좋다.
> 서버 컴포넌트에 기능을 작성할 때 브라우저에서 실행될 코드는 들어가면 안된다.
> 그리고 클라이언트 컴포넌트 내부에 서버 컴포넌트를 import하면 안된다. 클라이언트 컴포넌트에 import된 서버 컴포넌트는 모두 클라이언트 컴포넌트가 된다.
> 어쩔 수 없이 사용해야할 경우가 생기면 서버측에서 만들 때 따로 만들어서 사용할 수 있다.
> props로 전달해서 사용하면 된다.


## 실습
> 메인 페이지가 있고
> 카운트 페이지 있고 
> 게임 페이지가 있음
> main페이지의 레이아웃에 link컴포넌트로 모든 페이지로 이동할 수 있고
> game페이지에는 가위바위보
> main과 game페이지는 공통 레이아웃을 가지고 있다.