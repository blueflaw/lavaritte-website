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
        window.isNavNFTActive = false;
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
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
                            <NavLinks activeNav={window.isNavHomeActive} onClick={toggleHome} to='/'>Art</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeNav={window.isNavNFTActive} onClick={() => {
                                window.isNavNFTActive = true;
                                window.isNavStoreActive = false;
                                window.isNavAboutActive = false;
                                window.isNavTutorialsActive = false;
                                window.isNavBlogctive = false;
                                window.isNavHomeActive = false;
                            }} to="/NFT" smooth={true} duration={500} spy={true} exact="true" offset={-80} >NFT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeNav={window.isNavStoreActive} onClick={() => {
                                window.isNavNFTActive = false;
                                window.isNavStoreActive = true;
                                window.isNavAboutActive = false;
                                window.isNavTutorialsActive = false;
                                window.isNavBlogctive = false;
                                window.isNavHomeActive = false;
                            }} to="/store" smooth={true} duration={500} spy={true} exact="true" offset={-80} >Store</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeNav={window.isNavTutorialsActive} onClick={() => {
                                window.isNavNFTActive = false;
                                window.isNavStoreActive = false;
                                window.isNavAboutActive = false;
                                window.isNavTutorialsActive = true;
                                window.isNavBlogctive = false;
                                window.isNavHomeActive = false;
                            }} to="/tutorial" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Tutorial</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeNav={window.isNavBlogctive} onClick={() => {
                                window.isNavNFTActive = false;
                                window.isNavStoreActive = false;
                                window.isNavAboutActive = false;
                                window.isNavTutorialsActive = false;
                                window.isNavBlogctive = true;
                                window.isNavHomeActive = false;
                            }} to="/blog" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeNav={window.isNavAboutActive} onClick={() => {
                                window.isNavNFTActive = false;
                                window.isNavStoreActive = false;
                                window.isNavAboutActive = true;
                                window.isNavTutorialsActive = false;
                                window.isNavBlogctive = false;
                                window.isNavHomeActive = false;
                            }} to='/about' smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
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