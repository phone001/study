import React, { useState, useMemo } from "react";

const Memo = () => {
    const [count, setCount] = useState(0);

    const increaments = () => {
        //setCount(count + 1);
        // setState에서 제공된 상태변수를 변경할 수 있는 메서드는 
        // 메개변수의 타입을 검사한다.
        // 함수의 타입이 들어오면 매개변수로 이전의 값을 할당해준다.
        // 함수면 반환하는 값을 저장
        setCount((e) => e + 1)
    }
    const [immutableCount, setImmutableCount] = useState(0);
    // 동일한 연산을 하지 않게 하기 위해서 메모를 사용하자
    // 함수를 하나
    // 메모는 두번째 매개변수로 전달한 값을 주시하다가 이값이 변경되면 새로운 연산을 처라히는 것이라고 받음
    const value = useMemo(() => {
        // 부모의 상태가 변경되서 리렌더링 되도
        // Memo안에 연산은 다시 실행되지 않는다
        console.log("메모호출됨")
        return <h1>value : {immutableCount}</h1>
    }, [immutableCount]);
    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={increaments}>증가</button>
            {value}
        </div>
    )
}
export default Memo;