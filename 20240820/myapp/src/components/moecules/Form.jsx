import React from 'react';
import { Input } from '../atoms/login/Input';
import { Label } from '../atoms/login/Label';
import { Button } from '../atoms/login/Button'
const Form = () => {
    const handlerLogin = (e) => {
        e.preventDefault();
        const { uid: { value: uidVaule }, upw: { value: upwValue } } = e.target;
        console.log(uidVaule, upwValue);


    }
    return (
        (<form onSubmit={handlerLogin}>
            <Label>아이디</Label>
            <Input></Input>
            <Label>비밀번호</Label>
            <Input></Input>
            <Button>로그인</Button>
        </form>)
    )
}

export default Form;