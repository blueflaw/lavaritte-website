import React from 'react'

import {
    AboutContainer, WebsiteContainer, WebsiteContent, ContentH1, ContentP, DP, ContentLocation, ContentLink, WebsiteContentBio, WebsiteContainerBio, 
    ContentBio, WebsiteContentIlike, WebsiteContainerIlike, Listwrapper, List
} from './TheWebsiteElements'
import { FaMapMarkedAlt, FaExternalLinkAlt } from 'react-icons/fa';
import InfoSection from '../../InfoSection';
import { About1, About2 } from './Data';

const TheWebsite = () => {
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
        <WebsiteContainerBio>
            <WebsiteContentBio>
            <ContentH1>INTRO</ContentH1>
            <ContentBio>
                Allard Lavaritte is a Software Engineer / Freelance Artist Based in the Philippines. 
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
            <ContentH1>I LIKE</ContentH1>
            <Listwrapper>
                <List>A</List>
            </Listwrapper>
            </WebsiteContentIlike>
        </WebsiteContainerIlike>
        <InfoSection {...About1}/>
        <InfoSection {...About2}/>
        </AboutContainer>
        
    )
}

export default TheWebsite
