import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {ImageContainer, Poster, Overlay, OverlayTitile, TextWrapper, ArtRow} from './ArtElements';

export const ArtDataMapper = ({ArtData, Hide}) => {
    const toggleArt = () => {
        scroll.scrollToTop();
        window.isNavNFTActive = false;
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
    };
    return (
        <ArtRow>
            {ArtData.map((artDetail) =>{
                return artDetail.id !== Hide ? <React.Fragment key={artDetail.id}>
                <ImageContainer to={artDetail.link} onClick={toggleArt()} smooth="true" duration={500} spy="true" exact="true" offset={-80}>
                <Poster src={artDetail.path} alt={artDetail.alt} title={artDetail.title} loading="lazy" width="auto" height="auto"/>
                    <Overlay>
                        <TextWrapper><OverlayTitile>{artDetail.title}</OverlayTitile></TextWrapper>
                    </Overlay>
                </ImageContainer>
            </React.Fragment> : null
            })}
        </ArtRow>
    )
}
