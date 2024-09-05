import React, { useEffect, useState } from 'react';
import BoomImg from "../imgs/boom.png";
import BoomActiveImg from "../imgs/boomActive.jpg";

const Boom = (props) => {
    const [isActive, setIsActive] = useState(false);
    const onClickHandler = () => {
        if (isActive) return;
        if (props.over) return;
        setIsActive(true);
        props.setValue(props.Count + 1);
    }
    return (
        <div>

            <div onClick={onClickHandler} key={props.index}>
                <img src={isActive ? BoomActiveImg : BoomImg} />

            </div>
        </div>
    )
}

export default Boom
