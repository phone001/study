import React, { useEffect, useReducer } from 'react'
import { INCREMENT, DECREMENT } from './Const'
// 자주사용할 상수 정리

const Reducer = () => {
    const initialState = {
        count: 0,
        login: false
    }
    // 메뉴판
    const reducer = (state, action) => {
        const { type, payload } = action;
        // 어떤 행동을 취할건지
        // payload상태를 업데이트할 때 필요한 값
        switch (type) {
            case INCREMENT:
                return { ...state, count: state.count + payload.count };
            case DECREMENT:
                return { ...state, count: state.count - 1 };
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const handlerIncrement = () => { dispath({ type: INCREMENT, payload: { count: 2 } }) }
    const handlerDecrement = () => { dispath({ type: DECREMENT }) }

    useEffect(() => {
        console.log(state.login)
    }, [state.login])
    return (
        <div>
            count : {state.count}
            login : {state.login ? "로그인 됨" : "로그인 안됨"}

            <button onClick={handlerIncrement}>증가</button>
            <button onClick={handlerDecrement}>감소</button>
        </div>
    )
}

export default Reducer

// useContext + useReducer를 사용해서 로그인 페이지 구현
// 회원가입 페이지 구현

// 자식이 dispatch를 사용할 수 있다.  