import styled from "styled-components";
import backImg from '../../../imgs/backImg.jpeg';
import loadingImg from '../../../imgs/loading.gif'

export const SInput = styled.input`
    outline: none;
    padding: 3px 6px;
    border-radius: 6px;
    font-size:14px;
`

export const SLabel = styled.label`

`
export const SButton = styled.button`
    width: 100%;
    height: 30px;
    border-radius: 6px;
    background-color: white;
    border: 1px solid;
    font-size: 16px;
    margin-top: 10px;
`
export const SForm = styled.form`
    width: 250px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SHeader = styled.div`
height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const SBody = styled.div`
    min-height: calc(100% - 80px - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Login = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`
export const Dim = styled.div`
    width: 600px;
    height: 600px;
    opacity: 0.8;
    background-color: white;
    border-radius:10px;
`

export const SMain = styled.div`
    height: 100vh;
    background-image: url(${backImg});
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SInputs = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`
export const Loading = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${loadingImg});
    background-repeat: no-repeat;
    background-size: cover;
`