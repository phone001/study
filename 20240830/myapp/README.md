# Infinite Queries
> 무한으로 데이터를 표현할 때 무산 스크롤이나 더보기 같은 요청로직을 처리할 때 
> 사용하면 좋다.

> 캐시 메모리 관리도 유용하다.
```js

import {useInfiniteQeury} from '@tanstack/react-query';
const {
    data, // 요청에 따른 값을 할당
    hasNextPage, // 다음 페이지가 존재하는지 여부 boolean값
    fetchNextPage,// 다음 페이지로 이동하는 요청
    isFetchingNextPage //다음 페이지를 로딩하는 중 여부 boolean값
    
} = useInfiniteQuery({
    queryKey:['pagenation'], // 고유의 유니크 키 캐시메모리 관리로 내부적으로 사용
    queryFn:apiFn, // 요청할 비동기 함수
    initialPageParamns:1, // 요청의 값의 초기값 예) 페이지 넘버
    getNextPageParams(lastPage,allPage){
        // lastPage는 마지막으로 가져온 내용
        // allPage 지금까지 가져온 전체 페이지
        // 반환한 결과에 따라서 다음페이지가 있는지 여부를 체크
        return allPage.legnth<10?allPage.length + 1:undefined;
    }
});

```

# joTai
