import React from 'react';
import { CountAtom, pagenation } from './recoil/CountAtom';
import { useRecoilState } from 'recoil';
const Count = () => {
    const [count, setCount] = useRecoilState(CountAtom);
    const [pagination, setPagenation] = useRecoilState(pagenation);
    const increament = () => {
        setCount({ ...count, num: count.num + 1 });
    }
    const decreament = () => {
        setCount({ ...count, num: count.num - 1 });
    }

    const pageIncreament = () => {
        setPagenation()
    }
    return (
        <>
            count : {count.num}
            <button onClick={increament}>증가</button>
            <button onClick={decreament}>감소</button>
            페이지 : {pagination}
            <button onClick={pageIncreament}>페이지 증가</button>
        </>
    )
}

export default Count
