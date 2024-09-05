import styled from "styled-components";

//dim은 뒤에 backgound 전체를 차지하는 영역
export const Dim = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.1);
    /* opacity: 0.4; */
    display: flex;
    justify-content: center;
    align-items : center;
    position: relative;
    z-index: 1000;
`
export const Wrap = styled.div`
    background-color: white;
    width:500px;
    height: 500px;
    border-radius: 10px;
`
export const Header = styled.div`
    height: 50px;
    position: relative;
    //width : calc(100% - 100px);
    //margin-left : 50px;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const H2 = styled.h2`
    
`
export const Span = styled.span`
    position: absolute;
    right:20px;
`

export const Body = styled.div`
    display: flex;
    justify-content: center;
    height: calc(100% - 100px);
`
export const Footer = styled.div`
    height: 50px;
`
export const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Label = styled.label`
    
`
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding:3px 6px;
    margin:10px 0;
    outline: none;
    border-radius: 6px;
    box-sizing:border-box;
    border:1px solid;
`
export const Button = styled.button`
    width: 100%;
    height: 30px;
    border-radius: 6px;
    font-size: 16px;
    color: black;
    background-color: white;
    border:1px solid gray;
`