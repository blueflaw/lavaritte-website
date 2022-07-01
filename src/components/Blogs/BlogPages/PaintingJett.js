import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube'
import { BlogPageContentH1, BlogPageContentP, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer } from './BlogPageElements'

export const PaintingJettfromValorant = () => {
  return (
    <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>Painting  Jett from valorant </BlogPageContentH1>
            <BlogPageContentP>
              This is my Fan Art of Jett from Valorant. 
              I do claim that it's fan art and nothing else but I just posted it online because it turned out to look so amazing and I wanted to share it with everyone, 
              hope you like it! <span role='img' aria-label='smilie'>🤗</span>
            </BlogPageContentP>
            <BlogPageImgWrap>
                <BlogsVidContainer>
                    <ReactYouTube videoId='RF6c3IlWgfQ'/>
                </BlogsVidContainer>
            </BlogPageImgWrap>
            
        </BlogPagesContent>
    </BlogPagesContainer>
  )
}
