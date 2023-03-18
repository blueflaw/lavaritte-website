import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import Quotes from '../../Quotes/Quotes';

export const Ga4ZRa = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>変態を入らないで</ArtPageContentH1>
            <ArtPageContentP>
            Hello, this is my Illustration for an upcoming anime titled 変態を入らないで PERVERT DOES NOT DREAM OF ENTERING HEAVEN. This project was created in collaboration with the animation director and animator of the show, who also happens to be a really smart guy.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/042/229/393/large/allard-lavaritte-bb-small.jpg?1633950884'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/042/698/143/large/allard-lavaritte-dualmonitorwallpaper.jpg?1635215819'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='zBPMiJwTNwE'/>
                </ArtsVidContainer>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/042/232/959/large/allard-lavaritte-steps.jpg?1633958110'/>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
      </ArtPagesContainer>
      <Quotes/>
      <ArtContaner id="art">
          <ArtWrapper>
              <RowPoster>
                  <ArtDataMapper ArtData={ArtData} Hide={'024'}/>
              </RowPoster>
          </ArtWrapper>
      </ArtContaner>
    </React.Fragment>
  )
}
