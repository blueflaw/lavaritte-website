import React from 'react';
import ReactYouTube from '../../ReactYoutube/ReactYoutube';
import { BlogPageContentH1, BlogPageContentP, BlogPageImg, BlogPagesContainer, BlogPagesContent, ShareWrapper, ButtonScrollTo,
         BlogPageContentUnorderedList, ButtonOpenAccount, LogoWrapper, BlogPageContentH4, BlogPageContentOrderedList, BlogsVidContainer} from '../../Blogs/BlogPages/BlogPageElements';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, LinkedinShareButton, 
         LinkedinIcon, PinterestShareButton, PinterestIcon} from 'react-share';

import cloudCollection01 from '../../../images/Tutorials/CloudTutorial/Cloud-Collection-01.jpg';
import cloudCollection02 from '../../../images/Tutorials/CloudTutorial/Cloud-Collection-02.jpg';
import cloudCollection03 from '../../../images/Tutorials/CloudTutorial/Cloud-Collection-03.jpg';
import cloudCollection04 from '../../../images/Tutorials/CloudTutorial/Cloud-Collection-04.jpg';
import cloudCollection05 from '../../../images/Tutorials/CloudTutorial/Cloud-Collection-05.jpg';
import cloudCollection06 from '../../../images/Tutorials/CloudTutorial/Cloud-Collection-06.jpg';
import cloudCollection07 from '../../../images/Tutorials/CloudTutorial/Cloud-Collection-07.jpg';
import cloudCollection08 from '../../../images/Tutorials/CloudTutorial/Cloud-Collection-08.jpg';

import cloudtutorial05 from '../../../images/Tutorials/CloudTutorial/cloudtutorial05.jpg';
import cloudtutorial06 from '../../../images/Tutorials/CloudTutorial/cloudtutorial06.jpg';
import cloudtutorial07 from '../../../images/Tutorials/CloudTutorial/cloudtutorial07.jpg';
import cloudtutorial08 from '../../../images/Tutorials/CloudTutorial/cloudtutorial08.jpg';
import cloudtutorial09 from '../../../images/Tutorials/CloudTutorial/cloudtutorial09.jpg';
import cloudtutorial10 from '../../../images/Tutorials/CloudTutorial/cloudtutorial10.jpg';
import cloudtutorial11 from '../../../images/Tutorials/CloudTutorial/cloudtutorial11.jpg';
import cloudtutorial12 from '../../../images/Tutorials/CloudTutorial/cloudtutorial12.jpg';
import cloudtutorial13 from '../../../images/Tutorials/CloudTutorial/cloudtutorial13.jpg';

import InfoSection from '../../InfoSection';
import { CloudTutorial00,  CloudTutorial01, CloudTutorial02, CloudTutorial03} from '../TutorialPages/CloudTutorialsData';

