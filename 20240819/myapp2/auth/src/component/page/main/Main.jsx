import { Body, Header, Footer, Span, H1, Sign } from "./Main.style";
import Popup from '../popup/Popup';
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

const Main = () => {
    const [users, setUsers] = useState([]);
    const [isSign, setIsSign] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [popupType, setType] = useState(null);

    const signInPopup = (type) => {
        setIsShow(true);
        setType(type)
    }

    const addUser = (data) => {
        setUsers([...users, data]);
    }
    useEffect(() => {
        console.log(users);
        console.log(isShow)
    }, [users, isShow])
    //if (isShow) return <Popup Show={setIsShow} title="로그인" />

    const Window = () => {
        switch (popupType) {
            case 'signin':
                return <Popup setType={setType} title="로그인" users={users} setIsSign={setIsSign} />
            case 'signup':
                return <Popup setType={setType} title="회원가입" users={users} setUsers={addUser} />
        }
    }

    const Test = () => {
        if (isSign)
            return (
                <Sign>
                    <Span onClick={() => signInPopup('signin')}>마이페이지</Span>
                    <Span onClick={() => setIsSign(false)}>로그아웃</Span>
                </Sign>
            )

        return (
            < Sign >
                <Span onClick={() => signInPopup('signin')}>로그인</Span>
                <Span onClick={() => signInPopup('signup')}>회원가입</Span>
            </Sign >)
    }

    return (
        <>
            <Header>
                <H1>testApp</H1>
                <Test />
            </Header>
            <Body>
                <Window />
            </Body>
            <Footer></Footer>
        </>
    )
}
export default Main;