import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ArtPageContentH1, ArtPageContentP, ArtPageImg, ArtPageImgWrap, ArtPagesContainer, ArtPagesContent, ArtsVidContainer } from './ArtPageElements';

export const Qq48Kg = () => {
  return (
    <ArtPagesContainer>
        <ArtPagesContent>
            <ArtPageContentH1>Sky Collection</ArtPageContentH1>
            <ArtPageContentP>
              I was playing around with some cloud brushes I created in Photoshop for the cloud panting tutorial and had a lot of fun with them. 
              Each painting took less than an hour to complete.
            </ArtPageContentP>
            <ArtPageImgWrap>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/051/387/003/large/allard-lavaritte-cloud-collection-01.jpg?1657160064'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/051/387/006/large/allard-lavaritte-cloud-collection-02.jpg?1657159931'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/051/387/007/large/allard-lavaritte-cloud-collection-03.jpg?1657159946'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/051/387/008/large/allard-lavaritte-cloud-collection-04.jpg?1657159963'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/051/387/011/large/allard-lavaritte-cloud-collection-06.jpg?1657159996'/>
                <ArtPageImg src='https://cdna.artstation.com/p/assets/images/images/051/387/020/large/allard-lavaritte-cloud-collection-07.jpg?1657160014'/>
                <ArtPageImg src='https://cdnb.artstation.com/p/assets/images/images/051/387/025/large/allard-lavaritte-in-your-twilight.jpg?1657160034'/>
                <ArtsVidContainer>
                    <ReactYouTube videoId='eqshrWlAkTw'/>
                </ArtsVidContainer>
            </ArtPageImgWrap>
            
        </ArtPagesContent>
    </ArtPagesContainer>
  )
}
