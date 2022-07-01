import React from 'react';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer } from './BlogPageElements';

export const PaintingFemaleBreach = () => {
  return (
    <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>Valorant Female Breach</BlogPageContentH1>
            <BlogPageContentP>
            Here's my fan art of the character Breach from Valorant. It was an absolute blast drawing this one and I'm always up for drawing some more if you guys have any requests <span role='img' aria-label='smilie'>😊</span>
            </BlogPageContentP>
            <BlogPageImgWrap>
                <BlogsVidContainer>
                    <ReactYouTube videoId='FiMvC6r8BYM'/>
                </BlogsVidContainer>
            </BlogPageImgWrap>
            
        </BlogPagesContent>
    </BlogPagesContainer>
  )
}
