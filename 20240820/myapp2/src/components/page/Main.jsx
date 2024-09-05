import { createContext, useEffect, useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export const Auth = createContext();
const Main = () => {
    const [login, setLogin] = useState(false);
    const [users, setUsers] = useState([]);
    const obj = {
        setLogin,
        setUsers,
        users
    }
    useEffect(() => {
        console.log(users);
    }, [users, login])
    return (
        <Auth.Provider value={obj}>
            {login ? "로그인 됨" : "로그인 안됨"}
            <Login />
            <SignUp />
        </Auth.Provider>
    )
}
export default Main;