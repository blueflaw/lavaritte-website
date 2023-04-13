import React, {useRef} from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
import NewChicDataMapperPreview from '../../StoreComponents/NewChicMapperPreview';
import { StoreQuotesTextWrapper, QuotesWrapper, Heading, Subtitle} from '../../StoreElements/StoreElements';
import NewChicDataMapper from '../../StoreComponents/NewChicMapper';
import { SweatshirtsAndHoodiesData } from '../../StoreData/ClothingData/SweatshirtsAndHoodiesData';

export function SweatshirtsAndHoodies({isPreview}){
    const treshold = 0.9;
    const sectionRef3 = useRef(null);

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

    intersection3 && intersection3.intersectionRatio < treshold ? fadeOut(".section3") : fadeIn(".section3");
    return (

        <React.Fragment>
            <QuotesWrapper id='clothing'>
                <StoreQuotesTextWrapper className="section3" ref={sectionRef3}>
                    <Subtitle>FEATURED COLLECTION</Subtitle>
                    <Heading>Sweatshirts and Hoodies</Heading>
                </StoreQuotesTextWrapper>
            </QuotesWrapper>
        {/* <NewChicDataMapperPreview StoreData={RecommendationsForYou} GenLink={'/about'} ButtonLabel={'View All Product'}/>
        <NewChicDataMapper toreData={RecommendationsForYou} /> */}
        {isPreview
            ? <NewChicDataMapperPreview StoreData={SweatshirtsAndHoodiesData} GenLink={'/store/clothing'} ButtonLabel={'View All Product'}/>
            : <NewChicDataMapper StoreData={SweatshirtsAndHoodiesData} /> 
        }
       </React.Fragment>
    )
}
