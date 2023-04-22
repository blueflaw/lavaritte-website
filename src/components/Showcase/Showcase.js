import React, {useRef, useEffect} from 'react';
import { UIUX } from './UIUX';
import { TweenMax, Power3 } from 'gsap';
import { ShowcaseHeroContainer, HeroContent, ShowcaseHeroH1, ShowcaseHeroP} from './ShowcaseElements';

export const Showcase = () => {
  let refHeroH1 = useRef(null);
  let refHeroP = useRef(null);

  useEffect(() => {
      TweenMax.staggerTo([refHeroH1, refHeroP], .9, {opacity: 1, x: 0, ease: Power3.easeInOut}, .2)
  }, [])

  return (
    <React.Fragment id={'Showcase'}>
      <ShowcaseHeroContainer>
        <HeroContent>
          <ShowcaseHeroH1 ref={el =>{refHeroH1 = el}}>My Diverse Portfolio</ShowcaseHeroH1>
          <ShowcaseHeroP ref={el =>{refHeroP = el}}>Discover My <span style={{color: '#00a2ff'}}>Best</span> Projects</ShowcaseHeroP>
        </HeroContent>
      </ShowcaseHeroContainer>
      <UIUX/>
    </React.Fragment>
  )
}
