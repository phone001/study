import React from 'react'


const MyPage = ({ loginInfo }) => {
    return (
        <div>
            여기는 마이페이지 내 아이디는 :{loginInfo?.uid}
        </div>
    )
}

export default MyPage
