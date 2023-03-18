import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const QAKJEe = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>The Archer</ArtPageContentH1>
            <ArtPageContentP>
            The image depicts the archer standing on a beach, with the ocean and cloudy sky behind her. The waves are gentle and rolling, 
            with the water gently lapping at the shoreline. The cloudy sky suggests an impending storm, adding to the sense of tension and danger in the scene.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/019/380/861/large/allard-lavaritte-untitled-1.jpg?1563235858'/>
            </ArtPageImgWrap>
            <ArtPageContentP>
            The archer is dressed in sleek and futuristic armor, with a form-fitting bodysuit and shoulder pads that suggest a high-tech setting. 
            She is holding a high-tech bow and arrow, with an arrow already nocked and ready to be fired. The archer has a determined expression, 
            suggesting that she is confident in her abilities and ready to face any challenge that comes her way.
            </ArtPageContentP>
            <ArtPageContentP>
              <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/019/381/052/large/allard-lavaritte-the-archer-no-eyeglass.jpg?1563235724'/>
              <ArtPageContentP>The Archer (No Eyeglass)</ArtPageContentP>
              <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/019/381/053/large/allard-lavaritte-the-archer-square.jpg?1563235726'/>
            </ArtPageContentP>
            <ArtPageContentP>
            The color palette used in the artwork is predominantly cool blues and grays, with hints of warmer orange and yellow tones in the armor and the archer's hair. 
            The use of light and shadow creates a sense of depth and texture, giving the artwork a sense of realism despite its futuristic elements.
            </ArtPageContentP>
            <ArtsVidContainer>
              <ReactYouTube videoId='d-GWdmU6_74'/>
            </ArtsVidContainer>
            <ArtPageContentP>
            Overall, the artwork conveys a sense of strength, courage, and determination, emphasizing the importance of being prepared for whatever challenges may come our way. 
            The archer's confident expression and ready stance make her a compelling and inspiring figure, leaving the viewer with a sense of admiration and respect.
            </ArtPageContentP>
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'015'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
