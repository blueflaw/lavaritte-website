import React from 'react';
import { BlogPageContentH1, BlogPageContentP, BlogPageImg, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent } from '../../Blogs/BlogPages/BlogPageElements';
import cloud1 from '../../../images/Tutorials/CloudTutorial/cloudtutorial1.jpg';
import cloud2 from '../../../images/Tutorials/CloudTutorial/cloudtutorial2.jpg';
import cloud3 from '../../../images/Tutorials/CloudTutorial/cloudtutorial3.jpg';
import cloud4 from '../../../images/Tutorials/CloudTutorial/cloudtutorial4.jpg';
import cloud5 from '../../../images/Tutorials/CloudTutorial/cloudtutorial5.jpg';
import cloud6 from '../../../images/Tutorials/CloudTutorial/cloudtutorial6.jpg';
import cloud7 from '../../../images/Tutorials/CloudTutorial/cloudtutorial7.jpg';
import cloud8 from '../../../images/Tutorials/CloudTutorial/cloudtutorial8.jpg';
import cloud9 from '../../../images/Tutorials/CloudTutorial/cloudtutorial9.jpg';
import cloud10 from '../../../images/Tutorials/CloudTutorial/cloudtutorial10.jpg';

export const CloudTutorial = () => {
  return (
    <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>Cloud Tutorial</BlogPageContentH1>
            <BlogPageContentP>
                Learn to paint various clouds &amp; skies with this tutorial
            </BlogPageContentP>
            <BlogPageImgWrap>
                <BlogPageImg src={cloud1}/>
                <BlogPageImg src={cloud2}/>
                <BlogPageImg src={cloud3}/>
                <BlogPageImg src={cloud4}/>
                <BlogPageImg src={cloud5}/>
                <BlogPageImg src={cloud6}/>
                <BlogPageImg src={cloud7}/>
                <BlogPageImg src={cloud8}/>
                <BlogPageImg src={cloud9}/>
                <BlogPageImg src={cloud10}/>
            </BlogPageImgWrap>
            
        </BlogPagesContent>
    </BlogPagesContainer>
  )
}
