import React, {useRef} from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { StoreDataCard } from '../../StoreData/StoreData';
import { Clothing} from '../../StoreData/ClothingData/ClothingData';
import { StoreContaner, StoreQuotesTextWrapper, QuotesWrapper, Heading, Subtitle} from '../../StoreElements/StoreElements';
import StoreDataMapper from '../../StoreComponents/StoreDataMapper';
import { StoreCardMapper } from '../../StoreComponents/StoreCardMapper';
import { RecomForYou } from './RecomForYou';

const ClothingCategory = () => {
    const treshold = 0.9;
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);

    const ClothingLink = 'https://www.redbubble.com/people/blueflaw/shop?asc=u&asc=u&iaCode=u-clothing';

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
        <StoreContaner id="store">

        <RecomForYou isPreview={false}/>


        <QuotesWrapper id='clothing'>
                <StoreQuotesTextWrapper className="section1" ref={sectionRef1}>
                    <Subtitle>FEATURED COLLECTION</Subtitle>
                    <Heading>CLOTHING</Heading>
                </StoreQuotesTextWrapper>
        </QuotesWrapper>

        <StoreDataMapper StoreData={Clothing}  GenLink={ClothingLink} ButtonLabel={'View All Product'}/>
        
        <StoreCardMapper CardData={StoreDataCard}/>

        </StoreContaner>
    )
}

export default ClothingCategory
