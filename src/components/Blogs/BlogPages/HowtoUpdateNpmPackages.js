import React from 'react';
import { BlogPageContentH1, BlogPageContentP, BlogPagesContainer, BlogPagesContent, BlogPageContentAuthor, BlogPageSocialAuthor, ShareWrapper, BlogPageContentH4, BlogsCode, Copied } from './BlogPageElements';
import { animateScroll as scroll } from 'react-scroll';
import { ReadMore } from '../../ReadMore/ReadMore';
import { BlogsData } from '../BlogsData';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';

export const HowtoUpdateNpmPackages = () => {
    const title = 'How to Update Npm Packages Safely With Npm Check Updates';

    let NPM1 = 'npm install -g npm-check-updates';
    let NPM2 = 'npx ncu';
    let NPM3 = 'npx ncu -u -t patch';
    let NPM4 = 'npx ncu -u -t minor';
    let NPM5 = 'npx ncu -u -f node-fetch';
    
    const [ isAlertVisible1, setIsAlertVisible1 ] = React.useState(false);
    const [ isAlertVisible2, setIsAlertVisible2 ] = React.useState(false);
    const [ isAlertVisible3, setIsAlertVisible3 ] = React.useState(false);
    const [ isAlertVisible4, setIsAlertVisible4 ] = React.useState(false);
    const [ isAlertVisible5, setIsAlertVisible5 ] = React.useState(false);

    const handleButtonClick1 = () => {
        setIsAlertVisible1(true);
        setTimeout(() => {
            setIsAlertVisible1(false);
        }, 1000);
   }

   const handleButtonClick2 = () => {
        setIsAlertVisible2(true);
        setTimeout(() => {
            setIsAlertVisible2(false);
        }, 1000);
    }

    const handleButtonClick3 = () => {
        setIsAlertVisible3(true);
        setTimeout(() => {
            setIsAlertVisible3(false);
        }, 1000);
    }

    const handleButtonClick4 = () => {
        setIsAlertVisible4(true);
        setTimeout(() => {
            setIsAlertVisible4(false);
        }, 1000);
    }

    const handleButtonClick5 = () => {
        setIsAlertVisible5(true);
        setTimeout(() => {
            setIsAlertVisible5(false);
        }, 1000);
    }

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
                    Updated: February 3, 2022 By <BlogPageSocialAuthor to="/" onClick={toggleHome}>Allard Lavaritte</BlogPageSocialAuthor><br/>
                    Category: Command Line Tools<br/>
                    Tags: web dev npm cli<br/>
                </BlogPageContentAuthor>

                <ShareWrapper>
                    <FacebookShareButton url='https://lavaritte.com/blogs/HowtoUpdateNpmPackages'>
                        <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton url='https://lavaritte.com/blogs/HowtoUpdateNpmPackages' title={title}>
                        <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <LinkedinShareButton url='https://lavaritte.com/blogs/HowtoUpdateNpmPackages' title={title} summary='Upon returning to an old web development project, it is crucial to update the packages in order to acquire new features, bug fixes, and security patches. To safely carry out these updates, NPM Check Updates, a command-line interface tool, can be utilized. The author provides their general method for accomplishing this.'>
                        <LinkedinIcon size={32} />
                    </LinkedinShareButton>
                    <PinterestShareButton media='https://lavaritte.com/static/media/INTO_THE_BIT.8b62c9e7.jpg'>
                        <PinterestIcon size={32}/>
                    </PinterestShareButton>
                    <EmailShareButton url='https://lavaritte.com/blogs/HowtoUpdateNpmPackages'
                                    subject={title} 
                                    body='Upon returning to an old web development project, it is crucial to update the packages in order to acquire new features, bug fixes, and security patches. To safely carry out these updates, NPM Check Updates, a command-line interface tool, can be utilized. The author provides their general method for accomplishing this.'>
                        <EmailIcon size={32} />
                    </EmailShareButton>
                </ShareWrapper>

                <BlogPageContentP>
                    Upon returning to an old web development project, it is crucial to update the packages in order to acquire new features, bug fixes, and security patches. 
                    To safely carry out these updates, NPM Check Updates, a command-line interface tool, can be utilized. The author provides their general method for 
                    accomplishing this.
                </BlogPageContentP>
                {/* --------------------------------------------------------------------------------------
                    add here the list 
                     --------------------------------------------------------------------------------------
                */}
                <BlogPageContentH4>
                1. Install NPM Check Updates.
                </BlogPageContentH4>
                <BlogPageContentP>
                The optimal approach is typically to perform a global installation of NPM Check Updates. Alternatively, it is possible to run the tool using NPX.
                {isAlertVisible1 && <Copied>Copied!</Copied>}
                <BlogsCode onClick={() =>{ 
                    handleButtonClick1();
                    navigator.clipboard.writeText(NPM1);}}>
                    {NPM1}
                </BlogsCode>
                </BlogPageContentP>

                <BlogPageContentH4>
                2. Run NPM Check Updates.
                </BlogPageContentH4>
                <BlogPageContentP>
                cd to a directory with your project and run the following command.
                {isAlertVisible2 && <Copied>Copied!</Copied>}
                <BlogsCode onClick={() =>{ 
                    handleButtonClick2();
                    navigator.clipboard.writeText(NPM2);}}>
                    {NPM1}
                </BlogsCode>
                This will return a list of packages that need to be updated. Here's what it looks like:
                <BlogsCode>
                [====================] 15/15 100%<br/>
                <br/>
                @notionhq/client    ^0.4.11  →  ^0.4.13     <br/>
                node-fetch          ^2.6.6  →   ^3.2.0     <br/>
                gulp-autoprefixer   ^7.0.1  →   ^8.0.0     <br/>
                gulp-imagemin       ^7.1.0  →   ^8.0.0     <br/>
                gulp-sass           ^5.0.0  →   ^5.1.0     <br/>
                gulp-terser         ^2.0.1  →   ^2.1.0     <br/>
                sass                ^1.35.2  →  ^1.49.7   
                </BlogsCode>
                The existing version is on the left and the latest version is on the right. NPU maintains semantic versioning policies, 
                so you can quickly identify patches, minor updates, or major updates that need fixing.
                </BlogPageContentP>
            
                <BlogPageContentH4>
                3. Update Patches.
                </BlogPageContentH4>
                <BlogPageContentP>
                Initially, I ensure that all patches are up-to-date. If the package maintainers adhere to semantic versioning, then this action is not expected to cause any disruptions.
                {isAlertVisible3 && <Copied>Copied!</Copied>}
                <BlogsCode onClick={() =>{ 
                    handleButtonClick3();
                    navigator.clipboard.writeText(NPM3);}}>
                    {NPM3}
                </BlogsCode>
                Run npm i, ensure everything is still working, and commit the changes (so I can revert if necessary).
                </BlogPageContentP>

                <BlogPageContentH4>
                4. Update Minor Versions.
                </BlogPageContentH4>
                <BlogPageContentP>
                Next, I update all minor updates. Again, assuming the package maintainers are following semantic versioning, this shouldn't break anything.
                {isAlertVisible4 && <Copied>Copied!</Copied>}
                <BlogsCode onClick={() =>{ 
                    handleButtonClick4();
                    navigator.clipboard.writeText(NPM4);}}>
                    {NPM4}
                </BlogsCode>
                Run npm i, ensure everything is still working, and commit the changes (so I can revert if necessary).
                </BlogPageContentP>

                <BlogPageContentH4>
                5. Update Major Versions.
                </BlogPageContentH4>
                <BlogPageContentP>
                Finally, I update all major updates. Before you update these, you should read the release note docs to see how the new version will affect your project. 
                Once you know how the updates will affect your code, update each major change in a separate commit.
                <br/><br/>
                With NCU, you can filter for a specific package by using the -filter or -f flag. So in this case, let's say I'm starting with node-fetch. 
                I'd type the following command:
                {isAlertVisible5 && <Copied>Copied!</Copied>}
                <BlogsCode onClick={() =>{ 
                    handleButtonClick5();
                    navigator.clipboard.writeText(NPM5);}}>
                    {NPM5}
                </BlogsCode>
                Run npm i, ensure everything is still working, and commit the changes (so I can revert if necessary).
                <br/><br/>
                Then proceed to the next package to the next major version.
                </BlogPageContentP>
                <BlogPageContentP>
                By following these steps, you can safely update your npm packages without breaking anything. The npm-check-updates tool helps you identify which packages 
                have updates available, and the -u flag helps you update those packages.
                </BlogPageContentP>
            </BlogPagesContent>
        </BlogPagesContainer>
        <ReadMore Data={BlogsData} Hide={'B006'}/>
    </React.Fragment>
  )
}
