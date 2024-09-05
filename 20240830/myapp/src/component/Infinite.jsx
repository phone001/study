import React, { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPages } from '../api';

const Infinite = () => {
    const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['pagenation'],
        queryFn: getPages,
        initialPageParam: 1,
        getNextPageParam(lastPage, allPage) {
            return allPage.length < 5 ? allPage.length + 1 : undefined;
        },
    })
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <>
            {data.pages.map((page, index) =>
                <div key={index}>
                    {page.map((el, i) => <div key={`content${i}`}>번호 : {el.id} / 제목 : {el.title}</div>)}
                </div>
            )}
            <div>
                <button onClick={fetchNextPage} disabled={!hasNextPage || isFetchingNextPage}>
                    {isFetchingNextPage ? "loading..." : hasNextPage ? "다음 페이지" : "마지막페이지"}
                </button>
            </div>
        </>
    )
}

export default Infinite
