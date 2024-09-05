import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const Detail = () => {
    const Item = [
        {
            count: 10, name: "이쁜 셔츠", num: "10010"
        }, {
            count: 9, name: "벙거지 모자", num: "10001"
        }, {
            count: 11, name: "찢어진 바지", num: "20001"
        }
    ]
    const [detailInfo, setDetail] = useState(null);
    const param = useParams();
    // useSearchParams 초기화 반환값이 배열의 형태
    // 파싱된 쿼리스트링의 내용, 쿼리스트링을 변경할 때 
    const [query, setQuery] = useSearchParams();
    useEffect(() => {

        setTimeout(() => {
            // const [item] = Item.filter((e) => e.num === param.num);
            // console.log(item)
            // setDetail(item)

            // query string 사용
            // console.log(query.get("name"))
            const name = query.get('name');
            const [item] = Item.filter((e) => e.name === name)
            setDetail(item)
            // 원하는 형태로 파싱을 해야하는 경우
            // setQeury를 사용해서 변경하고 사용한다.
        }, 2000);
    }, [])

    if (!detailInfo) return <div>로딩중</div>
    return (
        <div>
            상세페이지<br></br>
            {detailInfo.name}<br />
            {detailInfo.count}개
        </div>
    )
}

export default Detail


// 로그인 페이지를 만들어서 로그인 기능을 더미데이터로 구현
// 회원가입만들고 상태변수로 회원 정보를 저장