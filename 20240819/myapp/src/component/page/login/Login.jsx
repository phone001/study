import LoginForm from "./Login.Form"

const Login = ({ loginInfo }) => {
    return (
        <LoginForm loginInfo={loginInfo}>
            여기는 로그인 화면
        </LoginForm>
    )
}
export default Login;