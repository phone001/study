import React, { useEffect, useState } from 'react';
import Boom from '../components/Boom';
import GameOver from '../components/Boom';
import { useNavigate } from 'react-router-dom';

const BoomGame = (props) => {
    const [startCount, setStartCount] = useState(3);
    const [reStartCount, setReStartCount] = useState(0);
    const [over, setOver] = useState(false);
    const [count, setCount] = useState(0);
    const [boom, setBoom] = useState(Math.floor(Math.random() * 9));
    const [boomCount, setBoomCount] = useState(9);

    const gameOver = () => {
        setOver(true);
    }


    const initBoom = () => {
        return (Array(boomCount).fill().map((e, index) => <Boom gameOver={over} setValue={index === boom ? gameOver : setCount} Count={count} Over={over} Index={index} />))
    }

    const Restart = () => {
        setOver(false);
        setStartCount(3);
        setCount(0);
    }

    useEffect(() => {
        console.log("변경이 일어남")
    })

    const countStart = () => {
        setTimeout(() => {
            setStartCount(startCount - 1);
        }, 1000);
        return (
            <div className='counter'>
                <h2>{startCount}</h2>
            </div >
        )
    }

    const gameStart = () => {
        return (
            <div className="boom-game-manger">
                <span>{count}</span>
                {over ? <div></div> : initBoom()}
                <div>
                    <button onClick={Restart}>재시작</button>
                </div>
            </div>
        )
    }
    return (
        <>
            {startCount === 0 ? gameStart() : countStart()}
        </>
    )
}


export default BoomGame
