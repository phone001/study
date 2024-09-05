import React from 'react'
import { Login } from '../atoms/styleNodes/Styles'
import { state } from '../state/state'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Logout = () => {
    const { user } = useSelector(state => state)
    const dispath = useDispatch();
    const logoutHandler = async () => {
        await axios.post("http://localhost:4000/auth/logout", {}, {
            withCredentials: true
        })
        dispath({ type: "LOGOUT", payload: { user: null } })
    }
    return (
        <Login>
            <span>{user}회원</span>
            <span onClick={logoutHandler}>로그아웃</span>
        </Login>
    )
}

export default Logout
