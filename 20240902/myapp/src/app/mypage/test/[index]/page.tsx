import React from 'react'

const page = ({ params, searchParams }: { params: { index: string }, searchParams: { a: string } }) => {
    // 서버에서 실행된다.
    // 서버 컴포넌트다
    console.log(searchParams);
    return (
        <div>
            여기는 파람스
            <div>{params.index}</div>
        </div>
    )
}

export default page
