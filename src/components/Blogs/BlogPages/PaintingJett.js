import React from 'react'
import ReactYouTube from '../../ReactYoutube/ReactYoutube'
import { BlogPageContentH1, BlogPageContentP, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer } from './BlogPageElements'

export const PaintingJettfromValorant = () => {
  return (
    <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>Painting  Jett from valorant </BlogPageContentH1>
            <BlogPageContentP>
            This is my fanart of Jett from valorant
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
