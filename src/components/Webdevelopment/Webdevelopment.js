import React, {useRef, useState, useEffect} from 'react';
import { TweenMax, Power3 } from 'gsap';
import { ButtonService, ButtonStartProject } from '../ButtonElements';
import Video from '../../videos/webdev-animation-bg.mp4';
import { ArrowForward, ArrowRight, HeroBg, VideoBg } from '../HeroSection/HeroElements';
import { WebDevContainer, WebDevHeroBtnWrapper, WebDevHeroContent, WebDevHeroH1, WebDevHeroP } from './WebdevElements';

export const Webdevelopment = () => {
  let refHeroH1 = useRef(null);
  let refHeroP = useRef(null);
  let refHeroButton = useRef(null);

  useEffect(() => {
      TweenMax.staggerTo([refHeroH1, refHeroP, refHeroButton], .9, {opacity: 1, x: 0, ease: Power3.easeInOut}, .2)
  }, [])
  const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <React.Fragment>
      <WebDevContainer id='home'>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <WebDevHeroContent>
        <WebDevHeroH1 ref={el =>{refHeroH1 = el}}>Web Design & Artistry</WebDevHeroH1>
            <WebDevHeroP ref={el =>{refHeroP = el}}>Unleash Your Creative Potential</WebDevHeroP>
            <WebDevHeroBtnWrapper ref={el =>{refHeroButton = el}}>
              <ButtonStartProject onMouseEnter={onHover} onMouseLeave={onHover}>
                Start a Project {hover ? <ArrowForward/> : <ArrowRight/>}
              </ButtonStartProject>
              <ButtonService to={'service'} smooth={true} duration={800} spy={true} exact="true" offset={-80}>
                our services
              </ButtonService>
            </WebDevHeroBtnWrapper>
        </WebDevHeroContent>
      </WebDevContainer>
    </React.Fragment>
  )
}
