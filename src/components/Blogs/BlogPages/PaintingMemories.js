import React from 'react';
import imageBIT from '../../../images/INTO_THE_BIT.jpg';
import { ReadMoreBlogs } from '../../ReadMore/ReadMoreBlogs';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer, ShareWrapper } from './BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export const PaintingMemories = () => {
  const title = 'Memories of a Golden Hour';
  const body = 'Hello, this is a painting from 2021 Photoshop and Blender made this ';
  const BlogsData = [
      {
          id: "001",
          title: "Jett from valorant",
          path : "https://cdna.artstation.com/p/assets/images/images/040/077/016/20210801034343/smaller_square/allard-lavaritte-jetto.jpg",    
          alt : "Jett from valorant",
          category : "Digital Art",
          time : "Painting Process",
          author : "Allard Lavaritte",
          link : "/blogs/PaintingJett",
          preview: "This is my Fan Art of Jett from Valorant. I do claim that it's fan art and nothing else but I just posted it online because it turned out to look so amazing and I wanted to share it with everyone, hope you like it! 🤗"
      },
      {
          id: "001",
          title: "Best Crypto Exchanges",
          path : imageBIT,    
          alt : "Best Crypto Exchanges & Platforms Of 2022",
          category : "Finance",
          time : "Cryptocurrency",
          author : "Allard Lavaritte",
          link : "/blogs/bestcryptoplatforms",
          preview : "Here is our list of the top ten cryptocurrency exchanges and trading platforms. The cryptocurrency deals on this website are provided by firms from whom The College Investor gets income. "
      },
      {
        id: "003",
        title: "Valorant Female Breach",
        path : "https://cdna.artstation.com/p/assets/images/images/039/733/768/20210720072652/smaller_square/allard-lavaritte-valorant-female-breach.jpg",    
        alt : "Valorant Female Breach",
        category : "Digital Art",
        time : "Painting Process",
        author : "Allard Lavaritte",
        link : "/blogs/PaintingFemaleBreach",
        preview : "Here's my fan art of the character Breach from Valorant. It was an absolute blast drawing this one and I'm always up for drawing some more if you guys have any requests 😊"
    },
  ];
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
            <BlogPageImgWrap>
                <BlogsVidContainer>
                    <ReactYouTube videoId='2zvTeKoYcjs'/>
                </BlogsVidContainer>
            </BlogPageImgWrap>
            
        </BlogPagesContent>
    </BlogPagesContainer>
    <ReadMoreBlogs Data={BlogsData} />
    </React.Fragment>
  )
}
