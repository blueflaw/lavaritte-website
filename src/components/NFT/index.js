import React, {useRef} from 'react'
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import ReactYouTube from '../ReactYoutube/ReactYoutube'
import { TextWrapper, NFTContainer,NFTContainer2, NFTWrapper, Heading, Subtitle, NFTVidContainer, NFTRow, Column1, 
         Column2, HeroContainer, HeroContent, HeroH1} from './NFTElements'
import { NFTsData1, NFTsData2 } from './NFTData'

const NFTSection = () => {
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
        <div id='NFT'>
            <HeroContainer>
                <HeroContent>
                    <HeroH1 >learn. practice. make a living</HeroH1>
                </HeroContent>
            </HeroContainer>

            <NFTContainer>
            <NFTWrapper></NFTWrapper>
                <NFTWrapper>
                        <TextWrapper className="section1" ref={sectionRef1}>
                            <Heading>{NFTsData1.headline}</Heading>
                            <Subtitle>{NFTsData1.description}</Subtitle>
                        </TextWrapper>
                </NFTWrapper>
            </NFTContainer>
            <NFTVidContainer>
                <NFTRow>
                    <Column1>
                        <ReactYouTube videoId={NFTsData1.videoId}/>
                    </Column1>
                    <Column2>
                        <ReactYouTube videoId={NFTsData2.videoId}/>
                    </Column2>
                </NFTRow>
            </NFTVidContainer>
            <NFTContainer2>
                <NFTWrapper>
                    <TextWrapper className="section2" ref={sectionRef2}>
                        <Subtitle></Subtitle>
                        <Heading >{NFTsData2.headline}</Heading>
                    </TextWrapper>
                </NFTWrapper>
                <NFTWrapper></NFTWrapper>
            </NFTContainer2>
        </div>
    )
}

export default NFTSection
