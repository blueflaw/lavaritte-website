import React from 'react';
import { ReadMore } from '../../ReadMore/ReadMore';
import { BlogsData } from '../BlogsData';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPagesContainer, BlogPagesContent, BlogsVidContainer, ShareWrapper } from './BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export const PaintingFemaleBreach = () => {
  const title = 'Valorant Female Breach';
  const body = 'Here\'s my fan art of the character Breach from Valorant. It was an absolute blast drawing this one and I\'m always up for drawing some more if you guys have any requests'
  
  return (
    <React.Fragment>
      <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>{title}</BlogPageContentH1>
            <ShareWrapper>
                <FacebookShareButton url='https://lavaritte.com/blogs/PaintingFemaleBreach'>
                    <FacebookIcon size={32} />
                </FacebookShareButton>
                <TwitterShareButton url='https://lavaritte.com/blogs/PaintingFemaleBreach' title={title}>
                    <TwitterIcon size={32} />
                </TwitterShareButton>
                <LinkedinShareButton url='https://lavaritte.com/blogs/PaintingFemaleBreach' title={title} summary={body}>
                    <LinkedinIcon size={32} />
                </LinkedinShareButton>
                <PinterestShareButton media='https://cdna.artstation.com/p/assets/images/images/039/733/768/large/allard-lavaritte-valorant-female-breach.jpg?1626784012'>
                    <PinterestIcon size={32}/>
                </PinterestShareButton>
                <EmailShareButton url='https://lavaritte.com/blogs/PaintingFemaleBreach'
                                subject={title} 
                                body={body}>
                    <EmailIcon size={32} />
                </EmailShareButton>
            </ShareWrapper>
            <BlogPageContentP>
            {body}<span role='img' aria-label='smilie'>😊</span>
            </BlogPageContentP>
            <BlogsVidContainer>
                <ReactYouTube videoId='FiMvC6r8BYM'/>
            </BlogsVidContainer>
            
        </BlogPagesContent>
    </BlogPagesContainer>
    <ReadMore Data={BlogsData} Hide={'B003'}/>
    </React.Fragment>
  )
}
