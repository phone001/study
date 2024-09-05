import { Button } from '../atoms/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getUserAction } from '../../action';
export const Form = () => {
    // store에 접근해서 전역상태를 참조
    // useSelector : store의 상태를 탐조할 수 있게 도와주는 hook함수
    // useSelector로 참조하면 가져온 상태를 주시하게 된다.
    // 주시하고 있는 값이 변하면 해당 컴포넌트가 리렌더링
    // 매개변수로 콜백함수 전달
    // 콜백함수에서 반환된 값을 주시한다.
    // 콜백함수의 매개변수로 현재 상태를 할당해준다.
    const order = useSelector((state) => state.orderReducer.order);
    const dispatch = useDispatch();
    console.log(order)
    const handlerOrder = (e) => {
        if (e.target.innerText === "김치볶음밥 주문") {
            // await axios.get ===이런 부분은 함수로 정이 액션 크리에이터 함수
            //dispatch({ type: "김치볶음밥", payload: {} }) // 매개변수로 함수를 전달하면 액션 크리에이터 함수로 처리를 한다.
            // dispatch(async (dispatch, getState) => {
            //     // getState 현재 상태의 객체
            //     const data = await axios.get()
            //     return { type: "김치볶음밥", payload: {} }
            // }) // 매개변수로 함수를 전달하면 액션 크리에이터 함수로 처리를 한다.
            dispatch(getUserAction("계란볶음밥"))
        }
        else if (e.target.innerText === "계란볶음밥 주문") {
            // dispatch({ type: "계란볶음밥", payload: {} })
            dispatch(getUserAction("계란볶음밥"))
        }
    };
    return (
        <>
            <h1>{order === "" ? "주문하시겠습니까?" : `${order}나왔습니다.`}</h1>
            <Button onClick={handlerOrder}>김치볶음밥 주문</Button>
            <Button onClick={handlerOrder}>계란볶음밥 주문</Button>
        </>
    )
}