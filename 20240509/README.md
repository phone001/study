## 동기
> 직렬적적으로 작업을 수행한다.

## 비동기
> 병렬적으로 작업을 수행한다.

## 스레드
> 일하는 사람의 숫자
> 싱글 스레드 => 혼자 일을 처리한다.
> 싱글 스레드의 경우 혼자 일을하기 때문에 하나의 작업이 끝나면 다음 작업을 수행한다.

## 자바 스크립트의 비동기 처리
1. web api      => Dom과 같다.
2. test queue   => 이벤트 발생 후 호출되어야할 콜백이 싸이는 공간, 이벤트 루프가 정한대로 기다린다.
3. event loop   => 이벤트가 발생하고 호출될 콜백함수를 관리 순서를 결정해준다.

```js
console.log("안녕");  //1. 전역 객체 이후 콜 스택에 쌓이고 실행된 후 스택에서 제거
console.log("안녕2"); //2. 위의 내용이 스택에서 제거 되면 해당 코드가 콜스택에 쌓이고 실행된 후 제거
console.log("안녕3"); //3. 위의 내용이 스택에서 제거 되면 해당 코드가 콜스택에 쌓이고 실행된 후 제거

// 지정된 시간 이후 콜백함수 실행
// 첫번째 인자값은 콜백함수
// 두번째 인자값은 지정될 시간(밀리초-ms 단위)
// 아래의 코드는 1초 후 콘솔에 "안녕"이라는 문자열을 출력한다.
setTimeout(()=>{
    console.log("안녕");
},1000)


```
## 이벤트 루프
> 정한 순서대로 나열되어있는 콜백함수들을 콜스택이 비워지면 순서대로 호출해서 실행한다. `콜백 큐`
> 실행 순서를 정해준다. 
> 비동기적 자바스크립트 처리 코드가 종료되지 않아도 대기하지 않고 다음 코드줄을 실행하는 자바스크립트 특성(싱글 스레드)
> 비동기 처리를 위해 이벤트 루프 특성을 사용한다. 

### setTimeout
> 콜 스택에 쌓여있는 내용을 모두 처리하고 호출을 하기 때문에 정확하지 않다.

### 비동기 처리
> 서버로 데이터 요청을 보내고 응답을 받고 처리해야 하는 코드를 기다리고 처리함
> 웹 페이지의 다른 코드들을 우리가 서버의 데이터를 받는 동안 웹페이지가 안뜨거나 다른 코드들이 멈춰있을 수 없기 때문에

## promise객체
> 비동기처리를 할 때 사용
> 대기, 성공, 실패의 반환값과 메서드를 가지고 있는 객체

```js
const promise = new Promise((res,rej)=>{
    //1초 뒤에 성공 결과나옴
    setTimeout(()=>{
        res("성공");
    },1000)
    if("성공"){
        res();
        return "성공"
    }else{
        //실패
        rej();
        return "실패"
    }

});// 프로미스 객체생성
// 인자로 생성자 함수에 콜백함수를 전달한다.
// 첫번째 인자는 성공의 결과를 반환해줄 함수
// 두번째 인자는 실패의 결과를 반환해줄 함수 


// 비동기 처리를 한 뒤에 성공결과를 반환한다.
promise.then(result=>{
    console.log(result);
});

// 비동기 처리를 한 뒤에 실패 결과를 반환한다.
promise.catch(error=>{
    console.err(error);
})

const num = 10;
const promise2 = new Promise((res.rej)=>{
    if(num>5){
        res("num이 5보다 크다");
    }else{
        rej("num이 5보댜 작다");
    }
});

promise2.then(result=>{
    console.log(result)
    }).catch(error=>{
    console.error()
})



const callbackPromise =(text,time)=>{
    return new Promise((res,rej)=>{
        try{
            setTimeout(()=>{
                res(text);
            },time)
        }catch(e){
            //코드가 정산적으로 실행되지 않으면
            rej(e);
        }
    })
}

callbackPromise("text 1",1000)
.then(result=>{
    //then은 promise가 성공하면 전달한 콜백함수 호출
    console.log(result);
    return callbackPromise("text 2",1000); //promise객체 안에 result값으로 할당한다.
}).then(result=>{
    console.log(result);
    return callbackPromise("text 2",1000);
}).then(result=>{
    console.log(result);
    return callbackPromise("text 3",1000);
}).catch(result =>{
    // catch는 실패가 되면 호출되면 실행되는 콜백함수
    console.log(result);
})

// 대기-> 응답을 받으면
// 서버에서 요청을 받는 경우에도 promise
// 대기 상태가 끝날때까지 대기 시키고 이후에 정상적으로 응답받은 값을 가지고
// 데이터를 사용
```

## async와 await 
> ES8에서 탄생한 문법
```js

// async를 붙인 함수는 반환이 promise
const asyncFn = async () => {
    try{
        // const text1 = callbackPromise("text1",1000);
        // Promise객체의 대기상태
        const test1 = await callbackPromise("text1",1000);
        // await 뒤에 promise 대기상태이면 코드를 밑으로 진행시키지 않는다.
        // promise객체의 대기 이후에 처리 결과를 반환
        const test2 = await callbackPromise("text2",1000);
        const test3 = await callbackPromise("text3",1000);
        return test1;
    }catch(e){
        console.error(e);
    }
}
console.log(asuncFn());
```

주의할 점
then ~catch와 async/await를 같이 사용하지 마라.
같이 사용하면 잘 모르고 사용했다.

### 실습
> 1초마다 1씩 5까지 증가되는 비동기 처리를 해서 함수로 작성해보자