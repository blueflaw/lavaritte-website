import React, {Component} from 'react'
import {ArtContaner, ArtWrapper, RowPoster, ImageContainer, Poster, Overlay, OverlayTitile} from './ArtElements'
import {ArtData} from './ArtData'

export const ArtSection = () => {
    function chnageOpacity(e) {
        // ${({imgStart}) => (imgStart ? `'col2 col1` : `'col1 col2'`)};
        // e.target.style.opacity = 1;
        e.target.style.opacity = 1;
      }

    return (
        <>
            <ArtContaner id="art">
                <ArtWrapper>
                    <RowPoster>
                        
                        {ArtData.map((artDetail) =>{
                            return <>
                                <ImageContainer >
                                <Poster src={artDetail.path} alt={artDetail.alt}/>
                                <Overlay onMouseOver={chnageOpacity}><OverlayTitile>{artDetail.title}</OverlayTitile></Overlay>
                                </ImageContainer>
                                </>
                        })}
                    </RowPoster>
                </ArtWrapper>
            </ArtContaner>
        </>
    )
}

export default ArtSection