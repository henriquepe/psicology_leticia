/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Menu from '../../components/menu/index'
import {FocusHomeDiv, Section, SocialMedia, List, Facebook, Instagram, Youtube, Footer} from '../../styled-components/menu/menu'


const Home = () => {
    return (
        <>
        <Menu/>
        <Section>
            <FocusHomeDiv></FocusHomeDiv>
        </Section>
        <SocialMedia>
            <strong>Redes Sociais</strong>
            <List>
                <Facebook>
                    <a target='_blank' href="https://www.facebook.com/leticia.rosa.355">
                        <img id='facebook' src="https://image.flaticon.com/icons/svg/747/747374.svg" alt="Facebook"/>
                    </a>
                </Facebook>
                <Youtube>
                    <a target='_blank' href="https://www.youtube.com/user/leeh825/featured?view_as=subscriber">
                        <img id='youtube' src="https://image.flaticon.com/icons/svg/1077/1077046.svg" alt="Youtube"/>
                    </a>
                </Youtube>
                <Instagram>
                    <a target='_blank' href="https://www.instagram.com/_leticiarosa_/">
                        <img id='instagram' src="https://image.flaticon.com/icons/svg/733/733614.svg" alt="Instagram"/>
                    </a>
                </Instagram>
            </List>
        </SocialMedia>
        <Footer>
            <div>
                
            </div>
        </Footer>
        </>
    )
}

export default Home;