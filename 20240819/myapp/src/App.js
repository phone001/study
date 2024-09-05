import Main from './component/page/main/Main';
import MyPage from './component/page/mypage/MyPage'
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './component/page/login/Login';
import { useState } from 'react';
import Detail from './component/page/detail/Detail';
import Shop from './component/page/shop/Shop';
function App() {
    // 전역에서 필요한 로그인정보 모든 컴포넌트가 필요함
    // 전역상태 배우기 전에 전역상태를 어떤걸 사용해야할까 설계를 하는 사고를 키우자 
    // const [login, setLogin] = useState(false);

    const [loginInfo, setLoginInfo] = useState(null);
    // 컴포넌트가 컴포넌트를 반환
    // 리다리렉트를 시키는 컴포넌트
    const Redirect = () => {
        if (loginInfo) return <MyPage loginInfo={loginInfo} />
        return <Navigate to={'/login'} />
        // 경로가 제일 문자
        // 경로가 /mypage인데 로그인 컴포넌트가 뜸
        // url관리를 못함

        // Navigate컴포넌트 활용 => 리다이렉트 재용청 보냄

    }

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/login' element={<Login loginInfo={{ loginInfo, setLoginInfo }} />}></Route>
                <Route path='/mypage' element={<Redirect />}></Route>
                <Route path='/shop' element={<Shop />}></Route>
                {/* 상세 페이지에서 상태변수로 다루게 되면 공유가 안됨 */}
                <Route path='/detail/:num' element={<Detail />}></Route>
            </Routes>
        </div>
    );
}

export default App;
