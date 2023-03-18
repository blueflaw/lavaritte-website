import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const BQ6A0 = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
          <ArtPagesContent>
              <ArtPageContentH1>EVA 00</ArtPageContentH1>
              <ArtPageContentP>
              This digital painting depicts a powerful, otherworldly figure, standing tall against a dark and foreboding landscape. 
              The figure is Eva-00, a giant, bio-mechanical entity with glowing eyes and intricate, cybernetic components.
              <br/><br/>
              As the creator of this artwork, I aimed to capture the sense of power and mystery that surrounds Eva-00, 
              conveying a sense of awe and reverence for the sheer scale and grandeur of this entity. The use of bold brushstrokes and deep, 
              vibrant colors creates a sense of texture and depth, adding to the overall impact of the image.
              <br/><br/>
              In the background, we see a bleak, apocalyptic landscape, a stark contrast to the vibrant energy of Eva-00. 
              The use of light and shadow is masterfully employed to create a sense of contrast and depth, 
              with the glowing eyes of the entity adding a sense of intrigue and mystique.
              </ArtPageContentP>
              <ArtPageImgWrap>
                  <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/050/001/776/large/allard-lavaritte-eva-00.jpg?1653843002'/>
              </ArtPageImgWrap>
              <ArtPageContentP>
              The intricate details of Eva-00's design are striking, with the bio-mechanical components and cybernetic enhancements 
              adding to the sense of otherworldliness and power. The use of digital techniques allowed me to add a sense of fluidity and motion to the image, 
              as if Eva-00 is about to move or take action.
              <br/><br/>
              Overall, this artwork is a celebration of the awe-inspiring power of science fiction and the imagination, 
              inviting the viewer to explore new and wondrous worlds beyond our own. It is a testament to the power of the human spirit to explore, discover, and create, 
              even in the face of the unknown and the unknowable.
              </ArtPageContentP>
          </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'004'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
