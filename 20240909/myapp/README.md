# nextjs 비동기 처리
> 14 버전 기준으로 로딩관련 페이지 정리

```js
// async를 사용해서 비동기 서버 컴포넌트를 만들 수 있다.
import axios from 'axios';

export default async function Home() {
    // 비동기 처리 로직이 완성되면 처리이후에 페이지를 반환한다.
    // 대기되는 동안 로딩 화면을 보여줘야한다.
    // 서버 컴포넌트 비동기 처리를했을 때 이전과 같은 로딩 구현이 안됨
      const { data } = await axios.get("http://localhost:4000");
  if (!data) return <>로딩중</>
  return (
    <div className="">

    </div>
  );
}
```
> 로딩을 다룰수 있는 파일을 제공해준다. 컴포넌트를 작성할 수 있게
> loading.tsx이름의 파일로 작성을 하면 빋오기 처리 과정에서 이 컴포넌트를 노출 시켜준다.

## nextjs server action
> nextjs의 요청 응답처리
> nextjs의 server action을 사용하는 경우는 민감한 데이터를 처리할 경우 소켓 사용X ex) 소셜 로그인 같은 건 server action에서 사용을 하는 것이 좋다. 혹은 쿠키 관련 로직 처리
> 사용이 편하다. 코드의 복잡성이 상승할 수 있기 때문에 무분별하게 사용하면 안좋다.
> API 서버에 요청을 보내서 데이터 관련 로직을 처리할 때 사용, 소켓도 여기서 사용한다.

- api 서버는 데이터를 비동기적으로 관리하는 것, 백엔드의 구조를 분리한 것
- server action은 ssr 페이지 로드시 서버의 데이터에 따라서 처리를 해야하는 경우 렌더링 관련해서 유용하다.

> handlerForm을 작성해서 전달을 action={handlerForm}에 작성하게 되면 api를 만들어준다. 메서드는 post
```js
import axios from 'axios';

export default async function Home() {

  const handlerForm = async (e) => {
    "use server"
    console.log("안녕");
  };

  return (
    <div className="">
      {/* action의 서버로 요청을 한다. */}
      <form action={handlerForm}>
        
        <button>클릭</button>
      </form>
    </div>
  );
}

```

> server action을 사용할 때 고유 해시값을 만들어서 준다.
> 내부적으로 api를 구분할 때 사용됨
```js
  [Symbol(state)]: [
    {
      name: '$ACTION_ID_c1eeda16fad7a511b0ef4bf892d17b2218616a6a',
      value: ''
    },
    { name: 'uid', value: 'test' },
    { name: 'upw', value: 'test' }
  ]
  //use server를 작성하면 api를 만들어준다.
```


## tailwind
> 런타임 환경이 없다.
> 로그인 작성
> 기본 문법
> CLI로 라이브러리 설치해서 사용하는 방식
> POST CSS webpack등이 번들링한다.
> CDN
> 페이지의 렌더링이 더 빠르다. 모듈화가 가능
