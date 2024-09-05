import React from 'react';
import Form from '../molecule/Form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const signUpInputs = [
        { name: "userID", type: "text", children: "아이디" },
        { name: "userPW", type: "password", children: "비밀번호" },
        { name: "name", type: "text", children: "이름" }
    ]
    const nav = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const { userID, userPW, name } = e.target;
        const data = {
            userID: userID.value,
            userPW: userPW.value,
            name: name.value
        }
        try {
            const response = await axios.post("http://localhost:4000/auth/signup", data, {
                withCredentials: true
            });
            console.log(response)

            if (response.status === 200 || response.status === 201) {
                alert("회원가입 완료");
                nav('/login')
            }
        } catch (e) {
            console.log(e)
            const { response: { status } } = e
            console.log(status)
            if (status === 409) {
                alert("이미 가입된 계정입니다.")
            }
        }
    }
    return (
        <Form data={signUpInputs} onSubmit={submitHandler}>
            회원가입
        </Form>
    )
}

export default SignUp
