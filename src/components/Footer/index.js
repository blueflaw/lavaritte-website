import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArtstation, FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterConainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterQuotes, FooterQuoteContainer,
            FooterLinkTitle, FooterLink, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialMediaWrap, SocialMedia} from './FooterElements';
import ButtonMailto from '../ButtonMailto';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
    };
    return (
        <FooterConainer>
            <FooterWrap>
                <FooterQuoteContainer><FooterQuotes>Stay curious. Stay humble.</FooterQuotes></FooterQuoteContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Connect</FooterLinkTitle>
                            <ButtonMailto label="me@lavaritte.com" mailto="mailto:no-reply@example.com" />
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Info</FooterLinkTitle>
                            <FooterLink to="/" onClick={toggleHome}>Biography</FooterLink>
                            <FooterLink to="/about">The Creation of this website</FooterLink>
                            <FooterLink to="/" onClick={toggleHome}>Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Services</FooterLinkTitle>
                            <FooterLink to="/" onClick={toggleHome}>Creative Direction</FooterLink>
                            <FooterLink to="/" onClick={toggleHome}>Concept Art</FooterLink>
                            <FooterLink to="/" onClick={toggleHome}>Graphic Design</FooterLink>
                            <FooterLink to="/" onClick={toggleHome}>UI/UX</FooterLink>
                            <FooterLink to="/" onClick={toggleHome}>Illustration</FooterLink>
                            <FooterLink to="/" onClick={toggleHome}>Cinematography</FooterLink>
                            <FooterLink to="/" onClick={toggleHome}>Animation</FooterLink>
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
                            <SocialIconLink href="//www.instagram.com/blueflaw_" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
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
