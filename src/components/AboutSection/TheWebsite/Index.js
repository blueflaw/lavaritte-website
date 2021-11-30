import React from 'react'
import {AboutContainer, WebsiteContainer, WebsiteContent, ContentH1, ContentP, DP, ContentLocation, ContentLink} from './TheWebsiteElements'
import { FaMapMarkedAlt, FaExternalLinkAlt } from 'react-icons/fa';
import InfoSection from '../../InfoSection';

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
        <InfoSection/>
        </AboutContainer>
        
    )
}

export default TheWebsite
