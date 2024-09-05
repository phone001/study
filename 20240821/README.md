## useCallBack
> 함수의 내용을 메모이제이션 해준다.
```js

const a =()=>{
    const b = 1;
    const c = 2;
    return b + c;
}

a(); //3을 반환
// 함수의 내용을 바꿔도 이전의 내용을 실행한다.

// 메모이제이션된 함수를 반환
// 재연산을 할 지 않할지는 두번째 매개변수로 배열릐 타입을 전달, 
// 배열의 요소는 주시할 값(메모이제이션된 함수의 내용이 바뀌었다고 받아들임)
import {useCallback} from 'react';
const hello = '안녕';
const handlerCallback = useCallback(()=>{
    console.log(hello)
},[]);
// 주시할 값이 없으면 변경을 감지하지 못함
// 주시할 값이 있고 주시할 값이 변경되면 그때 감지하고 데이터가 바뀐다.
handlerCallback();


```

## useReducer
- useState를 대체할 수 있는 hook함수
> useState는 단순한 값의 상태를 다룰때
- 여러개의 상태의 값을 구분지어서 사용할 때 가독성의 이점을 가질수 있다.
> 복잡한 여러개의 상태를 다룰경우
- 비동기 처리시에도 가독성의 장점을 가질 수 있다.

1. state
- 사용할 상태 변수

2. dispatch
- reducer의 함수를 실행시킨다.(상태를 업데이트할 때 사용);
- 객체를 전달을 매개변수로 받아서 상태를 업데이트 시킨다.
- 객체의 내용에는 어떤 행동을 취할거냐의 문자열의 값과 상태를 업데이트할 때 사용할 값
- reducer의 함수의 내용은 조건문으로 작성을 해서 행동의 값을 전달받은 행동의 값을 조건처리해서 상태를 업데이트해준다.
- resucer의 함수 (메뉴판)

3. initialState
- 초기값을 전달할 객체

> reducer는 이전 상태과 action의 객체의 내용을 합쳐서 상태를 업데이트해주면 된다
> useState를 사용할 때 보다 복잡한 상태를 다룰 경우 가독성을 좋게 처리할 수 있다.
```jsx
// dispatch 함수를 호출하면 useReducer로 생성한 상태변수를 업데이터 하기 위해 접근한다.
// 상태변수를 업데이트 하기 위해서는 dispatch함수를 호출해야한다.
<button onclick={()=>{dispatch({type:"login",payload:{uid:"kim",pw:"123"}})}}>클릭</button>



// reducer메뉴판
// 직접만든 함수 
// reducer는 반환값이 꼭 있어야함
const reducer=(state,action)=>{
    // state 처음에는 초기값 이후부터는 현재 업데이트 상태
    // action ==={type:"login",payload:{uid:"kim",pw:"123"}}
    //reducer함수에서 반환되는 값이 상태를 업데이트 시킨다.
    const {type,payload} = action;
    if(type==='login'){
        // 서버로 요청해서 회원 정보 조회를 해서 
        // 비교를 하고
        if(false) return {...state,userInfo:null}};
        return {uid:'kim',nick:'kim'}
    }else if(type==='logout'){

    }else if(type==='signup'){

    }else{
        // 타입이 잘못들어오면 이전 상태를 반환해서
        // 아무 행동도 취하지 않는다.
        return state
    }
}

// 초기값
const initialState={
    userInfo:null
}
const [state,dispatch] = useReducer(reducer,initialState);
```

