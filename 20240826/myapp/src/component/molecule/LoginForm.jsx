import React, { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from 'recoil';
import { Login, LoginCheck } from '../recoil/CountAtom';
const LoginForm = () => {
    //const [loginState, setLoginState] = useRecoilState(Login)
    const [uidInput, setUidInput] = useState("");
    const [upwInput, setUpwInput] = useState("");

    const setLoginState = useSetRecoilState(Login);
    const loginState = useRecoilValue(Login)
    const loadableLoginState = useRecoilValueLoadable(LoginCheck);
    const resetLoginState = useResetRecoilState(Login)
    const loginHandler = (e) => {
        e.preventDefault();
        const { uid, upw } = e.target;
        setLoginState({ uid: uid.value, upw: upw.value })
    }
    useEffect(() => {
        console.log(loginState);
        const { state } = loadableLoginState;
        switch (state) {
            case "hasError":
                console.log("초기화")
                resetLoginState();
                break;
            case "hasValue":
                console.log("로그인 성공")
                break;
            case "loading":
                console.log("로그인 중")
                break;
            default:
                break;

        }
    }, [loadableLoginState])
    useEffect(() => {
        console.log(loginState)
    }, [loginState])

    const uidIputHandler = (e) => {
        setUidInput(e.target.value);
    }
    const upwIputHandler = (e) => {
        setUpwInput(e.target.value)
    }
    return (
        <form onSubmit={loginHandler}>
            <label htmlFor="">아이디</label>
            <input type="text" name='uid' onChange={uidIputHandler} />
            <label htmlFor="">비밀번호</label>
            <input type="password" name='upw' onChange={upwIputHandler} />
            <button>로그인</button>
        </form>
    )
}

export default LoginForm
