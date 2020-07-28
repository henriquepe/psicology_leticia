
import React from 'react'
import {Link, HeaderDiv, Header} from '../../styled-components/menu/menu';

const Menu = () => {
    return (
        <Header>
        <HeaderDiv>
            <Link href='/'>Sobre</Link>
            <Link href='#'>Psicologia</Link>
        </HeaderDiv>
        </Header>
    )
}

export default Menu;