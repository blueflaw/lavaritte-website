import React, {useRef} from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { Accessories, WallArt, Newchic, Clothing, StoreDataCard} from '../StoreData';
import { StoreContaner, StoreQuotesTextWrapper, QuotesWrapper, Heading, Subtitle} from '../StoreElements/StoreElements';
import StoreDataMapper from '../StoreComponents/StoreDataMapper';
import { StoreCardMapper } from '../StoreComponents/StoreCardMapper';

const General = () => {
    const treshold = 0.9;
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const sectionRef3 = useRef(null);

    const NewchicLink = '';
    const ClothingLink = 'https://www.redbubble.com/people/blueflaw/shop?asc=u&asc=u&iaCode=u-clothing';
    const AccessoriesLink = 'https://www.redbubble.com/people/blueflaw/shop?asc=u&asc=u&iaCode=u-accessories';
    const WallAretLink = 'https://www.redbubble.com/people/blueflaw/shop?&asc=u&iaCode=u-prints';

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
        <QuotesWrapper id='clothing'>
                <StoreQuotesTextWrapper className="section3" ref={sectionRef3}>
                    <Subtitle>FEATURED COLLECTION</Subtitle>
                    <Heading>CLOTHING</Heading>
                </StoreQuotesTextWrapper>
        </QuotesWrapper>
        <StoreDataMapper StoreData={Newchic}  GenLink={NewchicLink} ButtonLabel={'View All Product'}/>

        <QuotesWrapper id='clothing'>
                <StoreQuotesTextWrapper className="section1" ref={sectionRef1}>
                    <Subtitle>FEATURED COLLECTION</Subtitle>
                    <Heading>CLOTHING</Heading>
                </StoreQuotesTextWrapper>
        </QuotesWrapper>

        <StoreDataMapper StoreData={Clothing}  GenLink={ClothingLink} ButtonLabel={'View All Product'}/>

        <StoreCardMapper CardData={StoreDataCard}/>
        
        <QuotesWrapper id='wallart'>
                <StoreQuotesTextWrapper className="section2" ref={sectionRef2}>
                    <Subtitle>FEATURED COLLECTION</Subtitle>
                    <Heading>Posters</Heading>
                </StoreQuotesTextWrapper>
        </QuotesWrapper>
        <StoreDataMapper StoreData={WallArt}  GenLink={WallAretLink} ButtonLabel={'View All Wall Art'}/>

        <QuotesWrapper id='accessories'>
                <StoreQuotesTextWrapper className="section2" ref={sectionRef2}>
                    <Subtitle>FEATURED COLLECTION</Subtitle>
                    <Heading>ACCESSORIES</Heading>
                </StoreQuotesTextWrapper>
        </QuotesWrapper>
        <StoreDataMapper StoreData={Accessories} GenLink={AccessoriesLink} ButtonLabel={'shop'}/>

        </StoreContaner>
    )
}

export default General
