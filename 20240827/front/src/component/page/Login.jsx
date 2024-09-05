import React, { useEffect, useMemo, useState } from 'react'
import Form from '../molecule/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useRecoilStateLoadable, useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { AuthAction, Auth, SignIn, UserInfo } from '../../recoil/State'
import Loadding from '../molecule/Loadding';



const Login = () => {
    const loginInputs = [
        { name: "userID", type: "text", children: "아이디" },
        { name: "userPW", type: "password", children: "비밀번호" }
    ]
    const nav = useNavigate();
    //const user = useSelector(state => { console.log(state) });
    const [login, setLogin] = useRecoilState(UserInfo);
    const [action, setAction] = useRecoilStateLoadable(SignIn);

    useEffect(() => {
        console.log(action.state)
        switch (action.state) {
            case "hasError":
                return;
            case "hasValue":
                setAction({ currentUser: action.contents.info.name, login: true })
                nav("/")
                return;
            case "loading":
                console.log("로딩");
                return;
            default:
                return;
        }

    }, [action.state])

    if (action.state === "loading") {
        return (<Loadding />)
    }



    const submitHandler = (e) => {
        e.preventDefault();
        const { userID, userPW } = e.target;
        const data = {
            userID: userID.value,
            userPW: userPW.value
        }
        setLogin(data);





        // try {


        // const response = await axios.post("http://localhost:4000/auth/login", data, {
        //     withCredentials: true
        // });
        // if (response.status === 200 || response.status === 201) {
        //     //로그인 완료
        //     const { data: { name } } = response;
        //     setLogin({ login: true, user: name });
        //     nav("/")
        // }
        // } catch (e) {
        //     console.log(e)
        //     alert("계정확인필요");
        // }
    }
    return (
        <>

            <Form data={loginInputs} onSubmit={submitHandler} >
                로그인
            </Form>
        </>
    )
}

export default Login
