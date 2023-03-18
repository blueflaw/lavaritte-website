import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const WKO6oN = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Jett from valorant</ArtPageContentH1>
            <ArtPageContentP>
            This is my Fan Art of Jett from Valorant. I do claim that it's fan art and nothing else but I just posted it online because it turned out to look so amazing and I wanted to share it with everyone, hope you like it! <span role='img' aria-label='smilie'>🤗</span>
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/040/077/016/large/allard-lavaritte-jetto.jpg?1627807423'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/040/077/034/large/allard-lavaritte-steps.jpg?1627807461'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='RF6c3IlWgfQ'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'002'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
