import React, {useRef} from 'react'
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import ReactYouTube from '../ReactYoutube/ReactYoutube'
import { TextWrapper, TutorialContainer,TutorialContainer2, TutorialWrapper, Heading, Subtitle, TutorialVidContainer, TutorialRow, Column1, Column2} from './TutorialElements'
import { TutorialsData1, TutorialsData2 } from './TutorialsData'

const TutorialSection = () => {
    const treshold = 0.9;
    // ref for our element
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    // All the ref to be observed
    const intersection = useIntersection(sectionRef1,{
        root: null,
        rootMargin: "0px",
        threshold: treshold
    });
    const intersection2 = useIntersection(sectionRef2,{
        root: null,
        rootMargin: "0px",
        threshold: treshold
    });
    //Animation for fading in
    const fadeIn =  element => {
        gsap.to(element, 1, {
            opacity: 1,
            x: 0,
            stagger: { amount: 0.3}
        });
    };

    //Animation for fading out
    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity: 0,
            x: 90,
            ease: 'power4.out'
        });
    };

    // checking to see when the viewport is visible to the user
    intersection && intersection.intersectionRatio < treshold ? fadeOut(".section1") : fadeIn(".section1");
    intersection2 && intersection2.intersectionRatio < treshold ? fadeOut(".section2") : fadeIn(".section2");
    return (
        <div id='tutorials'>
            <TutorialContainer>
            <TutorialWrapper></TutorialWrapper>
                <TutorialWrapper>
                        <TextWrapper className="section1" ref={sectionRef1}>
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
                    <TextWrapper className="section2" ref={sectionRef2}>
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
