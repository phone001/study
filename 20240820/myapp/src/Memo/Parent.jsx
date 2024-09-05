import React, { useState } from 'react';
import Child from './Child';
const Parent = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);
    return (
        <div>
            <Child item={item}></Child>
            <h1>
                {count}
            </h1>
            <button onClick={() => { setCount((e) => e + 1) }}>증가</button>
            <button onClick={() => { setItem((e) => e + 1) }}>자식 증가</button>
        </div>
    )
}
export default Parent;