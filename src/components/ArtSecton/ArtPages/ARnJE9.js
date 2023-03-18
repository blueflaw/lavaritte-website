import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const ARnJE9 = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
      <ArtPagesContent>
        <ArtPageContentH1>Neon Dreamer</ArtPageContentH1>
        <ArtPageContentP>
        Only did the coloring job for this one.
        </ArtPageContentP>
        <ArtPageImgWrap>
            <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/024/894/789/large/allard-lavaritte-carmela4.jpg?1583877603'/>
            <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/024/894/791/large/allard-lavaritte-lineart-cm.jpg?1583877612'/>
        </ArtPageImgWrap>
        <ArtPageContentP>
        As the painting took shape, I was filled with a sense of satisfaction and pride.
        </ArtPageContentP>
        <ArtsVidContainer>
          <ReactYouTube videoId='ZNL2ZL8JtOw'/>
        </ArtsVidContainer>
      </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'010'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
