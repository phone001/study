import React, { useEffect } from 'react';

const Player = ({ name, select, result }) => {
    useEffect(() => {
        console.log(name)
    }, [])
    let tempResult = result
    if (name === '컴퓨터' && (result !== '무승부' && result !== '대기')) {
        tempResult = result === '무승부' ? '무승부' : result === '이겼다' ? '졌다' : '이겼다.'
    }
    return (
        <div className='player'>
            <div className='player-name'>{name}</div>
            <img className="img-select" src={select && select.img} alt="" />
            <div className='player-result'>{tempResult}</div>
        </div>
    )
}

export default Player;