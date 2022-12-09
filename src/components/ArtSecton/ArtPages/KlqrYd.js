import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';

export const KlqrYd = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>The Silver Tree and the Gold Tree</ArtPageContentH1>
            <ArtPageContentP>
            Inspired from The Lord of The Rings, the Two Trees of Valinor are Telperion and Laurelin, the Silver Tree and the Gold Tree, which brought light to Valinor
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/056/808/023/large/allard-lavaritte-telperion-and-laurelin-f.jpg?1670157731'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
