import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

export const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home'>Allard Lavaritte</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='art'>Art</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='tutorials'>Tutorials</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;