import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const QAKJEe = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>The Archer</ArtPageContentH1>
            <ArtPageContentP>
            Just some futuristic archer on a beach <br/>
            This took me 8hrs to render.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/019/380/861/large/allard-lavaritte-untitled-1.jpg?1563235858'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/019/381/052/large/allard-lavaritte-the-archer-no-eyeglass.jpg?1563235724'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/019/381/053/large/allard-lavaritte-the-archer-square.jpg?1563235726'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='d-GWdmU6_74'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
