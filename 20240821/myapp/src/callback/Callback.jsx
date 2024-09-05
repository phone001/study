import { useCallback, useState } from "react";

export const Callback = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const handlerIncreament = useCallback(() => {
        setCount(prev => prev + count2);
    }, []);
    const handlerIncreament2 = useCallback(() => {
        setCount2(prev => prev + 1)
    }, [count2]);
    return (
        <>
            <div>
                count : {count}
                <button onClick={handlerIncreament}>count 증가</button>
            </div>
            <div>
                count2 :{count2}
                <button onClick={handlerIncreament2}>count2</button>
            </div>
        </>
    )
    // 무한 스크롤을 만들 때
}