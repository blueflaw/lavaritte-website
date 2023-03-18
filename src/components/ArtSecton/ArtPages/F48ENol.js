import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const F48ENol = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Faceless Void</ArtPageContentH1>
            <ArtPageContentP>
            This is a fan art piece by Allard Lavaritte, inspired by the popular online multiplayer game DOTA 2. The image depicts a menacing figure known as the Faceless Void, 
            a powerful hero in the game known for his ability to manipulate time and space. The character is seen wielding a curved blade and surrounded by a dark, ominous aura. 
            The digital painting is masterfully crafted, showcasing the intricate details of the character's armor and the dramatic lighting that creates a sense of tension and 
            foreboding. Fans of the game will appreciate the accurate representation of the character, while newcomers will be drawn in by the striking and otherworldly appearance 
            of the Faceless Void.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/031/522/650/large/allard-lavaritte-faceless-void-f2.jpg?1603865155'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/031/522/674/large/allard-lavaritte-faceless-void.jpg?1603865257'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='_1OEbv5QjeY'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'007'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
