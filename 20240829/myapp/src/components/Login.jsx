import React from 'react'
import useInput from '../hook/useInput';
import { useMutation, useQuery } from '@tanstack/react-query'
import { getUsers, signup } from '../api/index';

const Login = () => {
    const uid = useInput();
    const upw = useInput();
    const uidlogin = useInput();
    const upwlogin = useInput();


    const { data, isLoading, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: getUsers,
        suspense: true,
    })
    console.log(isLoading)
    const mutation = useMutation({
        mutationFn: signup,
        onSuccess(_data) {
            refetch()
        }
    })
    const handlerLogin = () => {

    }
    const handlerSignup = () => {
        mutation.mutate({ uid: uid.value, upw: upw.value });
    }
    return (
        <>
            <div>
                users<br />
                {data.map((el, index) => <div key={index}>{el.uid}</div>)}

            </div>
            <div>
                <h2>로그인</h2>
                <label htmlFor="">id</label>
                <input type="text"{...uidlogin} />
                <label htmlFor="">pw</label>
                <input type="password" {...upwlogin} />
                <button onClick={handlerLogin}>로그인</button>
            </div>
            <div>
                <h2>회원가입</h2>
                <label htmlFor="">id</label>
                <input type="text"{...uid} />
                <label htmlFor="">pw</label>
                <input type="password" {...upw} />
                <button onClick={handlerSignup}>회원가입</button>
            </div>
        </>
    )
}

export default Login
