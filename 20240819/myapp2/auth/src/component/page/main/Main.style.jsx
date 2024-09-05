import { styled } from 'styled-components';

export const Header = styled.div`
    width:100%;
    min-height: 80px;
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #c1c1c1;
    position:relative;
`
export const H1 = styled.h1`
`

export const Body = styled.div`
    width:100%;
    min-height: 500px;
    height: calc(100vh - 80px - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height: 100px;
    background-color: #c1c1c1;
`
export const Sign = styled.div`
    position: absolute;
    right: 10px;
`
export const Span = styled.span`
    cursor: pointer;
    margin: 0 10px;
`