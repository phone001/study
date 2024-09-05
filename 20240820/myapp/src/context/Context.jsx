import React, { useState, createContext } from 'react';
import A from './A';
// context객체를 생성
// Store 전역상태를 관리할 인스턴스
// 
export const Store = createContext();

export const Context = () => {
    const [login, setLogin] = useState(false);
    // 전역상태로 관리
    const obj = {
        login, setLogin
    }
    return (
        <div>
            {/* 
            Store.Provider 전역상태를 공유할 부모컴포넌트를 감싸준다. 
            전역 상태로 관리할 값을 value key로 props로 전달
            */}
            <Store.Provider value={obj}>
                <A></A>
            </Store.Provider>
        </div>
    )
}