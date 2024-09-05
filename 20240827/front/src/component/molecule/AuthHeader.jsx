import { Login } from "../atoms/styleNodes/Styles"
import { Link } from 'react-router-dom'
import Logout from "../page/Logout"
import { useRecoilValue } from "recoil"
import { Auth } from "../../recoil/State"
import { useEffect } from "react"
const AuthHeader = () => {
    const { login } = useRecoilValue(Auth);
    useEffect(() => {
        console.log("로그인", login)
    }, [login])
    if (login)
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