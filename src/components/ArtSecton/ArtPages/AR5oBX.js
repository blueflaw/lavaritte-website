import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const AR5oBX = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Sunlight</ArtPageContentH1>
            <ArtPageContentP>
            {/* A digital painting of a girl in her room facing a window under sunlight */}
            There is a sense of peace and tranquility in this image, a reminder of the simple pleasures of life and the beauty of the everyday. 
            The girl's expression is serene, as though she has found a moment of stillness and calm in the midst of a busy day.
            <br/><br/>
            Through his mastery of digital painting, Lavaritte has created a work of art that captures the essence of a moment in time. 
            It is a reminder to slow down and appreciate the beauty that surrounds us, to take a moment to breathe and soak in the warmth of the sun.
            </ArtPageContentP>
            <ArtPageImgWrap>
              <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/022/843/339/large/allard-lavaritte-sunlight-small.jpg?1576885899'/>
            </ArtPageImgWrap>
            <ArtPageContentP>
            As the painting took shape, I felt a sense of calm and stillness wash over me. The girl's expression is peaceful and serene, lost in thought as she gazes out the window. 
            It is a moment of quiet introspection, a reminder to slow down and appreciate the simple pleasures of life.
            <br/><br/>
            Through the time-lapse process, I was able to capture the evolution of the painting, from the first tentative brushstrokes to the final details. 
            It is a testament to the power of digital painting to create beauty and capture moments of stillness and contemplation.
            </ArtPageContentP>
            <ArtsVidContainer>
              <ReactYouTube videoId='BxNWgWwVpmE'/>
            </ArtsVidContainer>
            <ArtPageContentP>
            As I put the finishing touches on the image, I felt a sense of pride and accomplishment. Through this painting, I hope to inspire others to slow down, 
            take a deep breath, and appreciate the beauty of the world around us.
            </ArtPageContentP>
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
              <RowPoster>
                  <ArtDataMapper ArtData={ArtData} Hide={'014'}/>
              </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
