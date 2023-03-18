import React from 'react'
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const MDz9gd = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>The Blue Light</ArtPageContentH1>
            <ArtPageContentP>
            I participated in the ArtStation Jam and created a piece titled "The Blue Light". It was inspired by the theme "Ancient Civilizations: 
            Lost & Found". In this artwork, I aimed to depict an ancient and mysterious temple, hidden deep in a dense forest. The temple was said to contain a powerful, 
            blue light that had the ability to heal and protect those who encountered it.
            <br/><br/>
            To bring this concept to life, I utilized my skills in digital painting and lighting to create a moody and atmospheric scene. I used a limited color palette of 
            blues and greens to evoke a sense of mystery and otherworldliness. The temple itself was designed with intricate and ornate details, 
            with glowing blue light emanating from within. The surrounding forest was depicted with a dense canopy and intricate foliage, with shafts of light piercing through 
            the trees.
            <br/><br/>
            Overall, "The Blue Light" was a successful piece that I created for the ArtStation Jam, showcasing my ability to create moody and atmospheric digital paintings.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/028/668/786/large/allard-lavaritte-the-blue-light.jpg?1595163575'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/028/668/809/large/allard-lavaritte-the-blue-light-thumbnail.jpg?1595163641'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
            <RowPoster>
              <ArtDataMapper ArtData={ArtData} Hide={'008'}/>
            </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
