import styled from 'styled-components';

// styled.생성할태그명`css의 구문`
export const Body = styled.div`
    width : 100%;
    min-height : 500px;
    background-color : blue;

    & > form{
        display: block;
        width:500px;
        min-height: 400px;
        margin: auto;
    }
    .name{

    }
    /* 내부에서 태그나 클래스 명처럼 선택자를 지정하여 스타일을 설정할 수도 있다.
    & 기호는 부모를 지칭하는 것으로 & > 선택자 는 부모 바로 아래있는 자식 요소를 뜻한다.
    */
`
export const Header = styled.div`
    width : 100%;
    min-height: 80px;
    background-color: ${props => props.color || 'rebeccapurple'} ;
    display: center;
    justify-content: center;
    align-items: center;
`

export const Footer = styled.div`
    width: 100%;
    min-height : 80px;
    background-color: red;
`
