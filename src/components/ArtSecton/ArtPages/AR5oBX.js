import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const AR5oBX = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Sunlight</ArtPageContentH1>
            <ArtPageContentP>
            A digital painting of a girl in her room facing a window under sunlight
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/022/843/339/large/allard-lavaritte-sunlight-small.jpg?1576885899'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='BxNWgWwVpmE'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
