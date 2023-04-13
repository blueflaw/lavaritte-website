import React from 'react';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPageImg, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer, ShareWrapper } from './BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';
import { ReadMore } from '../../ReadMore/ReadMore';
import { BlogsData } from '../BlogsData';


export const PaintingBB = () => {
    const title = 'Painting  変態を入らないで';
    const body = 'Hello, this is my Illustration for an upcoming anime titled 変態を入らないで PERVERT DOES NOT DREAM OF ENTERING HEAVEN. This project was created in collaboration with the animation director and animator of the show, who also happens to be a really smart guy.';
  return (
    <React.Fragment>
      <BlogPagesContainer>
          <BlogPagesContent>
              <BlogPageContentH1>{title}</BlogPageContentH1>

              <ShareWrapper>
                    <FacebookShareButton url='https://lavaritte.com/blogs/Painting変態を入らないで'>
                        <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton url='https://lavaritte.com/blogs/Painting変態を入らないで' title={title}>
                        <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <LinkedinShareButton url='https://lavaritte.com/blogs/Painting変態を入らないで' title={title} summary={body}>
                        <LinkedinIcon size={32} />
                    </LinkedinShareButton>
                    <PinterestShareButton media='https://cdnb.artstation.com/p/assets/images/images/042/229/393/large/allard-lavaritte-bb-small.jpg?1633950884'>
                        <PinterestIcon size={32}/>
                    </PinterestShareButton>
                    <EmailShareButton url='https://lavaritte.com/blogs/Painting変態を入らないで'
                                    subject={title} 
                                    body={body}>
                        <EmailIcon size={32} />
                    </EmailShareButton>
                </ShareWrapper>

              <BlogPageContentP>
                {body}
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
      <ReadMore Data={BlogsData} Hide={'B001'}/>
    </React.Fragment>
  )
}
