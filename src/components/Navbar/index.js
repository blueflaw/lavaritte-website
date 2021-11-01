import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './NavbarElements';

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Allard Lavaritte
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;