// input을 사용할 때 재사용성이 높은 기능을 hook으로 정리

import { useState } from "react"

const useInput = (initialValue) => {
    // value와 onChange 변수명을 정한 이유는 
    // 태그에 속성으로 전달을 할 것이기 때문에
    const [checked, setCheck] = useState(false);
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => {
        console.log(e.target.value);
        // 정규식 체크 부분을 넣을 수 있다 .
        setValue(e.target.value);
    }
    return { value, onChange }
}
export default useInput;