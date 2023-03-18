import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const NGdnmb = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>The Demon of Darkness</ArtPageContentH1>
            <ArtPageContentP>
            Can't get enough of Chainsawman. Great show with awesome art style and animation. 
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/056/930/243/large/allard-lavaritte-darkness-demon-final.jpg?1670427024'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/056/930/253/large/allard-lavaritte-darkness-demon-sfw-f.jpg?1670426995'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/056/930/265/large/allard-lavaritte-makima-f.jpg?1670427007'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'021'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
