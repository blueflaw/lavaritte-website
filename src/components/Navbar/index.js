import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

export const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav= () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/'>Allard Lavaritte</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='art' smooth={true} duration={500} spy={true} exact="true" offset={-80}>Art</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='tutorials' smooth={true} duration={500} spy={true} exact="true" offset={-80}>Tutorials</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='blogs' smooth={true} duration={500} spy={true} exact="true" offset={-80}>Blogs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
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