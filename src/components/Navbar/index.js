import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
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
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <React.Fragment>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Allard Lavaritte</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/' onClick={toggleHome}>Art</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/store" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Store</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/tutorial" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Tutorial</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/blog" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/aboutthewebsite' smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar;