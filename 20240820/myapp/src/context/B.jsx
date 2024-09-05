import React, { useContext } from 'react'
import C from './C';
import { Store } from './Context'
const B = () => {
    const { login, setLogin } = useContext(Store);
    return (
        <div>
            <button onClick={() => setLogin(e => !e)}>{login ? "로그아웃" : "로그인"}</button>
            <C></C>
        </div>
    )
}

export default B
