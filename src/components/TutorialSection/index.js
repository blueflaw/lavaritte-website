import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import ReactYouTube from '../ReactYoutube/ReactYoutube'
import { TextWrapper, TutorialContainer,TutorialContainer2, TutorialWrapper, Heading, Subtitle, TutorialVidContainer, TutorialRow, Column1, Column2} from './TutorialElements'
import { TutorialsData1, TutorialsData2 } from './TutorialsData'
const TutorialSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 10, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
            anchorPlacement: 'center-center', // defines which position of the element regarding to window should trigger the animation
        });
       
    }, [])
    return (
        <div id='tutorials'>
            <TutorialContainer>
            <TutorialWrapper></TutorialWrapper>
                <TutorialWrapper>
                    <TextWrapper data-aos="fade-left">
                        <Heading>{TutorialsData1.headline}</Heading>
                        <Subtitle>{TutorialsData1.description}</Subtitle>
                    </TextWrapper>
                </TutorialWrapper>
            </TutorialContainer>
            <TutorialVidContainer>
                <TutorialRow>
                    <Column1>
                        <ReactYouTube videoId={TutorialsData1.videoId}/>
                    </Column1>
                    <Column2>
                        <ReactYouTube videoId={TutorialsData2.videoId}/>
                    </Column2>
                </TutorialRow>
            </TutorialVidContainer>
            <TutorialContainer2>
                <TutorialWrapper>
                    <TextWrapper  data-aos="fade-right">
                        <Subtitle></Subtitle>
                        <Heading >{TutorialsData2.headline}</Heading>
                    </TextWrapper>
                </TutorialWrapper>
                <TutorialWrapper></TutorialWrapper>
            </TutorialContainer2>
        </div>
    )
}

export default TutorialSection
