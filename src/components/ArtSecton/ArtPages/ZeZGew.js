import React from 'react';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';

export const ZeZGew = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Error 404</ArtPageContentH1>
            <ArtPageContentP>
            What do you mean there was a mistake? I made this website for people who love art.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/050/886/865/large/allard-lavaritte-into-the-404.jpg?1655921844'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
