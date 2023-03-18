import React from 'react';
import {ArtContaner, ArtWrapper, RowPoster} from '../ArtElements';
import {ArtData} from '../ArtData';
import { ArtDataMapper } from '../ArtDataMapper';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';
import Quotes from '../../Quotes/Quotes';

export const G9oD8n = () => {
  return (
    <React.Fragment>
      <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>I am the Storm</ArtPageContentH1>
            <ArtPageContentP>
            This stunning digital artwork, with its serene scene of a marble altar under the moonlight and rain, was created by the talented artist Allard Lavaritte. 
            Through his mastery of 3D software Blender and Photoshop, Lavaritte has crafted a work of art that is both hauntingly beautiful and technically impressive.
            <br/><br/>
            As the mind wanders through this scene of solitude and contemplation, it is easy to get lost in the beauty and magic of Lavaritte's creation. 
            The moon's ethereal glow and the rain's gentle patter create a sense of timelessness, transporting the viewer to a world beyond the boundaries of reality. 
            The broken statues scattered around the altar hint at a forgotten time, a civilization long since lost to history, adding to the mystery and beauty of the scene.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/059/592/118/large/allard-lavaritte-underthemoonlight.jpg?1676720721'/>
            </ArtPageImgWrap>
            <ArtPageContentP> 
              The details of the grand marble altar and the broken statues are a testament to Lavaritte's skill in digital sculpting and texturing, 
              while the moon's radiance and the rain's soft patter are a tribute to his mastery of digital manipulation. 
              It is clear that this image was created with care and passion, a labor of love for the art and the technology that make it possible.
            </ArtPageContentP>
            <ArtsVidContainer>
                    <ReactYouTube videoId='eGoXphuJ_YE'/>
                </ArtsVidContainer>
            <ArtPageContentP>
                  With this digital artwork, Allard Lavaritte has proven that art and technology can work together to create something truly stunning. 
                  This image is a testament to the power of creativity and the boundless possibilities of the digital world.
            </ArtPageContentP>
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
