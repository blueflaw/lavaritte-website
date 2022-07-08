import React from 'react';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { ReadMoreBlogs } from '../../ReadMore/ReadMoreBlogs';
import imageBIT from '../../../images/INTO_THE_BIT.jpg';
import { BlogPageContentH1, BlogPageContentP, BlogPageImg, BlogPageImgWrap, BlogPagesContainer, BlogPagesContent, BlogsVidContainer, ShareWrapper } from './BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';


export const PaintingBB = () => {
    const title = 'Painting  変態を入らないで';
    const body = 'Hello, this is my Illustration for an upcoming anime titled 変態を入らないで PERVERT DOES NOT DREAM OF ENTERING HEAVEN. This project was created in collaboration with the animation director and animator of the show, who also happens to be a really smart guy.';
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
      <ReadMoreBlogs Data={BlogsData} />
    </React.Fragment>
  )
}
