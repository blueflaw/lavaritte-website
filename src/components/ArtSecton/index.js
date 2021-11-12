import React from 'react'
import {ArtContaner, ArtWrapper, RowPoster, ImageContainer, Poster, Overlay, OverlayTitile, TextWrapper, ArtRow} from './ArtElements'
import {ArtData} from './ArtData'

export const ArtSection = () => {

    function setOpacity1(e) {
        e.target.style.opacity = 1;
    }
    function setOpacity0(e) {
        e.target.style.opacity = 0;
    }
    
    return (
        <>
            <ArtContaner id="art">
                <ArtWrapper>
                    <RowPoster>
                        <ArtRow>
                            {ArtData.map((artDetail) =>{
                                return <>
                                    <ImageContainer key={artDetail.id}>
                                    <Poster src={artDetail.path} alt={artDetail.alt}/>
                                        <Overlay onMouseOver={setOpacity1} onMouseLeave={setOpacity0}>
                                            <TextWrapper><OverlayTitile>{artDetail.title}</OverlayTitile></TextWrapper>
                                        </Overlay>
                                    </ImageContainer>
                                    </>
                            })}
                        </ArtRow>
                    </RowPoster>
                </ArtWrapper>
            </ArtContaner>
        </>
    )
}

export default ArtSection