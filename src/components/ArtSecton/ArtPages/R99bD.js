import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const R99bD = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Valkyrie</ArtPageContentH1>
            <ArtPageContentP>
            Character Design: futuristic female warrior for my personal work.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/009/801/644/large/allard-lavaritte-girlinfinite.jpg?1520971409'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/009/801/650/large/allard-lavaritte-girl2.jpg?1520971369'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/009/801/652/large/allard-lavaritte-girl1.jpg?1520971375'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'013'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
