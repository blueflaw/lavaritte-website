import React , {useState} from 'react'
import { FaArtstation, FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube, FaMapMarkedAlt, FaExternalLinkAlt, FaAngleRight, FaArrowRight} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Icon from '../../images/LogoInverted.gif';
import {
    AboutContainer, WebsiteContainer, WebsiteContent, ContentH1, ContentP, DP, ContentLocation, ContentLink, WebsiteContentBio, WebsiteContainerBio, IbuildContentLeft, 
    IbuildContentRight, ContentBio, WebsiteContentIlike, WebsiteContainerIlike, AboutQuoteContainer, ContentH4, 
    BtnWrap, DonateButton, GetInTouchLink, SocialWrapper, CreatedBy, SocialLogo, Gotinspired, GetInTouchRow, Column1, Column2, ImgWrap, ButtonDownload,
    Img, ImagelWrapper, DarkContentH1, IContainer, BlueContentH1, IbuildWrapper, ButtonAbout, ToolsRow, ToolsIcon
} from './AboutElements';
import { Newsletter } from '../Newsletter/Newsletter';
import Quotes from '../Quotes/Quotes';
import { ToolsData } from './Data';

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

    return (
        <AboutContainer id='about'>
        <WebsiteContainer>
            <WebsiteContent>
                <DP src='https://cdnb.artstation.com/p/users/avatars/000/190/863/large/02dbe259f43d1792bc174f3c536c8d4e.jpg?1594753021' 
                    title={'author-image'} loading="lazy" width="auto" height="auto" alt='author-allard-lavaritte' />
                <ContentH1>Allard Lavaritte</ContentH1>
                <ContentP>UI/UX &amp; Freelance Artist</ContentP>
                <ContentLocation><FaMapMarkedAlt/> Davao City, Philippines</ContentLocation>
                <ContentLink href="//www.artstation.com/blueflaw" target="_blank" aria-label="ArtStation">blueflaw.artstation.com <FaExternalLinkAlt/></ContentLink>
            </WebsiteContent>
        </WebsiteContainer>

        <WebsiteContainerBio id='bio'>
            <WebsiteContentBio>
                <DarkContentH1>About Me</DarkContentH1>
                <ContentH4>Summary</ContentH4>
                <ContentBio>
                    Hi, my name is <SocialLogo to="/" onClick={toggleHome}>Allard Lavaritte</SocialLogo>. I am a self-taught artist with a wide range of skills in Creative Direction, 
                    Illustration, Graphic Design, UI/UX, and Web Development. I am passionate about creating visually appealing designs that are both functional and user-friendly. 
                    My unique approach to projects comes from my expertise in multiple fields, which allows me to bring innovative solutions to the table. 
                    I am detail-oriented and imaginative, which enhances the quality of my work.
                    <br/><br/>
                    Recently, I created a website using React called lavaritte.com, which showcases my skills as a web developer. This platform allows me to share my artwork, 
                    design projects, and insights into my creative process. I am eager to collaborate with other creative individuals and bring ideas to life.
                </ContentBio>
                
            </WebsiteContentBio>
        </WebsiteContainerBio>

        <WebsiteContainerIlike >
            <WebsiteContentIlike>
                <DarkContentH1>TOOLS I LOVE</DarkContentH1>
                <ContentH4>Languages and Tools</ContentH4>
                <ContentBio>
                    <ToolsRow>
                        {ToolsData.map((toolsDetail) =>{
                            return <React.Fragment key={toolsDetail.id}>
                             <ToolsIcon src={toolsDetail.path} alt={toolsDetail.alt} title={toolsDetail.title} loading="lazy" width="auto" height="auto"/>
                        </React.Fragment>
                        })}
                    </ToolsRow>
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

        <AboutQuoteContainer>
            <DarkContentH1>Think we're a good fit? get in touch ^-^</DarkContentH1>
            <ContentH4>LET'S TALK</ContentH4>
            <GetInTouchRow imgStart={true}>
                <Column2>
                    <ImagelWrapper><ImgWrap><Img src={Icon} title={'logo-animation'} loading="lazy" width="auto" height="auto" alt='logo-animation'/></ImgWrap></ImagelWrapper>
                </Column2>
                <Column1>
                <SocialWrapper>
                    <GetInTouchLink href="//www.facebook.com/blueflaw.art" target="_blank" aria-label="Facebook"><FaFacebook/> facebook</GetInTouchLink>
                    <GetInTouchLink href="//www.instagram.com/waitoflaw" target="_blank" aria-label="Instagram"><FaInstagram/> instagram</GetInTouchLink>
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
        <Quotes />
        <Newsletter/>
        </AboutContainer>
        
    )
}

export default TheWebsite
