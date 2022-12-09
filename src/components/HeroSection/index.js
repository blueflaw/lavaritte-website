import React, {useRef, useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { TweenMax, Power3 } from 'gsap'
import { ButtonShowreel } from '../ButtonElements'
import Video from '../../videos/Eye-of-Winter.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Modal } from '../Modal/Modal'

const HeroSection = () => {
    let refHeroH1 = useRef(null);
    let refHeroP = useRef(null);
    let refHeroButton = useRef(null);

    useEffect(() => {
        // TweenMax.to(refHeroH1,.8,{opacity: 1, x: 0, ease: Power3.easeInOut, delay: .2})
        // TweenMax.to(refHeroP,.8,{opacity: 1,x: 0,ease: Power3.easeInOut,delay: .4})
        // TweenMax.to(refHeroButton,.8,{opacity: 1,x: 0,ease: Power3.easeInOut,delay: .6})
        TweenMax.staggerTo([refHeroH1, refHeroP, refHeroButton], .9, {opacity: 1, x: 0, ease: Power3.easeInOut}, .2)
    }, [])

    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const openModal = () => {
        setShowModal(prev => !prev);
        scroll.scrollToTop();
    }

    return (
        <React.Fragment>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1 ref={el =>{refHeroH1 = el}}>TRANSLATING THOUGHTS TO ART</HeroH1>
                    {/* <HeroH1>Welcome to A.L. Creative</HeroH1> */}
                    <HeroP ref={el =>{refHeroP = el}}>the world of abstract meets reality.</HeroP>
                    <HeroBtnWrapper ref={el =>{refHeroButton = el}}>
                        <ButtonShowreel to='showreel' 
                                onClick={openModal}
                                onMouseEnter={onHover} 
                                onMouseLeave={onHover}>
                                    view the showreel {hover ? <ArrowForward /> : <ArrowRight/>}
                        </ButtonShowreel>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
            
        </React.Fragment>
    )
}

export default HeroSection
