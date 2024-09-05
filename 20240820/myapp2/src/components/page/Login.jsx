
import { useContext } from 'react';
import Forms from '../molecules/Forms';
import { Auth } from './Main';
const Login = () => {
    const { users, setLogin } = useContext(Auth);
    const array = [
        { htmlFor: 'uid', id: 'uid', type: "text", name: "uid", children: "아이디" },
        { htmlFor: 'upw', id: 'upw', type: "password", name: "upw", children: "비밀번호" }
    ]
    const onSubmit = (e) => {
        e.preventDefault();
        const { uid, upw } = e.target;
        const exist = users.find((e) => e.uid === uid.value && e.upw === upw.value);
        if (exist)
            setLogin(true)

    }
    return (
        <Forms data={array} onSubmit={onSubmit}>로그인</Forms>
    )
}
export default Login;