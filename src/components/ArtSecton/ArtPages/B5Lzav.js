import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const B5Lzav = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Eye of Winter</ArtPageContentH1>
            <ArtPageContentP>
            Simple Environment Design Using Blender
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/056/332/104/large/allard-lavaritte-eye-of-flykra.jpg?1669006416'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='SZv8Hsd1W7Y'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
