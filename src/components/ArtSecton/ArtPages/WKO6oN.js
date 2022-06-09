import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const WKO6oN = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Jett from valorant</ArtPageContentH1>
            <ArtPageContentP>
            This is my fanart of Jett from valorant
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/040/077/016/large/allard-lavaritte-jetto.jpg?1627807423'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/040/077/034/large/allard-lavaritte-steps.jpg?1627807461'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='RF6c3IlWgfQ'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
