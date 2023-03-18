import React from 'react';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogsData } from '../BlogsData';
import { ReadMore } from '../../ReadMore/ReadMore';
import { BlogPageContentH1, BlogPageContentP, BlogPagesContainer, BlogPagesContent, BlogsVidContainer, ShareWrapper } from './BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';


export const PaintingJettfromValorant = () => {
  const title = 'Painting  Jett from valorant';
  const body = 'This is my Fan Art of Jett from Valorant. I do claim that it\'s fan art and nothing else but I just posted it online because it turned out to look so amazing and I wanted to share it with everyone, hope you like it! 🤗';
  
  return (
    <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>{title}</BlogPageContentH1>
            <ShareWrapper>
                    <FacebookShareButton url='https://lavaritte.com/blogs/PaintingJett'>
                        <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton url='https://lavaritte.com/blogs/PaintingJett' title={title}>
                        <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <LinkedinShareButton url='https://lavaritte.com/blogs/PaintingJett' title={title} summary='Investing in Bitcoin is all the rage but how exactly does a beginner get started? Do you need to already have Bitcoin to invest?'>
                        <LinkedinIcon size={32} />
                    </LinkedinShareButton>
                    <PinterestShareButton media='https://cdna.artstation.com/p/assets/images/images/040/077/016/large/allard-lavaritte-jetto.jpg?1627807423'>
                        <PinterestIcon size={32}/>
                    </PinterestShareButton>
                    <EmailShareButton url='https://lavaritte.com/blogs/PaintingJett'
                                    subject={title} 
                                    body={body}>
                        <EmailIcon size={32} />
                    </EmailShareButton>
                </ShareWrapper>
            <BlogPageContentP>
              This is my Fan Art of Jett from Valorant. 
              I do claim that it's fan art and nothing else but I just posted it online because it turned out to look so amazing and I wanted to share it with everyone, 
              hope you like it! <span role='img' aria-label='smilie'>🤗</span>
            </BlogPageContentP>
            <BlogsVidContainer>
                <ReactYouTube videoId='RF6c3IlWgfQ'/>
            </BlogsVidContainer>
            
        </BlogPagesContent>
        
        <ReadMore Data={BlogsData} />
    </BlogPagesContainer>
  )
}
