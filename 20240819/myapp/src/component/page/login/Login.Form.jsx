import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = ({ loginInfo: { loginInfo, setLoginInfo } }) => {
    console.log(setLoginInfo)
    // 태그 선택 3가지 방법
    // 1. form으로는 name값을 활용
    // 2. 상태변수로 선언해서 onChange될때마다
    // 3. ref를 사용하는 방법

    // ref초기화
    // 태그의 레퍼런스
    // 태그의 인스턴스에 접근할 수 있게 해주는 레퍼런스
    // 초기에 인스턴스에 접근하기 전에 할당할 초기값
    // 이제는 사용성이 떨어진다.
    // 최적화 관련 좋지않다? 커스텀 훅을 활용하는게 좀더 좋다.
    // 상태변수로 관리하는게 좀 더 효율적
    // current키에 인스턴스가 할당된다.
    // 초기값에 인스턴스가 할당된다.
    const uidInput = useRef(null);
    const pwInput = useRef(null);
    const nav = useNavigate();
    const loginHandler = (e) => {
        e.preventDefault();
        const user = {
            uid: 'kim',
            password: "123"
        }
        if (user.uid === uidInput.current.value && user.password === pwInput.current.value) {
            console.log('맞음')
            setLoginInfo(user);

            nav('/mypage')
        } else {
            console.log('아님')
        }
    }
    useEffect(() => {
        console.log(uidInput.current.value)
    }, [uidInput])

    return (
        <form onSubmit={loginHandler}>
            {/* {children} */}
            <label htmlFor="">아이디</label>
            <input type="text" ref={uidInput} />
            <label htmlFor="">패스워드</label>
            <input type="password" ref={pwInput} />
            <button> 로그인</button>
        </form>
    )
}
export default LoginForm;