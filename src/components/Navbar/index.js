import React, {useState, useEffect,} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import ScrollUp from '../ScrollUp/Index';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

export const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    var [loadHome, setHome] = useState(false);
    var [loadportfolio, setPortfolio] = useState(false);
    var [loadTutorial, setTutorial] = useState(false);
    var [loadBlog, setBlog] = useState(false);
    var [loadAbout, setAbout] = useState(false);

    const changeNav= () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        const pathname = window.location.pathname;
        window.addEventListener('scroll', changeNav);
        
        if(pathname === '/' || pathname.indexOf('artwork/') !== -1){
            toggleHome()
            setHome(true)
        }
        if(pathname === '/portfolio' || pathname.indexOf('portfolio/') !== -1){
            togglePortfolio()
            setPortfolio(true)
        }
        if(pathname === '/tutorial' || pathname.indexOf('tutorials/') !== -1){
            toggleTutorial()
            setTutorial(true)
        }
        if(pathname === '/blog' || pathname.indexOf('blogs/') !== -1){
            toggleBlog()
            setBlog(true)
        }
        if(pathname === '/about'){
            toggleAbout()
            setAbout(true)
        }

        return () => {
            setScrollNav(null);
        }
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
        window.isNavNFTActive = false;
        window.isNavportfolioActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
        window.isNavShowcaseActive = false;
    };

    const togglePortfolio = () => {
        window.isNavNFTActive = false;
        window.isNavportfolioActive = true;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = false;
        window.isNavShowcaseActive = false;
    };

    const toggleTutorial = () => {
        window.isNavNFTActive = false;
        window.isNavportfolioActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = true;
        window.isNavBlogctive = false;
        window.isNavHomeActive = false;
        window.isNavShowcaseActive = false;
    };

    const toggleBlog = () => {
        window.isNavNFTActive = false;
        window.isNavportfolioActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = true;
        window.isNavHomeActive = false;
        window.isNavShowcaseActive = false;
    };

    const toggleAbout = () => {
        window.isNavNFTActive = false;
        window.isNavportfolioActive = false;
        window.isNavAboutActive = true;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = false;
        window.isNavShowcaseActive = false;
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
                            <NavLinks $activeNav={loadHome} onClick={toggleHome} to='/'>Home</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks $activeNav={loadShowcase} onClick={toggleShowcase} to="/showcase" smooth="true" duration={500} spy="true" exact="true" offset={-80} >Showcase</NavLinks>
                        </NavItem> */}
                        {/* <NavItem>
                            <NavLinks $activeNav={loadNFT} onClick={toggleNFT} to="/NFT" smooth="true" duration={500} spy="true" exact="true" offset={-80} >NFT</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks $activeNav={loadportfolio} onClick={togglePortfolio} to="/portfolio" smooth="true" duration={500} spy="true" exact="true" offset={-80} >Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks $activeNav={loadTutorial} onClick={toggleTutorial} to="/tutorial" smooth="true" duration={500} spy="true" exact="true" offset={-80}>Tutorial</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks $activeNav={loadBlog} onClick={toggleBlog} to="blogs.lavaritte.com" smooth="true" duration={500} spy="true" exact="true" offset={-80}>Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks $activeNav={loadAbout} onClick={toggleAbout} to='/about' smooth="true" duration={500} spy="true" exact="true" offset={-80}>About</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to ='/signin'>Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
            <ScrollUp/>
        </React.Fragment>
    )
}

export default Navbar;