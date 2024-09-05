import React, { useEffect } from 'react'
import { AuthAction, Auth, UserInfo } from '../../recoil/State'
// import { useSelector } from 'react-redux'
import axios from 'axios'
import { useRecoilValue, useResetRecoilState, useSetRecoilState, useRecoilState } from 'recoil'
import { Login } from '../atoms/styleNodes/Styles'

const Logout = () => {
    // const { user } = useSelector(state => state);
    const [login, setLogin] = useRecoilState(Auth);

    const loginReset = useResetRecoilState(Auth);
    const userReset = useResetRecoilState(UserInfo);

    const logoutHandler = async () => {
        const result = await axios.post("http://localhost:4000/auth/logout", {}, {
            withCredentials: true
        })
        if (result.status == 200 || result.status === 201) {
            loginReset();
            userReset();
        }
    }
    useEffect(() => {
        console.log(login)
    }, [login])
    return (
        <Login>
            <span>{login.currentUser}회원</span>
            <span onClick={logoutHandler}>로그아웃</span>
        </Login>
    )
}

export default Logout
