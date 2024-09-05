import React, { useEffect, useState } from 'react';
import Player from '../components/Player';
import { rook, scissors, paper } from '../imgs/index';


const Game = () => {
    const [playerSelect, setPlaySelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState('대기');

    // 결과를 도출하기 위한 필요한 데이터의 값과 이미지 둘다 필요한 상황
    // 객체로 두가지의 값을 다루자
    const select = {
        scissors: {
            name: "가위",
            img: scissors
        },
        rook: {

            name: "바위",
            img: rook
        },
        paper: {
            name: "보",
            img: paper
        }
    }

    const comSelectHandler = () => {
        // scissors,rook,paper
        // ["scissors", "rook", "paper"]
        // 객체의 키를 문자열로 배열의 요소로 포함해서 배열을 반환한다.
        const temp = Object.keys(select);
        const index = Math.floor(Math.random() * 3)
        setComSelect(select[temp[index]])
        console.log("컴 ", comSelect)
    }

    const handlerPlayerSelect = (_select) => {
        //console.log(select[_select]);
        setPlaySelect(select[_select]);
        comSelectHandler();
    }

    const handlerResult = () => {
        // 플레이어
        // 가위 === 가위 무승부
        // 가위 === 바위 패
        // 가위 === 보 승

        //바위  === 바위 무승무
        // 바위 === 가위 승
        // 바위 === 보 패

        // 보===보 무승부
        // 보===가위 패
        // 보 ===바위 승

        if (playerSelect.name === comSelect.name) {
            setResult("무승부");
        } else if (playerSelect.name === '가위') {
            const _result = comSelect.name === "보" ? "이겼다" : "졌다";
            setResult(_result);
        } else if (playerSelect.name === '바위') {
            const _result = comSelect.name === "가위" ? "이겼다" : "졌다";
            setResult(_result);
        } else if (playerSelect.name === '보') {
            const _result = comSelect.name === "바위" ? "이겼다" : "졌다";
            setResult(_result);
        }
    }
    useEffect(() => {
        if (!comSelect) return;
        handlerResult();
    }, [comSelect])
    return (
        <div className='game-board'>
            <Player name="플레이어" select={playerSelect} result={result}></Player>
            <Player name="컴퓨터" select={comSelect} result={result}></Player>
            <div>
                <button onClick={() => handlerPlayerSelect("scissors")}>가위</button>
                <button onClick={() => handlerPlayerSelect("rook")}>바위</button>
                <button onClick={() => handlerPlayerSelect("paper")}>보</button>
            </div>
        </div>
    )
}
export default Game;