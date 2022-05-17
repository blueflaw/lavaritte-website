import React from 'react'
import { FaArtstation, FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Icon from '../../../images/LogoInverted.gif';
import {
    AboutContainer, WebsiteContainer, WebsiteContent, ContentH1, ContentP, DP, ContentLocation, ContentLink, WebsiteContentBio, WebsiteContainerBio, 
    ContentBio, WebsiteContentIlike, WebsiteContainerIlike, Listwrapper, List, AboutQuoteContainer, AboutQuotes, AboutQuotesWriter, ContentH4, ListP, 
    BtnWrap, DonateButton, GetInTouchWrapper, GetInTouchLink, SocialWrapper, CreatedBy, SocialLogo, Gotinspired, GetInTouchRow, Column1, Column2, ImgWrap, Img, ImagelWrapper
} from './TheWebsiteElements'
import { FaMapMarkedAlt, FaExternalLinkAlt } from 'react-icons/fa';
import InfoSection from '../../InfoSection';
import { About1, About2, About3, About4 } from './Data';

const TheWebsite = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
    };
    return (
        <AboutContainer id='about'>
        <WebsiteContainer>
            <WebsiteContent>
                <DP src='https://cdnb.artstation.com/p/users/avatars/000/190/863/large/02dbe259f43d1792bc174f3c536c8d4e.jpg?1594753021'></DP>
                <ContentH1>Allard Lavaritte</ContentH1>
                <ContentP>UI/UX &amp; Freelance Artist</ContentP>
                <ContentLocation><FaMapMarkedAlt/> Davao City, Philippines</ContentLocation>
                <ContentLink href="//www.artstation.com/blueflaw" target="_blank" aria-label="ArtStation">blueflaw.artstation.com <FaExternalLinkAlt/></ContentLink>
            </WebsiteContent>
        </WebsiteContainer>

        <AboutQuoteContainer>
            <AboutQuotes>“You can do anything you set your mind to.”</AboutQuotes>
            <AboutQuotesWriter>- Benjamin Franklin</AboutQuotesWriter>
        </AboutQuoteContainer>

        <WebsiteContainerBio>
            <WebsiteContentBio>
            <ContentH1>Intro</ContentH1>
            <ContentBio>
                Allard Lavaritte is a web designer / Freelance Artist Based in the Philippines. 
                Allard has established his artistic style and process, merging cutting-edge 3D graphics with traditional art and 
                animation aesthetics that result in a unique visual experience.His innovative approach to artistic medium expressed both in his works 
                and educational materials have led a wave of artistic styles that quickly became mainstream in the entertainment industry.
                <br/> <br/>
                As a self-taught artist, Allard brought unique visual styles that defined world. His innovative approach to concept art helped build the visual identity of 
                projects such as The Chronicles of my melancholic existence and Some other project.
            </ContentBio>
            </WebsiteContentBio>
        </WebsiteContainerBio>
       
        <WebsiteContainerIlike>
            <WebsiteContentIlike>
            <ContentH1>What I stick to</ContentH1>
            <Listwrapper>
                <List>
                    <ContentH4>keep it simple</ContentH4>
                    <ListP>Literally. Keeping things clear wherever I can, even when it seems impossible.</ListP>
                </List>
                <List>
                    <ContentH4>up-front usability</ContentH4>
                    <ListP>It should go like clockwork. Stable and reliable experience is foremost.</ListP>
                </List>
                <List>
                    <ContentH4>impact based</ContentH4>
                    <ListP>Focused on clearing challenges for the sake of your progress.</ListP>
                </List>
            </Listwrapper>
            </WebsiteContentIlike>
        </WebsiteContainerIlike>

        <AboutQuoteContainer>
            <AboutQuotes>What I stand for</AboutQuotes>
        </AboutQuoteContainer>
        <InfoSection {...About3}/>
        <InfoSection {...About4}/>

        <InfoSection {...About1}/>
        <InfoSection {...About2}/>

        <AboutQuoteContainer>
            <AboutQuotes>Think we're a good fit? get in touch ^-^</AboutQuotes>
            <GetInTouchRow imgStart={true}>
            <Column2>
                <ImagelWrapper><ImgWrap><Img src={Icon} /></ImgWrap></ImagelWrapper>
            </Column2>
            <Column1>
            <SocialWrapper>
                <GetInTouchLink href="//www.facebook.com/blueflaw.art" target="_blank" aria-label="Facebook"><FaFacebook/> facebook</GetInTouchLink>
                <GetInTouchLink href="//www.instagram.com/blueflaw_" target="_blank" aria-label="Instagram"><FaInstagram/> instagram</GetInTouchLink>
                <GetInTouchLink href="//www.artstation.com/blueflaw" target="_blank" aria-label="ArtStation"><FaArtstation/> artstation</GetInTouchLink>
                <GetInTouchLink href="//www.youtube.com/channel/UCQ6-hj3JK97f2wxIJ9tYkTg" target="_blank" aria-label="Youtube"><FaYoutube/> youtube</GetInTouchLink>
                <GetInTouchLink href="//twitter.com/NotAllard" target="_blank" aria-label="Twitter"><FaTwitter/> twitter</GetInTouchLink>
                <GetInTouchLink href="//www.twitch.tv/blueflaw_" target="_blank" aria-label="Twitch"><FaTwitch/> twitch</GetInTouchLink>
                <CreatedBy>Created by <SocialLogo to="/" onClick={toggleHome}>Allard Lavaritte</SocialLogo> © {new Date().getFullYear()} Davao City, Philippines</CreatedBy>
            </SocialWrapper>
            </Column1>
            </GetInTouchRow>
        </AboutQuoteContainer>

        <AboutQuoteContainer>
            <Gotinspired>Got inspired? Copied the theme? Or do you just like the website? No problem, just buy me a Burger and make me happy!</Gotinspired>
            <BtnWrap><DonateButton href={'https://www.paypal.com/donate/?hosted_button_id=ZB7H6RJ7UZSN8'} target="_blank" dark={'dark'} big={'big'}>Donate</DonateButton></BtnWrap>
        </AboutQuoteContainer>
        </AboutContainer>
        
    )
}

export default TheWebsite
