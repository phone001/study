import { useContext } from 'react';
import Forms from '../molecules/Forms';
import { Auth } from './Main';
const SignUp = () => {
    const { users, setUsers } = useContext(Auth);
    const array = [
        { htmlFor: 'uid', id: 'uid', type: "text", name: "uid", children: "아이디" },
        { htmlFor: 'upw', id: 'upw', type: "password", name: "upw", children: "비밀번호" },
        { htmlFor: 'name', id: 'name', type: "text", name: "name", children: "이름" }
    ]
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("회원가입");
        const { uid, upw } = e.target;
        const exist = users.find(e => e.uid === uid.value);
        console.log(exist)
        if (!exist)
            setUsers([...users, { uid: uid.value, upw: upw.value }])

    }
    return (
        <Forms data={array} onSubmit={onSubmit}>회원가입</Forms>
    )
}
export default SignUp;