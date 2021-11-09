import React from 'react'
import { FaArtstation, FaFacebook, FaInstagram, FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterConainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterQuotes, FooterQuoteContainer,
            FooterLinkTitle, FooterLink, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialMediaWrap, SocialMedia} from './FooterElements'

const Footer = () => {
    return (
        <FooterConainer>
            <FooterWrap>
                <FooterQuoteContainer><FooterQuotes>Stay curious. Stay humble.</FooterQuotes></FooterQuoteContainer>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">Info</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">Info</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">Info</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/signin">Info</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Allard Lavaritte</SocialLogo>
                        <WebsiteRights>Allard Lavaritte © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="//www.facebook.com/blueflaw.art" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="//www.artstation.com/blueflaw" target="_blank" aria-label="ArtStation"><FaArtstation/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitch"><FaTwitch/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterConainer>
    )
}

export default Footer
