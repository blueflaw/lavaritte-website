import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const GawZFa = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>A Touch of Magic</ArtPageContentH1>
            <ArtPageContentP>
              The painting is created using digital tools, with Allard Lavaritte using software such as Photoshop and Corel Painter to create the image. 
              The artist has a keen eye for detail, and the level of intricacy in the image is impressive. The image is a testament to the artist's skill, 
              as well as their ability to create an atmosphere of magic and wonder through their work.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/024/683/900/large/allard-lavaritte-a-touch-of-magic-by-evileyedcrow-dazhxht.jpg?1583201566'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'011'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
