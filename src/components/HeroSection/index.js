import React, {useState} from 'react'
import { ButtonShowreel } from '../ButtonElements'
import Video from '../../videos/FirstContact.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                {/* <HeroH1>TRANSLATING THOUGHTS TO ART</HeroH1> */}
                <HeroH1>Welcome to A.L. Creative</HeroH1>
                <HeroP>Where the world of abstract meets reality.</HeroP>
                <HeroBtnWrapper>
                    <ButtonShowreel to='showreel' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}>
                                view the showreel {hover ? <ArrowForward /> : <ArrowRight/>}
                    </ButtonShowreel>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
