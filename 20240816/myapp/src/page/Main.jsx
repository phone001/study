import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
    // 반환 값이 함수
    // naviagte:페이지 이동을 시켜주는 함수가 할당
    const naviagte = useNavigate();

    const handler = () => {
        naviagte('/game')
    }


    return (
        <div>
            <Link to={"/boom"}>boom페이지로 이동</Link><br></br>
            <Link to={"/game"}>rook페이지로 이동</Link><br></br>
            <button onClick={handler}>페이지 이동</button>
        </div>
    )
}

export default Main


// boom 게임을 화살표 함수 컴포넌트로 만들고
// 메인페이지 boom페이지, 게임 오버 페이지 
// 메인 페이지에서 게임시작을 누르면 3 2 1게임 페이지로 전환
// 플레이를 하다가 게임오버 페이지 점수를 보여줄 것
// 재시작 버튼을 누르면 다시 메인 페이지