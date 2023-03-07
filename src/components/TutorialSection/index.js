import React, {useRef} from 'react'
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { TutorialContainer,TutorialContainer2, TutorialWrapper, Heading, Subtitle, HeroContainer, HeroContent, HeroH1, DonateButton, DonateButton2} from './TutorialElements';
import { ButtonDown } from '../NFT/NFTElements';
import { FaChevronDown} from 'react-icons/fa';
import { TutorialsData1, TutorialsData2, TutorialsDataMap } from './TutorialsData';
import { DataMap } from '../DataMap/DataMap';
import { Newsletter } from '../Newsletter/Newsletter';

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
        <React.Fragment id='tutorials'>
            <HeroContainer>
                <HeroContent>
                    <HeroH1 >Learning never exhausts the mind.</HeroH1>
                    <ButtonDown to={'tutorialscollection'} smooth={true} duration={500} spy={true} exact="true" offset={-80} ><FaChevronDown/></ButtonDown>
                </HeroContent>
            </HeroContainer>

            <TutorialContainer>
                <TutorialWrapper className="section1" ref={sectionRef1} id='tutorialscollection'>
                    <Heading>{TutorialsData1.headline}</Heading>
                    <Subtitle>{TutorialsData1.description} <DonateButton href={'https://www.paypal.com/donate/?hosted_button_id=ZB7H6RJ7UZSN8'} target="_blank" dark={'dark'} big={'big'}>paypal</DonateButton></Subtitle>
                </TutorialWrapper>
            </TutorialContainer>

            <DataMap Data={TutorialsDataMap} Dark='dark' />

            <TutorialContainer2>
                <TutorialWrapper className="section2" ref={sectionRef2}>
                    <Heading >{TutorialsData2.headline}</Heading>
                    <Subtitle>{TutorialsData2.description}</Subtitle>
                    <DonateButton2 href={'https://www.paypal.com/donate/?hosted_button_id=ZB7H6RJ7UZSN8'} target="_blank">paypal</DonateButton2>
                </TutorialWrapper>
            </TutorialContainer2>
            <Newsletter/>
        </React.Fragment>
    )
}

export default TutorialSection
