import { Login } from "../atoms/styleNodes/Styles"
import { Link } from 'react-router-dom'
import Logout from "../page/Logout"
import { useSelector } from "react-redux"
const AuthHeader = () => {
    const user = useSelector(state => state) || false;
    console.log(user.login)
    if (user.login)
        return (<>
            <Logout />
        </>)

    return (
        <Login>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
        </Login>
    )
}
export default AuthHeader;