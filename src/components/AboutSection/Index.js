import React , {useState, useRef} from 'react'
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { FaArtstation, FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube, FaMapMarkedAlt, FaExternalLinkAlt, FaAngleRight, FaArrowRight} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Icon from '../../images/LogoInverted.gif';
import {
    AboutContainer, WebsiteContainer, WebsiteContent, ContentH1, ContentP, DP, ContentLocation, ContentLink, WebsiteContentBio, WebsiteContainerBio, IbuildContentLeft, 
    IbuildContentRight, ContentBio, WebsiteContentIlike, WebsiteContainerIlike, AboutQuoteContainer, AboutQuotes, AboutQuotesWriter, ContentH4, 
    BtnWrap, DonateButton, GetInTouchLink, SocialWrapper, CreatedBy, SocialLogo, Gotinspired, GetInTouchRow, Column1, Column2, ImgWrap, ButtonDownload,
    Img, ImagelWrapper, DarkContentH1, IContainer, BlueContentH1, IbuildWrapper, ButtonAbout,
} from './AboutElements';

import InfoSection from '../InfoSection';
import { About3, About4 } from './Data';

const TheWebsite = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
    };

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    const treshold = 0.9;
    // ref for our element
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    // All the ref to be observed
    const intersection = useIntersection(sectionRef1,{
        root: null,
        rootMargin: "0px",
        threshold: treshold
    });
    const intersection2 = useIntersection(sectionRef2,{
        root: null,
        rootMargin: "0px",
        threshold: treshold
    });
    //Animation for fading in
    const fadeIn =  element => {
        gsap.to(element, 1, {
            opacity: 1,
            x: 0,
            stagger: { amount: 0.3}
        });
    };

    //Animation for fading out
    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity: 0,
            x: 90,
            ease: 'power4.out'
        });
    };

    intersection && intersection.intersectionRatio < treshold ? fadeOut(".section1") : fadeIn(".section1");
    intersection2 && intersection2.intersectionRatio < treshold ? fadeOut(".section2") : fadeIn(".section2");

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

        {/* <AboutQuoteContainer>
            <AboutQuotes>“You can do anything you set your mind to.”</AboutQuotes>
            <AboutQuotesWriter>- Benjamin Franklin</AboutQuotesWriter>
        </AboutQuoteContainer> */}

        <WebsiteContainerBio>
            <WebsiteContentBio>
                <DarkContentH1>About Me</DarkContentH1>
                <ContentH4>Summary</ContentH4>
                <ContentBio className="section1" ref={sectionRef1}>
                    <SocialLogo to="/" onClick={toggleHome}>Allard Lavaritte</SocialLogo> is a web designer / Freelance Artist Based in the Philippines. 
                    Allard has established his artistic style and process, merging cutting-edge 3D graphics with traditional art and 
                    animation aesthetics that result in a unique visual experience.His innovative approach to artistic medium expressed both in his works 
                    and educational materials have led a wave of artistic styles that quickly became mainstream in the entertainment industry.
                    <br/> <br/>
                    As a self-taught artist, Allard brought unique visual styles that defined world. His innovative approach to concept art helped build the visual identity of 
                    projects such as The Chronicles of my melancholic existence and Some other project.
                </ContentBio>
            </WebsiteContentBio>
        </WebsiteContainerBio>

        <WebsiteContainerIlike >
            <WebsiteContentIlike>
                <DarkContentH1>Frontend Developer.</DarkContentH1>
                <ContentH4>UI/UX</ContentH4>
                <ContentBio className="section2" ref={sectionRef2}>
                    Highly skilled at progressive enhancement, design systems &amp; UI Engineering. <br/> 
                    Over a decade of experience building products for clients across several countries
                </ContentBio>
            </WebsiteContentIlike>
        </WebsiteContainerIlike>

        <IContainer>
            <IbuildWrapper>
                <IbuildContentLeft>
                <BlueContentH1>I build &amp; design stuff</BlueContentH1>
                <ContentBio>
                    Open source projects, web apps and experimentals. <br/><br/> I created this website using react. you can download this project on github
                </ContentBio>
                <ButtonDownload href='https://github.com/blueflaw/lavaritte-website' target='_blank'
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}>
                                VIEW ON GITHUB &nbsp;&nbsp; {hover ? <FaAngleRight /> : <FaArrowRight/>}
                </ButtonDownload>
                </IbuildContentLeft>
                <IbuildContentRight>
                    <BlueContentH1>I write, <br/> sometimes</BlueContentH1>
                    <ContentBio>About design, <br/>
                                Digital Art, <br/>
                                frontend dev, <br/>
                                learning and life.
                    </ContentBio>
                    <ButtonAbout onClick={() => {
                                window.isNavNFTActive = false;
                                window.isNavStoreActive = false;
                                window.isNavAboutActive = false;
                                window.isNavTutorialsActive = false;
                                window.isNavBlogctive = true;
                                window.isNavHomeActive = false;}} 
                            to="/blog"
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}>
                                read my articles &nbsp;&nbsp; {hover ? <FaAngleRight /> : <FaArrowRight/>}
                    </ButtonAbout>
                </IbuildContentRight>
            </IbuildWrapper>
        </IContainer>

        <InfoSection {...About3}/>
        <InfoSection {...About4}/>

        <AboutQuoteContainer>
            <DarkContentH1>Think we're a good fit? get in touch ^-^</DarkContentH1>
            <ContentH4>LET'S TALK</ContentH4>
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
            <Gotinspired>Got inspired? Copied the theme? Or do you just like the website? <br/> No problem, just buy me a Burger and make me happy!</Gotinspired>
            <BtnWrap><DonateButton href={'https://www.paypal.com/donate/?hosted_button_id=ZB7H6RJ7UZSN8'} target="_blank" dark={'dark'} big={'big'}>Donate</DonateButton></BtnWrap>
        </AboutQuoteContainer>
        </AboutContainer>
        
    )
}

export default TheWebsite
