import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const D0ZmBe = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
          <ArtPagesContent>
              <ArtPageContentH1>Flowers of Ember</ArtPageContentH1>
              <ArtPageContentP>
              At the center of the painting stands a towering structure, which upon closer inspection is revealed to be a magnificent golden tree. 
              The tree is decorated with exquisite flowers, each petal and leaf beautifully rendered with intricate detail, 
              and is the last vestige of life in this barren wasteland.
              </ArtPageContentP>
              <ArtPageImgWrap>
                  <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/056/849/263/large/allard-lavaritte-flowers-of-ember-final.jpg?1670251719'/>
              </ArtPageImgWrap>

              <ArtPageContentP>
              In the center of the painting stands the towering structure that was once a golden tree, now reduced to a twisted, 
              charred ruin. The intricate flowers that once adorned it have withered and died, their glow now replaced with a sickly, ominous aura. 
              The muted colors that once gave the landscape a sense of quiet beauty have given way to fiery reds and oranges, 
              suggesting that the destruction was caused by some catastrophic event.
              <br/><br/>
              As the creator of this artwork, I sought to convey a sense of loss and tragedy, the destruction of something beautiful and fragile. 
              The use of digital techniques allows for a detailed and intricate depiction of the ruins, with the twisted, jagged lines of the ruined tree 
              contrasting with the soft, organic shapes of the flowers. The play of light and shadow adds depth and dimension to the image, 
              while the fiery colors create a sense of danger and urgency.
              </ArtPageContentP>
              <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/056/849/261/large/allard-lavaritte-flowers-of-ember-2.jpg?1670251652'/>
              </ArtPageImgWrap>
              <ArtPageContentP>
              Overall, this artwork is a haunting and powerful depiction of the aftermath of destruction, 
              where the beauty of the flowers has been replaced with a sense of menace and foreboding. 
              It is a testament to the transience of beauty and the fragility of life, 
              reminding the viewer of the importance of cherishing and protecting the natural world.
              </ArtPageContentP>
          </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'020'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
