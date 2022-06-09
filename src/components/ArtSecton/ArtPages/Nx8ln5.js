import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const Nx8ln5 = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Memories of a Golden Hour</ArtPageContentH1>
            <ArtPageContentP>
            Simple Environment Design Using Blender
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/033/245/632/large/allard-lavaritte-there-is-no-place-like-home-f-small.jpg?1608901718'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='2zvTeKoYcjs'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
