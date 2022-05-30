import React from 'react'
import {ArtContaner, ArtWrapper, RowPoster, ImageContainer, Poster, Overlay, OverlayTitile, TextWrapper, ArtRow} from './ArtElements'
import {ArtData} from './ArtData'

export const ArtSection = () => {

    return (
        <React.Fragment>
            <ArtContaner id="art">
                <ArtWrapper>
                    <RowPoster>
                        <ArtRow>
                            {ArtData.map((artDetail) =>{
                                return <React.Fragment key={artDetail.id}>
                                    <ImageContainer>
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