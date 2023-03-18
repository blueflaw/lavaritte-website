import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const MDNwl1 = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Valorant Female Breach</ArtPageContentH1>
            <ArtPageContentP>
            Here's my fan art of the character Breach from Valorant. It was an absolute blast drawing this one and I'm always up for drawing some more if you guys have any requests <span role='img' aria-label='smilie'>😊</span>
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/039/733/768/large/allard-lavaritte-valorant-female-breach.jpg?1626784012'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='FiMvC6r8BYM'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'003'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
