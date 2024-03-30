import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArtstation, FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterConainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterQuotes, FooterQuoteContainer,
            FooterLinkTitle, FooterLink, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialMediaWrap, SocialMedia, FooterServices} from './FooterElements';
import ButtonMailto from '../ButtonMailto';
import ReactGA from 'react-ga';

const Footer = () => {
    useEffect(() =>{
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    const bio = 700;

    const toggleHome = () => {
        scroll.scrollToTop();
        window.isNavNFTActive = false;
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
    };
    const toAbout = () => {
        window.isNavNFTActive = false;
        window.isNavStoreActive = false;
        window.isNavAboutActive = true;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = false;
    };
    return (
        <FooterConainer>
            <FooterWrap>
                <FooterQuoteContainer><FooterQuotes>Stay curious. Stay humble.</FooterQuotes></FooterQuoteContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Connect</FooterLinkTitle>
                            <ButtonMailto label="me@lavaritte.com" mailto="mailto:me@lavaritte.com" />
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Info</FooterLinkTitle>
                            <FooterLink to="/about" smooth="true" duration={500} spy="true" exact="true" offset={-80} onClick={()=>{
                                scroll.scrollTo(bio);
                                toAbout();
                            }}>Biography</FooterLink>
                            <FooterLink to="/about" smooth="true" duration={500} spy="true" exact="true" offset={-80} onClick={() =>{
                                scroll.scrollToTop();
                                toAbout();
                            }}>The Creation of this website</FooterLink>
                            <FooterLink to="/faq">FAQ</FooterLink>
                            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Services</FooterLinkTitle>
                            <FooterServices >Creative Direction</FooterServices>
                            <FooterServices >Concept Art</FooterServices>
                            <FooterServices >Graphic Design</FooterServices>
                            <FooterServices >UI/UX</FooterServices>
                            <FooterServices >Illustration</FooterServices>
                            <FooterServices >Cinematography</FooterServices>
                            <FooterServices >Animation</FooterServices>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Director</FooterLinkTitle>
                            <FooterLink to="/" onClick={toggleHome}>Allard Lavaritte</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Allard Lavaritte</SocialLogo>
                        <WebsiteRights>Allard Lavaritte © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/blueflaw.art" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/waitoflaw" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="//www.artstation.com/blueflaw" target="_blank" aria-label="ArtStation"><FaArtstation/></SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/channel/UCQ6-hj3JK97f2wxIJ9tYkTg" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="//twitter.com/NotAllard" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="//www.twitch.tv/blueflaw_" target="_blank" aria-label="Twitch"><FaTwitch/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterConainer>
    )
}

export default Footer
