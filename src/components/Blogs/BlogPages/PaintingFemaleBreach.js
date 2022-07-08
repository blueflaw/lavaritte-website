import React from 'react';
import imageBIT from '../../../images/INTO_THE_BIT.jpg';
import { ReadMoreBlogs } from '../../ReadMore/ReadMoreBlogs';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer, ShareWrapper } from './BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export const PaintingFemaleBreach = () => {
  const title = 'Valorant Female Breach';
  const body = 'Here\'s my fan art of the character Breach from Valorant. It was an absolute blast drawing this one and I\'m always up for drawing some more if you guys have any requests'
  const BlogsData = [
        {
          id : "001",
          title: "変態を入らないで",
          path : "https://cdnb.artstation.com/p/assets/images/images/042/229/393/20211011061443/smaller_square/allard-lavaritte-bb-small.jpg",    
          alt : "変態を入らないで",
          category : "Digital Art",
          time : "Painting Process",
          author : "Allard Lavaritte",
          preview:"This project was created in collaboration with the animation director and animator of the show, who also happens to be a really smart guy.",
          link : "/blogs/Painting変態を入らないで"
      },
      {
          id: "002",
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
  ];
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
            <BlogPageImgWrap>
                <BlogsVidContainer>
                    <ReactYouTube videoId='FiMvC6r8BYM'/>
                </BlogsVidContainer>
            </BlogPageImgWrap>
            
        </BlogPagesContent>
    </BlogPagesContainer>
    <ReadMoreBlogs Data={BlogsData} />
    </React.Fragment>
  )
}
