import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { StoreContaner, StoreQuotesTextWrapper, QuotesWrapper, Heading, Subtitle} from '../StoreElements/StoreElements';
import { SliderData } from '../../Slider/SliderData';
import { Slider } from '../../Slider/Slider';
import { StoreMenu } from '../StoreMenu';
import { LookingFor } from '../StoreComponents/LookingFor';
import { LookingForStore } from '../StoreData/StoreData';

const StockPhotos = () => {
    const treshold = 0.9;
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const sectionRef3 = useRef(null);

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
    const intersection3 = useIntersection(sectionRef3,{
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
    intersection3 && intersection3.intersectionRatio < treshold ? fadeOut(".section3") : fadeIn(".section3");

    return (
        <StoreContaner id="store">
        <Slider slides={SliderData}/>
        <StoreMenu/>
        <QuotesWrapper id='wallart'>
                <StoreQuotesTextWrapper className="section2" ref={sectionRef2}>
                    <Subtitle>Stock Photos</Subtitle>
                    <Heading>No Products yet</Heading>
                </StoreQuotesTextWrapper>
        </QuotesWrapper>
        <LookingFor CardData={LookingForStore}/>
        </StoreContaner>
    )
}

export default StockPhotos
