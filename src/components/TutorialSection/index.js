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
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
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
