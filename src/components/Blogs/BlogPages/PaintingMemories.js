import React from 'react';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer } from './BlogPageElements';

export const PaintingMemories = () => {
  return (
    <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>Memories of a Golden Hour</BlogPageContentH1>
            <BlogPageContentP>
              Hello, this is a painting from 2021
            </BlogPageContentP>
            <BlogPageImgWrap>
                <BlogsVidContainer>
                    <ReactYouTube videoId='2zvTeKoYcjs'/>
                </BlogsVidContainer>
            </BlogPageImgWrap>
            
        </BlogPagesContent>
    </BlogPagesContainer>
  )
}