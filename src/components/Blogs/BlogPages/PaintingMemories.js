import React from 'react';
import { ReadMore } from '../../ReadMore/ReadMore';
import { BlogsData } from '../BlogsData';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPagesContainer, BlogPagesContent, BlogsVidContainer, ShareWrapper } from './BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export const PaintingMemories = () => {
  const title = 'Memories of a Golden Hour';
  const body = 'Hello, this is a painting from 2021 Photoshop and Blender made this ';
  return (
    <React.Fragment>
      <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>{title}</BlogPageContentH1>

            <ShareWrapper>
                    <FacebookShareButton url='https://lavaritte.com/blogs/memoriesofagoldenhour'>
                        <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton url='https://lavaritte.com/blogs/memoriesofagoldenhour' title={title}>
                        <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <LinkedinShareButton url='https://lavaritte.com/blogs/memoriesofagoldenhour' title={title} summary={body}>
                        <LinkedinIcon size={32} />
                    </LinkedinShareButton>
                    <PinterestShareButton media='https://cdna.artstation.com/p/assets/images/images/033/245/632/large/allard-lavaritte-there-is-no-place-like-home-f-small.jpg?1608901718'>
                        <PinterestIcon size={32}/>
                    </PinterestShareButton>
                    <EmailShareButton url='https://lavaritte.com/blogs/memoriesofagoldenhour'
                                    subject={title} 
                                    body={body}>
                        <EmailIcon size={32} />
                    </EmailShareButton>
                </ShareWrapper>


            <BlogPageContentP>
              Hello, this is a painting from 2021 <br/>
              Photoshop and Blender made this <span role='img' aria-label='green'>🍃</span> <span role='img' aria-label='heart'>😍</span>
            </BlogPageContentP>
            <BlogsVidContainer>
                <ReactYouTube videoId='2zvTeKoYcjs'/>
            </BlogsVidContainer>
        </BlogPagesContent>
    </BlogPagesContainer>
    <ReadMore Data={BlogsData} Hide={'B004'}/>
    </React.Fragment>
  )
}
