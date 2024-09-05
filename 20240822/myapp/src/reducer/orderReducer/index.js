// reducer함수
// 초기값을 기본으로 할당

// 기본값이 할당
// 초기에는 기본값이 사용된다.
const initialState = {
    order: ""
}
const reducer = (state = initialState, action) => {
    // state초기에는 기복밧으로 할당한 initialState가 할당되고 
    // 상태를 업데이트한 이후에는 이전 상태값을 할당해준다.

    const { type, payload } = action;
    console.log(type)
    switch (type) {
        case "김치볶음밥":
            return { ...state, order: "김치볶음밥" };
        case "계란볶음밥":
            return { ...state, order: "계란볶음밥" };
        default:
            return state;
    }
}

export default reducer;