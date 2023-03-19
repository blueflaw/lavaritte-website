import React from 'react';
import { BlogPageContentH1, BlogPageContentP, BlogPagesContainer, BlogPagesContent, BlogPageContentAuthor, BlogPageSocialAuthor, ShareWrapper, BlogPageContentH4, 
         LogoWrapper, BlogImageLogo, ButtonOpenAccount, BlogPageContentUnorderedList, ButtonScrollTo } from '../../Blogs/BlogPages/BlogPageElements';
import { animateScroll as scroll } from 'react-scroll';
import { ReadMore } from '../../ReadMore/ReadMore';
import { TutorialsDataMap } from '../TutorialsData';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export const CreateAWebsite = () => {
    const title = 'How I created this Website using React';
    const summary = ' Creating a website can seem like a daunting task, especially if you\'re not familiar with coding. However, with the right tools and a bit of patience, anyone can create a beautiful and functional website. In this blog post, I will share how I created my artist website using React and hosted it on Hostinger.'
    
    const toggleHome = () => {
        scroll.scrollToTop();
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
    };

  return (
    <React.Fragment>
        <BlogPagesContainer>
            <BlogPagesContent>
                <BlogPageContentH1>{title}</BlogPageContentH1>
                <BlogPageContentAuthor>
                    Updated: {new Intl.DateTimeFormat('en-US', {month: "long"}).format(new Date())} 1, {new Date().getFullYear()} By <BlogPageSocialAuthor to="/" onClick={toggleHome}>Allard Lavaritte</BlogPageSocialAuthor>
                </BlogPageContentAuthor>

                <ShareWrapper>
                    <FacebookShareButton url='https://lavaritte.com/blogs/webdevelopment'>
                        <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton url='https://lavaritte.com/blogs/webdevelopment' title={title}>
                        <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <LinkedinShareButton url='https://lavaritte.com/blogs/webdevelopment' title={title} summary={summary}>
                        <LinkedinIcon size={32} />
                    </LinkedinShareButton>
                    <PinterestShareButton media='https://lavaritte.com/images/CreateAWebsiteLarge.jpg'>
                        <PinterestIcon size={32}/>
                    </PinterestShareButton>
                    <EmailShareButton url='https://lavaritte.com/blogs/webdevelopment'
                                    subject={title} 
                                    body={summary}>
                        <EmailIcon size={32} />
                    </EmailShareButton>
                </ShareWrapper>

                <BlogPageContentP>{summary}</BlogPageContentP>
                <BlogPageContentP lightText='lightText'>
                    By the completion of this tutorial, you will understand how to
                    <BlogPageContentUnorderedList lightText='lightText'>
                        <li>
                            <ButtonScrollTo to={'Planning'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Step 1: Planning
                            </ButtonScrollTo>
                        </li>
                        <li>
                            <ButtonScrollTo to={'Environment'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Step 2: Setting Up the Environment
                            </ButtonScrollTo>
                        </li>
                        <li>
                            <ButtonScrollTo to={'Layout'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Step 3: Creating the Layout
                            </ButtonScrollTo>
                        </li>
                        <li>
                            <ButtonScrollTo to={'Functionality'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Step 4: Adding Functionality
                            </ButtonScrollTo>
                        </li>
                        <li>
                            <ButtonScrollTo to={'Styling'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Step 5: Styling
                            </ButtonScrollTo>
                        </li>
                        <li>
                            <ButtonScrollTo to={'Hosting'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                            Step 6: Hosting the Website on Hostinger
                            </ButtonScrollTo>
                        </li>
                    </BlogPageContentUnorderedList>
                </BlogPageContentP>
                
                <BlogPageContentH4 id={'Planning'}>
                   1. Planning
                </BlogPageContentH4>
                <BlogPageContentP lightText='lightText'>
                    Before I started coding, I took some time to plan out what I wanted my website to look like and what features I wanted to include. As an artist,
                    I wanted to showcase my artwork and provide information about upcoming exhibitions and events. I also wanted to include a blog where I could share my thoughts 
                    and experiences as an artist.
                </BlogPageContentP>
                
                <BlogPageContentH4 id={'Environment'}>
                    2. Setting Up the Environment
                </BlogPageContentH4>
                <BlogPageContentP lightText='lightText'>
                    To create my website using React, I first needed to set up my development environment. I used Visual Studio Code as my code editor and installed Node.js, 
                    which includes npm, the Node Package Manager. I then used npm to install create-react-app, a command-line tool for creating new React projects.
                </BlogPageContentP>

                <BlogPageContentH4 id={'Layout'}>
                    3. Creating the Layout
                </BlogPageContentH4>
                <BlogPageContentP lightText='lightText'>
                    Once my development environment was set up, I started creating the layout of my website. I used React components to create a header, navigation menu, 
                    footer, and other elements that would be present on every page. I also created a separate component for each page of my website, including the home page,
                    the about page, and the blog page.
                </BlogPageContentP>
                <LogoWrapper><BlogImageLogo src={'https://lavaritte.com/images/CreateAWebsiteLarge.jpg'} width='500'/></LogoWrapper>

                <BlogPageContentH4 id={'Functionality'}>
                    4. Adding Functionality
                </BlogPageContentH4>
                <BlogPageContentP lightText='lightText'>
                    After creating the basic layout of my website, I started adding functionality to it. 
                    I used React Router to set up routing between the different pages of my website. I also used React hooks to add interactivity to my website, 
                    such as allowing users to click on images to view them in a larger size.
                </BlogPageContentP>

                <BlogPageContentH4 id={'Styling'}>
                    5. Styling
                </BlogPageContentH4>
                <BlogPageContentP lightText='lightText'>
                    Once the functionality of my website was complete, I added styles to make it visually appealing. I used CSS modules to style my React components, 
                    which allows for scoped styling and prevents styles from clashing with one another.
                </BlogPageContentP>

                <BlogPageContentH4 id={'Hosting'}>
                    6. Hosting the Website on Hostinger
                </BlogPageContentH4>
                <BlogPageContentP lightText='lightText'>
                    After completing the development of my website, I needed to host it on a web server so that it could be accessed by the public. 
                    I chose to host my website on Hostinger, a popular web hosting provider. To do this, I signed up for a hosting plan, 
                    uploaded my website files to the server using FTP, and pointed my domain name to the Hostinger server.
                    <LogoWrapper>
                        <ButtonOpenAccount href='https://hostinger.ph?REFERRALCODE=1ALLARD20'target={'_blank'} >Open An Account</ButtonOpenAccount>
                    </LogoWrapper>
                </BlogPageContentP>

                <BlogPageContentH4>
                    Conclusion
                </BlogPageContentH4>
                <BlogPageContentP>
                    Creating my artist website using React and hosting it on Hostinger was a rewarding experience. 
                    By planning ahead and taking the time to learn the necessary tools and techniques, 
                    I was able to create a website that showcases my artwork and provides information to my audience. With a bit of creativity and patience, 
                    anyone can create a beautiful and functional website using React and host it on Hostinger.
                </BlogPageContentP>
                
            </BlogPagesContent>
        </BlogPagesContainer>
        <ReadMore Data={TutorialsDataMap} Hide={'T003'}/>
    </React.Fragment>
  )
}
