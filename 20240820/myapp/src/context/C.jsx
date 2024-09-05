import React, { useContext } from 'react'
import { Store } from './Context';
const C = () => {
    // 전역 상태 가져오기
    const { login, setLogin } = useContext(Store);

    return (
        <div>
            {login ? "로그인 됐음" : "로그인 안됐음"}
        </div>
    )
}

export default C
