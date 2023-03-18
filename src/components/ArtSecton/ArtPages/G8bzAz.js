import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const G8bzAz = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>The Ravine</ArtPageContentH1>
            <ArtPageContentP>
            The image depicts a serene ravine, nestled amidst towering cliffs and a lush forest. The verdant canopy overhead provides a gentle respite from the sun's rays, 
            as the tranquil stream trickles over smooth stones. The subtle interplay of light and shadow adds depth and dimension to the scene, drawing the viewer deeper into 
            the immersive world crafted by Allard Lavaritte. One can almost hear the soft rustle of leaves and feel the cool breeze as they lose themselves in the serene beauty of 
            the ravine.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/058/921/528/large/allard-lavaritte-the-ravine-f.jpg?1675252606'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'023'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
