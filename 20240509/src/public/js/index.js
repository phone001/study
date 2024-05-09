
/*setTimeout(() => {
    console.log("안녕")
}, 5000)

const promise = new Promise((res, rej) => {
    //1초 뒤에 성공 결과나옴
    setTimeout(() => {
        res("성공");
    }, 5000)
    setTimeout(() => {
        rej("실패");
    }, 3000)
});

promise.then(result => {
    console.log(result) // 비동기 처리 이후에 반환된 값도 비동기 처리를 해야하는 경우
}).then(result2 => {
    console.log(result2)// 비동기 처리를 한 번 더 하고 result2에 반환한다.
}).catch((error) => {
    console.error(error)
});

function callback(fn) {
    fn();
}

// 콜백지옥 : 콜백에서 다시 콜백을 계속 사용함, 주로 비동기 처리에서 발생함
callback(() => {
    console.log("안녕1");
    callback(() => {
        console.log("안녕2");
        callback(() => {
            console.log("안녕3");

        })
    })
})



const num = 10;
const promise2 = new Promise((res, rej) => {
    if (num > 5) {
        res("num이 5보다 크다");
    } else {
        rej("num이 5보다 작다");
    }
})

promise2.then(result => {
    console.log(result)
}).catch(error => {
    console.error(error)
})

console.log(promise2.then())


function add(num) {
    return num + 1;
}
function addPromise(addfn, num) {
    return new Promise((res, rej) => {
        rej("오류");

    })
}
console.log("test", addPromise(add, 1)
    .catch(error => {
        console.log(error)
        return error
    }).then(res => res))

addPromise(add, 1)
    .catch(error => {
        console.log(error)
    })
    .then(result => {
        console.log(result)
    })
const promise4 = new Promise((r, e) => { e(1) })
console.log("123", promise4.catch(e => e))

// then이 catch보다 나중에 작성된 경우
// 에러 처리(catch)에서의 작업 여부에 대한 성공 여부를 판단함
// 에러 처리에서 문제가 있을 경우 반환된 값이 프로미스면 then은 실행되지 않는다.

async function b() {
    const a = await ajax.get() //Promise
    console.log(a);
}


const promise3 = new Promise((res, rej) => {
    // 서버에 요청을 보냈다.
    const data = {
        result: "성공"
        , data: [
            {
                id: 1,
                name: 2,
                age: 3
            },
            {
                id: 1,
                name: 2,
                age: 3
            },
            {
                id: 1,
                name: 2,
                age: 3
            }
        ]
    }
    if (data.result === "성공") {
        res(data);
    } else {
        rej("요청 실패")
    }
});
promise3.then(({ data }) => { console.log(data) }).catch(error => { console.log(error) })



const callbackPromise = (text, time) => {
    return new Promise((res, rej) => {
        try {
            setTimeout(() => {
                res(text);
            }, time)
        } catch (e) {
            //코드가 정산적으로 실행되지 않으면
            rej(e);
        }
    })
}
*/

const callbackPromise = (text, time) => {
    return new Promise((res, rej) => {
        try {
            setTimeout(() => {
                res(text);
            }, time)
        } catch (e) {
            //코드가 정산적으로 실행되지 않으면
            rej(e);
        }
    })
}

/*
callbackPromise("text 1", 1000)
    .then(result => {
        //then은 promise가 성공하면 전달한 콜백함수 호출
        console.log(result);
        //return new Error("에러발생")
        return callbackPromise("text 2", 1000); //promise객체 안에 result값으로 할당한다.
    }).then(result => {
        console.log(result);
        return callbackPromise("text 2", 1000);
    }).then(result => {
        console.log(result);
        return callbackPromise("text 3", 1000);
    }).catch(result => {
        // catch는 실패가 되면 호출되면 실행되는 콜백함수
        console.log(result);
    })
*/

const asyncFn = async () => {
    try {
        // const text1 = callbackPromise("text1",1000);
        // Promise객체의 대기상태
        const test1 = await callbackPromise("text1", 1000);
        console.log(test1)
        // await 뒤에 promise 대기상태이면 코드를 밑으로 진행시키지 않는다.
        // promise객체의 대기 이후에 처리 결과를 반환
        const test2 = await callbackPromise("text2", 1000);
        console.log(test2)
        const test3 = await callbackPromise("text3", 1000);
        console.log(test3)
        return test1;
    } catch (e) {
        console.error(e);
    }
}
console.log(asyncFn());

async function a() {
    await asyncFn();
    console.log("안녕");
}
