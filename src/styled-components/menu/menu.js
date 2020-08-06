import styled from 'styled-components' 
import background_1280 from '../../assets/background_1280.png';


// MENU

export const Header = styled.header`
`

export const HeaderDiv = styled.div`   
    text-align: center;
    padding: 32px;
    border-bottom: 1px solid gray;
    background: rgba(0, 0, 0, 1);
`

export const Link = styled.a`
    font-size: 16px;   
    text-decoration: none;
    color: #fff;
    transition: color 600ms;

    & + a {
        margin-left: 30px;
    }

    &:hover {
        opacity: 0.7;
        color: #F5EDED;

    }
    
`



// APRESENTAÇÃO - ABOUT


export const PresentationDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`

export const ImageDiv = styled.div`
    width: 500px;
    height: 500px;
    background: url('https://media-exp1.licdn.com/dms/image/C4D03AQFYrCF5Yi5f6w/profile-displayphoto-shrink_400_400/0?e=1601510400&v=beta&t=umpViq2UJWDmgqTzwrTVxdhciNT0_lelw8AiKqKCDD4') no-repeat center;
    border-radius: 50%;


`


// HOME

export const Section = styled.section`
    width: 100%;
    height: 435px;
    background-color: #F5EDED;

    @media (max-height: 720px) {
        height: 390px;
    }

`;

export const FocusHomeDiv = styled.div`
    background: url(${background_1280});
    width: 100%;
    height: 435px;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0 40px;

    @media(max-width: 500px) {
        background-size: 700px;
    }   

`;

// FOOTER

export const SocialMedia = styled.div`
    width: 100%;
    padding-top: 32px;   
    text-align: center;

    

    
    strong {
        font-size: 24px;

    }

`

export const List = styled.div`
    padding-bottom: 32px;
    padding-top: 32px;
    width: 300px;   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
    margin: 0 auto;

    @media(max-width: 340px){
       display: flex;
       flex-direction: column;
       width: 100px;
      
    }

    @media (max-height: 720px) {
        padding-top: 10px;
    }

    
    

    div {

    }

`


export const Facebook = styled.div`
    a {
        img {

            transition: transform 0.2s;

            &:hover {
                transform: translateY(-10px);
            }
        }
    }


`



export const Instagram = styled.div`
    a {
        img {

            transition: transform 0.2s;

            &:hover {
                transform: translateY(-10px);
            }
        }
    }

`



export const Youtube = styled.div`
    a {
        img {

            transition: transform 0.2s;

            &:hover {
                transform: translateY(-10px);
            }
        }
    }

`

export const Footer = styled.footer`

    
    height: 100vh;
    display: flex;
    place-items: flex-end;
    
    div {
    
        width: 100%;
        height: 40px;
        background: #000;
    }

    @media (max-height: 720px) {
        top: 24px;
    }


`





