import styled from 'styled-components' 


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

`;

export const FocusHomeDiv = styled.div`
    background: url('https://lh3.googleusercontent.com/pxDzFh4d4EZteoJX66Zvw-re8ibK4l4QIQ2XGrg8MGSFWXO-6EoIWWqpSMB1Ev-8650WxMJOd0Kk7uTzelOpNDSlHG4vmZ6aXEU9t_M262JKPF0-UneTBH5JrmYTZEo32T6H-OlgE9iwKRNDlw5DkgeYSQp_pmoEtq8cQUUQWkG1ezqvHzpsifeGlxxUDPPaqI-17b4y3_lF3m3TcD0aOM8Y05kJXpcu5NaUFXhWOLC5Zi4tcyTx8ys7AaiG_MNGdwlYYKCytL23R50t4eUutK9SpL9OBWnGDVL1mfrz-vcxRbaZ9Kiuu8E15cpUgdlaJJiIHdU8K96TeRjkbH9YJggarwyS_Fs0EmhFuEHuSZsCCaCFsigAdiBIb0dtm5sWESzdg-gBa5YUsFJtxca80oXy5T4YyBsDT4tIoE-1_cM2pUbJ0CtHSL_MxVQFRieUZ-qDgwdumAgXXInGejmCYlfb5Z0zEHnS7AbKcRgJXZNsy1JWNtuhqvIoglC294sfKEbq5J1L5iZLOVx72BeQXPBaEM-mIU41-97o9vGd80iqLxb96Jsviwdm3RYx3Ap5fclIUcWNsvC81xIlaMjTEmOQToYJft9gXrhoOc_h2rh_1Hslo7JiWbM-rj2CCmKBPMqOzEYU71K4w9wizAGHoWLSurch5aCbgnPxl1oFF5S6zdthlsuICA_IswrcpQ=w1280-h485-no?authuser=0');
    width: 100%;
    height: 435px;
    background-position: center;
    background-repeat: no-repeat;

`;

// FOOTER

export const Footer = styled.footer`


`

export const MapDiv = styled.div`
    


`





