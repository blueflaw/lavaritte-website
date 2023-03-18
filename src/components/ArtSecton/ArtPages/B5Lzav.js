import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const B5Lzav = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Eye of Winter</ArtPageContentH1>
            <ArtPageContentP>
            In this digital painting, I sought to capture the sense of awe and reverence that comes with the exploration of the unknown. 
            The scene depicts a massive temple, built with intricate carvings and massive stone pillars, 
            rising up from a polished marble floor in a cold, dark underworld landscape.
            <br/><br/>
            As I worked on the painting, I focused on creating a sense of scale and grandeur, 
            using bold brushstrokes and rich colors to convey the sense of power and majesty of the temple. 
            The structure itself is both ancient and futuristic, hinting at the mysteries and wonders that lie beyond.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/056/332/104/large/allard-lavaritte-eye-of-flykra.jpg?1669006416'/>
            </ArtPageImgWrap>
            <ArtPageContentP>
            The underworld landscape itself is stark and foreboding, with the temple rising up like a beacon of hope and possibility. 
            The use of light and shadow creates a sense of depth and texture, adding to the realism and impact of the image.
            <br/><br/>
            At the center of the temple lies the portal, a glowing energy core surrounded by intricate carvings and mysterious symbols. 
            It is a symbol of the unknown, hinting at the wonders and dangers that lie beyond the portal's threshold.
            </ArtPageContentP>
            <ArtsVidContainer>
              <ReactYouTube videoId='SZv8Hsd1W7Y'/>
            </ArtsVidContainer>
            <ArtPageContentP>
            Through the use of digital techniques, I was able to create an image that feels both epic and intimate, 
            a reminder of the power of imagination to transport us to new and wondrous worlds. It is a celebration of the human spirit of exploration and discovery, 
            and a tribute to the enduring mystery and wonder of the unknown.
            </ArtPageContentP>
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'022'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
