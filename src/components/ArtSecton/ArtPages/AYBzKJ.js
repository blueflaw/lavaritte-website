import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const AYBzKJ = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>First Contact</ArtPageContentH1>
            <ArtPageContentP>
            Simple Environment Design Using Blender
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/033/208/387/large/allard-lavaritte-first-contact-v2a.jpg?1608750241'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/033/208/389/large/allard-lavaritte-first-contact.jpg?1608750245'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='zRC-r8pl9vQ'/>
                </ArtsVidContainer>
                <ArtsVidContainer>
                    <ReactYouTube videoId='eltmeXO8CmA'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
