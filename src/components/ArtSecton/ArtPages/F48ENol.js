import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const F48ENol = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Faceless Void</ArtPageContentH1>
            <ArtPageContentP>
            Dota2 Fan art faceless void
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/031/522/650/large/allard-lavaritte-faceless-void-f2.jpg?1603865155'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/031/522/674/large/allard-lavaritte-faceless-void.jpg?1603865257'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='_1OEbv5QjeY'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
