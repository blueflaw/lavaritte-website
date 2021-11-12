import React, {useRef, useEffect} from 'react'
import {ArtContaner, ArtWrapper, RowPoster, ImageContainer, Poster, Overlay, OverlayTitile, TextWrapper, ArtRow} from './ArtElements'
import {ArtData} from './ArtData'

export const ArtSection = () => {

    const PosterRef = useRef([]);
    PosterRef.current = [];

    useEffect(() => {
        console.log(PosterRef);
    }, [PosterRef])

    function setOpacity1(e) {
        e.target.style.opacity = 1;
        //PosterRef.current.style.transform = 'scale(1.08)';
        
    }
    function setOpacity0(e) {
        e.target.style.opacity = 0;
        //PosterRef.current.style.transform = 'scale(1)';
    }

    const addToRefs = (el) => {
        if(el && !PosterRef.current.includes(el)){
            PosterRef.current.push(el);
        }
        console.log(PosterRef.current);
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
                                    <Poster ref={addToRefs} src={artDetail.path} alt={artDetail.alt}/>
                                        <Overlay onMouseEnter={setOpacity1} onMouseLeave={setOpacity0}>
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