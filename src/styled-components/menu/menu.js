import styled from 'styled-components' 


export const Link = styled.a`
    font-size: 16px;   
    text-decoration: none;
    color: #FFF;

    & + a {
        margin-left: 30px;
    }
    
`

export const Header = styled.header`

`

export const HeaderDiv = styled.div`
    width: 100%;
    text-align: center;
    padding: 32px;
    border-bottom: 1px solid gray;
    background-color: #333;
    border-radius: 0px 0px 10px 10px;
`
