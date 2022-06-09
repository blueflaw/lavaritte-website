import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {ArtContaner, ArtWrapper, RowPoster, ImageContainer, Poster, Overlay, OverlayTitile, TextWrapper, ArtRow} from './ArtElements';
import {ArtData} from './ArtData';

export const ArtSection = () => {
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
        <React.Fragment>
            <ArtContaner id="art">
                <ArtWrapper>
                    <RowPoster>
                        <ArtRow>
                            {ArtData.map((artDetail) =>{
                                return <React.Fragment key={artDetail.id}>
                                    <ImageContainer href={artDetail.link} onClick={toggleArt()}>
                                    <Poster src={artDetail.path} alt={artDetail.alt}/>
                                        <Overlay>
                                            <TextWrapper><OverlayTitile>{artDetail.title}</OverlayTitile></TextWrapper>
                                        </Overlay>
                                    </ImageContainer>
                                    </React.Fragment>
                            })}
                        </ArtRow>
                    </RowPoster>
                </ArtWrapper>
            </ArtContaner>
        </React.Fragment>
    )
}

export default ArtSection