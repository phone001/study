
// 커스텀 훅

import useInput from "../../../hooks/useInput"

export const Input = (props) => {
    // 이렇게 쓸수도 있지만 
    // 다른 input에서도 같은 코드를 사용할 경우 
    // 코드가 길어질 수 있음
    // const [value, setValue] = useState("");
    // const onChange = (e) => {
    //     setValue(e.target.value);
    // }
    const userInput = useInput("")
    return (<input {...props} {...userInput} />)
}