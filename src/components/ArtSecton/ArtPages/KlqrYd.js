import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const KlqrYd = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>The Silver Tree and the Gold Tree</ArtPageContentH1>
            <ArtPageContentP>
            This is a digital painting I created titled "Telperion and Laurelin". It depicts two legendary trees from J.R.R. Tolkien's Middle-earth lore. 
            Telperion is the silver tree of Valinor, while Laurelin is the golden tree. In the painting, Telperion is on the left and Laurelin on the right, 
            and they are both in full bloom. The painting was created using digital tools and techniques, and it was inspired by my love for the Tolkien universe.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/056/808/023/large/allard-lavaritte-telperion-and-laurelin-f.jpg?1670157731'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'019'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
