import React from 'react';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const F48Anq = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Spitfire</ArtPageContentH1>
            <ArtPageContentP>
              The digital painting depicts a portrait of an original character named Ming Ying Wei, also known by the nickname "spitfire." 
              She is shown smoking a cigarette, adding to her rebellious and edgy demeanor. The name "spitfire" suggests that the character is outspoken and quick-tempered, 
              which adds an additional layer of complexity to her personality. The combination of her smoking and her nickname creates a sense of defiance and nonconformity 
              that is further emphasized by the bold and vibrant color scheme of the artwork. Overall, 
              the piece presents a captivating and enigmatic character who commands attention and respect.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/043/819/981/large/allard-lavaritte-smoke.jpg?1638345208'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'017'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
