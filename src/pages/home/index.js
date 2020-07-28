import React from 'react'
import Menu from '../../components/menu/index'
import {FocusHomeDiv, Section, Footer, MapDiv} from '../../styled-components/menu/menu'


const Home = () => {
    return (
        <>
        <Menu/>
        <Section>
            <FocusHomeDiv></FocusHomeDiv>
        </Section>
        <Footer>
            <MapDiv></MapDiv>
        </Footer>
        </>
    )
}

export default Home;