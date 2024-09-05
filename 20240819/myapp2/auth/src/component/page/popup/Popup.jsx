import { Sign } from '../main/Main.style';
import { Dim, Wrap, Header, Body, Footer, Input, Button, Form, H2, Span, Label } from './Popup.style';
const Popup = ({ setType, title, setUsers, setIsSign, users }) => {

    const Signup = (e) => {
        e.preventDefault();
        const { uid, password } = e.target;
        const user = users.filter(e => e.uid === uid.value);
        if (user.length > 0) return;
        const data = {
            uid: uid.value,
            password: password.value
        }
        setUsers(data);
        setType(null);
    }

    const Signin = (e) => {
        e.preventDefault();
        const { uid, password } = e.target;
        const data = users.filter(e => e.uid === uid.value && e.password === password.value);
        if (data.length > 0) { setIsSign(true); setType(null); };
    }

    const close = () => {
        setType(null);
    }

    return (
        <Dim>
            <Wrap>
                <Header>
                    <H2>{title}</H2>
                    <Span onClick={close}>끄기</Span>
                </Header>

                <Body>
                    <Form onSubmit={title === '회원가입' ? Signup : Signin}>
                        <Label>아이디</Label>
                        <Input type='text' name="uid" />
                        <Label>비밀번호</Label>
                        <Input type='password' name="password" />
                        <Button>{title}</Button>
                    </Form>
                </Body>
                <Footer />
            </Wrap>
        </Dim>
    )
}
export default Popup;