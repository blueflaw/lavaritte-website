import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const G9oD8n = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>I am the Storm</ArtPageContentH1>
            <ArtPageContentP>
            having fun with Blender
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/059/592/118/large/allard-lavaritte-underthemoonlight.jpg?1676720721'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='eGoXphuJ_YE'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
