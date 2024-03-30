import React from 'react';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const Qq2bYo = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Shinsetsu 親切 - Katana Design</ArtPageContentH1>
            <ArtPageContentP>
            {/* A digital painting of a girl in her room facing a window under sunlight */}
            The Shinsetsu is a katana. The Tsuba is round with quadruple moon cuts, and The Tsuka is braided from material that is white and blue. The blade has numerous elaborate ornamentation, but the relief of a lotus at the end of the hilt and the elaborate golden guard with lotus symbols stand out.
            The scabbard is black, made of traditional lacquered wood, and features several golden ornaments on its far end. It also features a blue sageo, the cord used to tie the katana to the waist.
            Shinsetsu is far sharper than ordinary blades, and is imbued with tremendous demonic power. The sword is said to be able to cut through anything, even the very fabric of space itself.
            </ArtPageContentP>
            <ArtPageImgWrap>
              <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/055/122/216/large/allard-lavaritte-sword-of-blueflaw6.jpg?1666175225'/>
              <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/055/122/224/large/allard-lavaritte-sword-of-blueflaw7.jpg?1666175230'/>
              <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/055/122/231/large/allard-lavaritte-sword-of-blueflaw8.jpg?1666175237'/>
              <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/055/122/235/large/allard-lavaritte-sword-of-blueflaw9.jpg?1666175243'/>
              <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/055/122/239/large/allard-lavaritte-habaki.jpg?1666175249'/>
              <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/055/122/246/large/allard-lavaritte-tsuba.jpg?1666175254'/>
            </ArtPageImgWrap>
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
              <RowPoster>
                  <ArtDataMapper ArtData={ArtData} Hide={'026'}/>
              </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