export const CloudTutorial = () => {
  const title = 'Cloud Tutorial';
  const body = 'Learn to paint various clouds & skies with this tutorial';
  const body2 = 'Follow these simple steps and we\'ll walk you through each step of the process, step-by-step.';
  return (
    <React.Fragment>
      <BlogPagesContainer>
        <BlogPagesContent>
            <BlogPageContentH1>{title}</BlogPageContentH1>
            <ShareWrapper>
                <FacebookShareButton url='https://lavaritte.com/tutorials/cloudtutorials'>
                    <FacebookIcon size={32} />
                </FacebookShareButton>
                <TwitterShareButton url='https://lavaritte.com/tutorials/cloudtutorials' title={title}>
                    <TwitterIcon size={32} />
                </TwitterShareButton>
                <LinkedinShareButton url='https://lavaritte.com/tutorials/cloudtutorials' title={title} summary={body}>
                    <LinkedinIcon size={32} />
                </LinkedinShareButton>
                <PinterestShareButton media={cloudCollection01}>
                    <PinterestIcon size={32}/>
                </PinterestShareButton>
                <EmailShareButton url='https://lavaritte.com/tutorials/cloudtutorials'
                                subject={title} 
                                body={body}>
                    <EmailIcon size={32} />
                </EmailShareButton>
            </ShareWrapper>

            <BlogPageContentP lightText='lightText'>
              {body}<br/>{body2}<br/>
              By the completion of this tutorial, you will understand how to
              <BlogPageContentUnorderedList lightText='lightText'>
                <li>
                  <ButtonScrollTo to={'PaintingLargeCumulonimbusClouds'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                    Paint Large Cumulonimbus Clouds
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo to={'PaintingLongEveningCloudsNeartheHorizon'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Paint Long Evening Clouds Near the Horizon
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo to={'PaintingCirrusCloud'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Paint Cirrus Cloud
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo to={'PaintingCirrocumulusandAltocumulusCloud'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Paint Cirrocumulus and Altocumulus Cloud
                  </ButtonScrollTo>
                </li>
                <i><br/><br/>Bonus Content<br/><br/></i>
                <li>
                  <ButtonScrollTo to={'AtmosphericEffect'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Atmospheric Effect
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo to={'Rimlight'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Rimlight
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo to={'LightRayEffect'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Light Ray Effect
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo to={'NightCloud'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Night Cloud
                  </ButtonScrollTo>
                </li>
                <li>
                  <ButtonScrollTo to={'speedpaint'} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                  Speedpainting Demo
                  </ButtonScrollTo>
                </li>
              </BlogPageContentUnorderedList>
            </BlogPageContentP>
            {/* list here samples of your sky collection */}
            <BlogPageImg src={cloudCollection01}/>
            <BlogPageImg src={cloudCollection02}/>
            
            <BlogPageContentP lightText='lightText'>
              In Photoshop, many forms of clouds may be painted using custom and basic brushes. However, 
              it will be better in the long run if it does not rely too heavily on custom brushes. As a result, 
              this course will concentrate on utilizing the default brush.
              <br/><br/>
              The default brushes that I use for painting clouds are "Chalk," "Charcoal," and "Oil Pastel." You might wish to experiment with the following settings:
              <br/><br/>
              <strong>Shape Dyamics</strong>
              <BlogPageContentUnorderedList lightText='lightText'>
                <li><strong>Size Jitter</strong> - Change the size of the brush tip at random. Control using Pen Pressure.</li>
                <li><strong>Minimum Diameter</strong> - Size of the brush tip.</li>
                <li><strong>Angle Jitter</strong> - Randomize the rotation of the brush tip.</li>
                <li><strong>Roundness Jitter</strong> - Randomize the roundness of brush tip form. This compresses the tip shape vertically.</li>
                <li><strong>Minimum Roundness</strong> - The minimum roundness of the brush tip form.</li>
              </BlogPageContentUnorderedList>

              <strong>Scattering</strong>
              <BlogPageContentUnorderedList lightText='lightText'>
                <li><strong>Scatter </strong> - Randomise brush tip location. Enable Both Axes so it scatter on X and Y axis.</li>
                <li><strong>Count </strong>  - Number of brush tip scatter. Default 1 is good enough</li>
              </BlogPageContentUnorderedList>
            </BlogPageContentP>

            <InfoSection {...CloudTutorial00}/>
            <InfoSection {...CloudTutorial01}/>
            

            <BlogPageContentP lightText='lightText'>
                The naming of clouds might be puzzling. So, here is a collection of useful information about names.
                <BlogPageContentUnorderedList lightText='lightText'>
                  <li><strong>Cirro</strong> = High altitude clouds</li>
                  <li><strong>Alto</strong> = Mid altitude clouds</li>
                  <li><strong>Nimbo / Nimbus</strong> = Clouds that bring rain</li>
                  <li><strong>Cumulo</strong> = Piles of clouds</li>
                  <li><strong>Stratus</strong> = Wide flat layer of clouds</li>
                </BlogPageContentUnorderedList>
                Although we are not learning meteorology here, it is important to know that there are several types of clouds in the sky. 
                For example, we don't want to put high-altitude clouds in front of low-altitude clouds.
            </BlogPageContentP>
            <BlogPageContentH4>Shape of Cloud</BlogPageContentH4>
            <BlogPageContentP lightText='lightText'>We frequently want to avoid painting clouds that appear symmetrical.</BlogPageContentP>

            <InfoSection {...CloudTutorial02}/>
            <InfoSection {...CloudTutorial03}/>

            <BlogPageContentH4>Placement of Cloud</BlogPageContentH4>
            <BlogPageContentP lightText='lightText'>
              Clouds placed at random in the sky will be more aesthetically appealing. 
              The first picture shows a more symmetrical configuration. There's nothing wrong with this because it works nicely with certain cartoon-style artwork. 
              However, because we are attempting to create anime-style artwork, the second image with random cloud arrangement works better for us.
            </BlogPageContentP>
            <BlogPageImg src={cloudtutorial05}/>
            <BlogPageImg src={cloudtutorial06}/>

            <BlogPageContentP></BlogPageContentP>
            <BlogPageContentP lightText='lightText'>
            <BlogPageContentH4>Colors of Cloud</BlogPageContentH4><br/>
              Time of day, seasons, weather, and the quantity of light scattered in clouds are all factors to consider. 
              All of these characteristics will have an impact on the colors and shading of clouds. 
              We may utilize this basic cloud at different times of day by adjusting the color palette.
            </BlogPageContentP>
            <BlogPageImg src={cloudCollection03}/>
            <BlogPageImg src={cloudCollection04}/>
            <BlogPageContentP lightText='lightText'>
              Especially during magic hour, the sky and clouds are brilliant and colorful. As a result, we may be more daring while selecting a color palette.
            </BlogPageContentP>

            <BlogPageContentP lightText='lightText'>
              This is where the tutorial starts. You may paint along with the instructions if you download the free cloud brushes. Enjoy! :D
              <LogoWrapper>
                  <ButtonOpenAccount href='https://shrinke.me/BlueFlaws_Sky_Brush_v2' target={'_blank'}>DOWNLOAD BLUEFLAW'S CLOUD BRUSHES</ButtonOpenAccount>
              </LogoWrapper>
              <br/>
              <i>“If you’re nothing without the suit, then you shouldn’t have it.” - Tony Stark</i>
            </BlogPageContentP>
            
            <BlogPageContentP></BlogPageContentP>

            <BlogPageContentH4 id='PaintingLargeCumulonimbusClouds'>Painting Large Cumulonimbus Clouds</BlogPageContentH4>
            
            <BlogPageContentP lightText='lightText'>
              Summer is typically shown in anime by a large cumulus cloud. These clouds are painted in the same manner as the basic cloud: sketch the shape, shade, and smudge.
            </BlogPageContentP>
            <BlogPageImg src={cloudtutorial07}/>
            <BlogPageContentOrderedList lightText='lightText'>
              <li>Draw a cloud form using the cloud's darkest hue. so that the highlight may be added afterward</li>
              <li>
                  The layer's transparency is locked, and the cloud highlight is added. It is simpler to paint from dark to light. 
                  Many times, we would make lights by utilizing 50% opacity of the sky color and stacking them together to produce high lights.
              </li>
              <li>Use smudge tool to blend the colours.</li>
              <li>Unlock layer transparency and smudge the edge of cloud. This step is optional but will add some wispy look near the edge.</li>
              <br/>We may also paint this cloud for sunset scenery by utilizing a different color palette.
            </BlogPageContentOrderedList>
            <BlogPageImg src={cloudCollection05}/>

            <BlogPageContentH4 id='PaintingLongEveningCloudsNeartheHorizon'>Painting Long Evening Clouds Near the Horizon</BlogPageContentH4>
            <BlogPageContentP lightText='lightText'>
              These lengthy clouds approaching the horizon are often visible in the evening. They are simple to paint since they just require two processes.
            </BlogPageContentP>
            <BlogPageImg src={cloudtutorial08}/>
            <BlogPageContentOrderedList lightText='lightText'>
              <li>Create a simple cloud form.</li>
              <li>Using the transform tool, distort the cloud (CTRL-T). The distortion might be symmetrical or asymmetric.</li>
              <li>You can continue to shade the clouds, but they can also be left as a single tone.</li>
            </BlogPageContentOrderedList>

            <BlogPageContentH4 id='PaintingCirrusCloud'>Painting Cirrus Cloud</BlogPageContentH4>
            <BlogPageContentP lightText='lightText'>
              Cirrus clouds are high-altitude clouds that are short, unattached, and hair-like. 
              These tiny clouds are wispy, have a silky texture, or resemble hair tufts. They are whiter than any other cloud in the sky throughout the day. 
              They may take on the colors of the sunset when the Sun sets or rises.
            </BlogPageContentP>
            <BlogPageImg src={cloudtutorial09}/>
            <BlogPageContentOrderedList lightText='lightText'>
              <li>Draw shapes at random.</li>
              <li>Smudge them with a smudge tool and a wide "Spatter" brush at roughly 40% strength. We may smudge the cloud farther by increasing the smudge tool's strength.</li>
              <br/>
              Avoid smudging on areas where we previously smudged because this will cause the cloud to lose its fine detail. 
              If we want to create more cirrus clouds, we need add another layer and continue the process.
            </BlogPageContentOrderedList>

            <BlogPageContentH4 id='PaintingCirrocumulusandAltocumulusCloud'>Painting Cirrocumulus and Altocumulus Cloud</BlogPageContentH4>
            <BlogPageContentP lightText='lightText'>
              Cirrocumulus clouds are thin, white clouds that appear in a regular pattern of ripples. 
              The smaller size of the individual cloud cells distinguishes them from altocumulus. 
              While these clouds are present all year, they are not extremely common and are generally found in conjunction with other cloud types.
              The abundance of little clouds makes it difficult to paint. However, 
              it is possible to do this by painting a large number of little clouds and distorting them into a perspective image.
            </BlogPageContentP>
            <BlogPageImg src={cloudtutorial10}/>
            <BlogPageContentOrderedList lightText='lightText'>
              <li>Paint various opacity little cloud forms at random.</li>
              <li>Using the Transform Tool, distort the cloud (CTRL-T).</li>
            </BlogPageContentOrderedList>

            <BlogPageContentP lightText='lightText'>
              So far, we've covered how to paint several sorts of clouds. Now, let's move on to another topic that might be quite beneficial for painting the sky and clouds.
            </BlogPageContentP>

            <BlogPageContentP lightText='lightText'>
              <BlogPageContentH4 id='AtmosphericEffect'>Atmospheric Effect</BlogPageContentH4><br/>
              The atmospheric effect is used to demonstrate distance or light scattering in the sky. <br/><br/>
              <BlogPageImg src={cloudtutorial11}/>
              <BlogPageContentOrderedList lightText='lightText'>
                <li>Create a new layer using a blending mode like "Screen" or "Add."</li>
                <li>Paint the glowing part with "Air Brush Soft Round".</li>
                <br/>
                We may also experiment with stacking numerous layers with varying blend modes. For combining sky colors, 
                I find that "Overlay" and "Linear Dodge" blend modes work well.
              </BlogPageContentOrderedList>
            </BlogPageContentP>

            <BlogPageContentP lightText='lightText'>
              <BlogPageContentH4 id='Rimlight'>Rimlight</BlogPageContentH4><br/>
              When the sun shines behind the clouds, it illuminates the thinner clouds completely and adds a rim light around the heavier clouds. <br/><br/>
              <BlogPageImg src={cloudtutorial12}/>
              
            </BlogPageContentP>

            <BlogPageContentP lightText='lightText'>
              <BlogPageContentH4 id='LightRayEffect'>Light Ray Effect</BlogPageContentH4><br/>
              Light rays can sometimes be seen radiating from the sky surrounding the clouds. Motion blur or radial zoom blur may be used to simply make light beams.
              <BlogPageImg src={cloudtutorial13}/>
              <BlogPageContentOrderedList lightText='lightText'>
                <li>Create a new layer and paint around the region where the light ray will appear."</li>
                <li>Use either motion blur or radial zoom blur.</li>
              </BlogPageContentOrderedList>
              <BlogPageImg src={cloudCollection06}/>
              To create a light pillar appearance, employ vertical motion blur.
            </BlogPageContentP>
            
            <BlogPageContentP lightText='lightText'>
              <BlogPageContentH4 id='NightCloud'>Night Cloud</BlogPageContentH4><br/><br/>
              During the night, clouds continue to receive light from the moon or other sources. So, depending on whether there is light dispersion in the clouds, we may paint them bright or dark.
              <BlogPageImg src={cloudCollection07}/><br/>
              In our night sky painting, we may even include a milkyway or a nebula cloud. This will enhance the artwork's ethereal and mystical vibe.

            </BlogPageContentP>

            <BlogPageContentH4>I'm at a loss and can't even paint with the basic brush!</BlogPageContentH4>
            <BlogPageContentP lightText='lightText'>
              Don't be concerned! It takes time and effort to obtain the desired results, and 
              I am still learning as I write this. Painting using a customized brush is the greatest technique to achieve a faster result.
             
            </BlogPageContentP>
            <LogoWrapper>
                  <ButtonOpenAccount href='https://shrinke.me/BlueFlaws_Sky_Brush_v2' target={'_blank'}>DOWNLOAD BLUEFLAW'S CLOUD BRUSHES</ButtonOpenAccount>
              </LogoWrapper><br/><br/>
              <BlogsVidContainer id='speedpaint'>
                  <ReactYouTube videoId='eqshrWlAkTw'/>
              </BlogsVidContainer>
            
            <BlogPageContentP lightText='lightText'>
            <BlogPageContentH4>Thanks for Reading!</BlogPageContentH4><br/>
            <BlogPageImg src={cloudCollection08}/><br/>
              <br/><br/>
              This concludes my cloud painting tutorial. Remember, practice makes perfect, and keep painting joyful tiny clouds, as Bob Ross used to say. 
              <br/><br/>
              Thanks for taking the time to read this post. I appreciate it! Feel free to share with friends.
             
            </BlogPageContentP>
            <ShareWrapper>
              <FacebookShareButton url='https://lavaritte.com/tutorials/cloudtutorials'>
                  <FacebookIcon size={32} />
              </FacebookShareButton>
              <TwitterShareButton url='https://lavaritte.com/tutorials/cloudtutorials' title={title}>
                  <TwitterIcon size={32} />
              </TwitterShareButton>
              <LinkedinShareButton url='https://lavaritte.com/tutorials/cloudtutorials' title={title} summary={body}>
                  <LinkedinIcon size={32} />
              </LinkedinShareButton>
              <PinterestShareButton media={cloudCollection01}>
                  <PinterestIcon size={32}/>
              </PinterestShareButton>
              <EmailShareButton url='https://lavaritte.com/tutorials/cloudtutorials'
                              subject={title} 
                              body={body}>
                  <EmailIcon size={32} />
              </EmailShareButton>
          </ShareWrapper>
        </BlogPagesContent>
      </BlogPagesContainer>
    </React.Fragment>
  )
}
