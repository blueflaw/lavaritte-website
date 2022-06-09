import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const Q9Q6wa = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Darwin's Game [Sudou Kaname x Karino Shuka]</ArtPageContentH1>
            <ArtPageContentP>
              This is my fanart of Darwin' Game anime hope you like it smiley go watch this anime it's awesome!
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/028/536/766/large/allard-lavaritte-dgame-final.jpg?1594753177'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='3wYoO1ARKLc'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
