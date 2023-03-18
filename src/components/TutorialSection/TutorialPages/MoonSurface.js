import React from 'react';
import { BlogPageContentH1, BlogPageContentP, BlogPageImg, BlogPagesContainer, BlogPagesContent, ShareWrapper, ButtonScrollTo,
         BlogPageContentUnorderedList, BlogPageContentH4} from '../../Blogs/BlogPages/BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, 
         LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';
import { TutorialsDataMap } from '../TutorialsData';

import InfoSection from '../../InfoSection';
import { MoonSurfaceTutorial00, MoonSurfaceTutorial01, MoonSurfaceTutorial02, MoonSurfaceTutorial03} from '../TutorialPages/MoonSurfaceData';

import moonsurfaceimage3 from '../../../images/Tutorials/Moonsurface/moonsurfaceimage04.JPG';
import moonsurfaceimage4 from '../../../images/Tutorials/Moonsurface/moonsurfaceimage05.JPG';
import moonsurfaceimage5 from '../../../images/Tutorials/Moonsurface/moonsurfaceimage06.JPG';
import moonsurfaceimage6 from '../../../images/Tutorials/Moonsurface/moonsurfaceimage08.JPG';
import moonsurfaceimage7 from '../../../images/Tutorials/Moonsurface/moonsurfaceimage09.JPG';
import { ReadMore } from '../../ReadMore/ReadMore';

export const MoonSurface = () => {
  const title = 'Learn to create Moon Surface in Blender';
  const body = 'Today, we learn how to make the moon with only procedural textures in Blender!';

  const moonsurfaceimage1 = 'https://cdnb.artstation.com/p/assets/images/images/056/930/243/large/allard-lavaritte-darkness-demon-final.jpg?1670427024';
  const moonsurfaceimage2 = 'https://cdnb.artstation.com/p/assets/images/images/056/930/253/large/allard-lavaritte-darkness-demon-sfw-f.jpg?1670426995';

  return (
    <React.Fragment>
      <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>{title}</BlogPageContentH1>
            <ShareWrapper>
                <FacebookShareButton url='https://lavaritte.com/tutorials/moonsurfacetutorial'>
                    <FacebookIcon size={32} />
                </FacebookShareButton>
                <TwitterShareButton url='https://lavaritte.com/tutorials/moonsurfacetutorial' title={title}>
                    <TwitterIcon size={32} />
                </TwitterShareButton>
                <LinkedinShareButton url='https://lavaritte.com/tutorials/moonsurfacetutorial' title={title} summary={body}>
                    <LinkedinIcon size={32} />
                </LinkedinShareButton>
                <PinterestShareButton media={moonsurfaceimage1}>
                    <PinterestIcon size={32}/>
                </PinterestShareButton>
                <EmailShareButton url='https://lavaritte.com/tutorials/moonsurfacetutorial'
                                subject={title} 
                                body={body}>
                    <EmailIcon size={32} />
                </EmailShareButton>
            </ShareWrapper>

            <BlogPageContentP lightText='lightText'>
              {body} <br/>
              Follow these simple steps and we'll walk you through each step of the process, step-by-step.
              By the completion of this tutorial, you will understand how to &nbsp;
              <ButtonScrollTo to={'moonsurface'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                create moon surface with procedural texture in blender
              </ButtonScrollTo><br/>
              <BlogPageImg src={moonsurfaceimage1}/>
              <BlogPageImg src={moonsurfaceimage2}/>
              
              In Blender, many forms of moon surface can be created using 3rd party textures. However, 
              it will be better in the long run if it does not rely too heavily on textures that others already created. As a result, 
              this course will concentrate on utilizing the default prucedural Nodes.

              <br/><br/>

              Moon Surface is a texture that can be procedurally recreated with a relatively simple shader. 
              But figuring out the correct placement of the shader nodes might be challenging. What is the procedure for making a procedural wood texture in Blender?

              <InfoSection {...MoonSurfaceTutorial00}/>
              <InfoSection {...MoonSurfaceTutorial01}/>
              <InfoSection {...MoonSurfaceTutorial02}/>

              <BlogPageContentH4 id='moonsurface'>Making procedural Moon Surface texture in Blender</BlogPageContentH4><br/>
              <BlogPageImg src={moonsurfaceimage3}/>
              <strong>To create a procedural moonsurface texture:</strong>
              <BlogPageContentUnorderedList lightText='lightText'>

                <li>Navigate to the Shading Workspace</li>
                <li>Create a Texture Bump Node, Voronoi Texture Node, Noise Texture</li>
                <li>Connect the Noise Texture &gt; Voronoi Texture &gt; Bump Node &gt; Normal input Principled BSDF</li>
                <li>Addjust the scale and detail of the Noise Texture to your liking. if you want the exact number im using, scale is 9 and detail is 5</li>
                <li>Select smooth f1 and Chebychev. set the Scale to 3.100, set the smoothness to 0.733 and randomness to 1.</li>

              </BlogPageContentUnorderedList>
              <BlogPageImg src={moonsurfaceimage4}/>

              <BlogPageContentP lightText='lightText'>After that, we have something like this:</BlogPageContentP>
              <BlogPageImg src={moonsurfaceimage5}/>
              <InfoSection {...MoonSurfaceTutorial03}/>

              <BlogPageContentP lightText='lightText'>
                Now that we are using Cycles Engine we have something like this: <br/>
                I added some new shapes and have a moonsurface texture on them
              </BlogPageContentP>

              <BlogPageImg src={moonsurfaceimage6}/>
              <BlogPageImg src={moonsurfaceimage7}/>
            </BlogPageContentP>

            <BlogPageContentH4>Final thoughts</BlogPageContentH4>
            <BlogPageContentP lightText='lightText'>
              Using procedural textures, you may produce materials that are incredibly detailed and customisable. 
              Especially if we don't have access to the equipment or the source to capture photos of the material we'd like.
              <br/><br/>
              They may require a little more setup than simply connecting picture textures, but they do provide a number of advantages over them.
              <br/><br/>
              Node Groups make it straightforward to convert a complicated node tree into a simple collection of values that may be used to modify textures, 
              enhancing their adaptability and reusability.
              <br/><br/>
              I appreciate your time.
              <br/><br/>
              Written by: Allard Lavaritte

            </BlogPageContentP>
            <ShareWrapper>
              <FacebookShareButton url='https://lavaritte.com/tutorials/moonsurfacetutorial'>
                  <FacebookIcon size={32} />
              </FacebookShareButton>
              <TwitterShareButton url='https://lavaritte.com/tutorials/moonsurfacetutorial' title={title}>
                  <TwitterIcon size={32} />
              </TwitterShareButton>
              <LinkedinShareButton url='https://lavaritte.com/tutorials/moonsurfacetutorial' title={title} summary={body}>
                  <LinkedinIcon size={32} />
              </LinkedinShareButton>
              <PinterestShareButton media={moonsurfaceimage1}>
                  <PinterestIcon size={32}/>
              </PinterestShareButton>
              <EmailShareButton url='https://lavaritte.com/tutorials/moonsurfacetutorial'
                              subject={title} 
                              body={body}>
                  <EmailIcon size={32} />
              </EmailShareButton>
          </ShareWrapper>
        </BlogPagesContent>
      </BlogPagesContainer>
      <ReadMore Data={TutorialsDataMap} Hide={'002'}/>
    </React.Fragment>
  )
}
