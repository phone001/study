import React, { useCallback, useState } from 'react'

const Scroll = () => {
    const [data, setData] = useState([]);
    const [fetchData, setFetchData] = useState([])
    const handlerFetch = useCallback(() => {

        setData(prev => [...prev, fetchData]);
    }, [fetchData]); // 데이터의 값이 바뀌지 않으면 아이템의 갯수는 바뀌지 않는다.

    const handlerScroll = async (e) => {
        if (true) {
            // 스크롤이 화면의 맨밑에 도달했을 때
            setFetchData(await axios.get())
            handlerFetch()
        }
    }
    return (
        <div onScroll={handlerScroll}>
            {data.map((e) => <div>e.name</div>)}
        </div>
    )
}

export default Scroll
