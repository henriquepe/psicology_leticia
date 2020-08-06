
import React from 'react'
import {Link, HeaderDiv, Header} from '../../styled-components/menu/menu';

const Menu = () => {
    return (
        <Header>
        <HeaderDiv>
            <Link href='/'>Home</Link>
            <Link href='/about'>Sobre</Link>
            <Link href='#'>Trabalho</Link>
        </HeaderDiv>
        </Header>
    )
}

export default Menu;