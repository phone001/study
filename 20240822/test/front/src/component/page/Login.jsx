import React from 'react'
import Form from '../molecule/Form';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../reducer/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const loginInputs = [
        { name: "userID", type: "text", children: "아이디" },
        { name: "userPW", type: "password", children: "비밀번호" }
    ]
    const nav = useNavigate();
    //const user = useSelector(state => { console.log(state) });
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        const { userID, userPW } = e.target;
        const data = {
            userID: userID.value,
            userPW: userPW.value
        }
        //console.log(user)
        //dispatch(loginAction("LOGIN", data))
        try {

            const response = await axios.post("http://localhost:4000/auth/login", data, {
                withCredentials: true
            });
            console.log(response)
            if (response.status === 200 || response.status === 201) {
                //로그인 완료
                const { data: { info: { userID } } } = response;
                dispatch({ type: "LOGIN", payload: { user: userID } });
                nav("/")
            }
        } catch (e) {
            console.log(e)
            alert("계정확인필요");
        }
    }
    return (
        <>
            <Form data={loginInputs} onSubmit={submitHandler}>
                로그인
            </Form>
        </>
    )
}

export default Login
