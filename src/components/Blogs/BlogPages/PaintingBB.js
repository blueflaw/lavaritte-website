import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPageImg, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer } from './BlogPageElements';

export const PaintingBB = () => {
  return (
    <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>Painting  変態を入らないで </BlogPageContentH1>
            <BlogPageContentP>
              Hello, this is my Illustration for an upcoming anime titled 変態を入らないで PERVERT DOES NOT DREAM OF ENTERING HEAVEN.
            </BlogPageContentP>
            <BlogPageImgWrap>
                <BlogPageImg src='https://cdnb.artstation.com/p/assets/images/images/042/229/393/large/allard-lavaritte-bb-small.jpg?1633950884'/>
                <BlogsVidContainer>
                    <ReactYouTube videoId='zBPMiJwTNwE'/>
                </BlogsVidContainer>
                <BlogPageImg src='https://cdnb.artstation.com/p/assets/images/images/042/232/959/large/allard-lavaritte-steps.jpg?1633958110'/>
            </BlogPageImgWrap>
            
        </BlogPagesContent>
    </BlogPagesContainer>
  )
}
