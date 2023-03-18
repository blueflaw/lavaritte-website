import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const AYBzKJ = () => {
  return (
    <React.Fragment>
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>First Contact</ArtPageContentH1>
            <ArtPageContentP>
            In this digital painting, I sought to capture the sense of wonder and awe that comes with encountering the unknown.
            <br/><br/>
            As I worked on the painting, I focused on creating a sense of scale and grandeur, using bold brushstrokes and vibrant colors to convey the sense of otherworldliness. 
            The spacecraft itself is intricately rendered, with a sense of weight and heft that conveys its massive size and power.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/033/208/387/large/allard-lavaritte-first-contact-v2a.jpg?1608750241'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/033/208/389/large/allard-lavaritte-first-contact.jpg?1608750245'/>
            </ArtPageImgWrap>
            <ArtPageContentP>
            The landscape is equally impressive, with towering rock formations and sweeping vistas that stretch off into the distance. 
            The use of light and shadow creates a sense of depth and texture, adding to the realism and impact of the image.
            <br/><br/>
            The sense of mystery and excitement is heightened by the figures standing on the edge of the spacecraft, 
            their bodies silhouetted against the glowing light of the ship's engines. They are explorers, adventurers, facing the unknown with a sense of bravery and wonder.
            </ArtPageContentP>
            <ArtsVidContainer>
                <ReactYouTube videoId='zRC-r8pl9vQ'/>
            </ArtsVidContainer>
            <ArtsVidContainer>
                <ReactYouTube videoId='eltmeXO8CmA'/>
            </ArtsVidContainer>
            <ArtPageContentP>
                Through the use of digital techniques, I was able to create an image that feels both familiar and alien, 
                a reminder of the power of imagination to transport us to new and wondrous worlds. It is a celebration of the human spirit of exploration and discovery, 
                and a reminder that there is always something new and exciting waiting to be discovered.
            </ArtPageContentP>
        </ArtPagesContent>
    </ArtPagesContainer>
    <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'005'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
