import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const XggARY = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Equal but Greater</ArtPageContentH1>
            <ArtPageContentP>
              The essence of the world lies in its people, who are human and mortal beings. You may have a higher authority figure in your life, such as a boss or CEO, 
              but it is important to realize that they too are mortal. Anything that they possess that you desire is attainable by you as well. 
              Individuals such as Julius Caesar, Alexander the Great, Genghis Khan, and Isaac Newton are all mortals who experience pain, doubt, and sadness just like everyone else. 
              The only distinguishing factor between them and you is that they did not waste their time and worked tirelessly to achieve their goals. 
              If you want to achieve greatness, you need to take action towards it and utilize every second effectively. Evaluate your actions, accomplishments, 
              and how you spend every second to determine if they are propelling you towards your desired destination.
            </ArtPageContentP>
            <ArtPageImgWrap>
              <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/061/222/289/large/allard-lavaritte-equal-but-greater.jpg?1680271755'/>
            </ArtPageImgWrap>
           
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
              <RowPoster>
                  <ArtDataMapper ArtData={ArtData} Hide={'025'}/>
              </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
