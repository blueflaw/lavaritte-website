import React, {useState, useRef, useEffect} from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { StoreData, StoreData1 } from './StoreData';
import { StoreContaner, StoreWrapper, RowPoster, StoreRow, StorePostWrap, StorePost, AuthorDisplayPicture, Prize, StoreHeroP,
        StoreTumbnailWrapper, StoreThumbnail, TextWrapper, TextWrap, StoreHeader, StoreInfoRow, AuthorName, AuthorWrap, 
        StoreHeroSection, StoreHeroWrapper, StoreHeroH1, StoreHeroSlide, StoreHeroSlider, StoreHeroImage, StoreHeroContent,
        SliderButtons, PrevArrow, NextArrow, ButtonStore, StoreQuotesTextWrapper, QuotesWrapper, Heading, Subtitle, ButtonDark, ViewAllWrapper} from './StoreElements';


const Store = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length  = slides.length;
    const timeout = useRef(null);
    const treshold = 0.9;
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);

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

    useEffect(() =>{
        const carouselNext =() => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(carouselNext, 3000);
        
        return function () {
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    },[current, length]);

    //carousel next
    const carouselNext  = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent( current === length - 1 ? 0 : current + 1)
    }

    //carousel prev
    const carouselPrev  = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent( current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <=0) {
        return null;
    }

    return (
        <React.Fragment id="store">
            <StoreHeroSection>
                <StoreHeroWrapper>
                    {slides.map((slide, index) => {
                        return(
                            <StoreHeroSlide key={index}>
                                {index === current && (
                                    <StoreHeroSlider>
                                        <StoreHeroImage src={slide.image} alt={slide.alt}/>
                                        <StoreHeroContent>
                                            <StoreHeroP>{slide.topLine}</StoreHeroP>
                                            <StoreHeroH1>{slide.title}</StoreHeroH1>
                                            <ButtonStore>{slide.buttonText}</ButtonStore>
                                        </StoreHeroContent>
                                    </StoreHeroSlider>
                                )}
                            </StoreHeroSlide>
                        );
                    })}
                    <SliderButtons>
                        <PrevArrow onClick={carouselPrev}/>
                        <NextArrow onClick={carouselNext}/>
                    </SliderButtons>
                </StoreHeroWrapper>
            </StoreHeroSection>
        <StoreContaner>

        <QuotesWrapper>
                <StoreQuotesTextWrapper className="section1" ref={sectionRef1}>
                    <Subtitle>FEATURED COLLECTION</Subtitle>
                    <Heading>CLOTHING</Heading>
                </StoreQuotesTextWrapper>
        </QuotesWrapper>

            <StoreWrapper>
                <RowPoster>
                    <StoreRow>
                        {/* use this template */}
                        {StoreData.map((StoreDetail) =>{
                            return <React.Fragment>
                                <StorePostWrap href={StoreDetail.link} target="_blank">
                                    <StorePost key={StoreDetail.id}>
                                        <StoreTumbnailWrapper><StoreThumbnail key={StoreDetail.id} src={StoreDetail.imagePath.default} alt={StoreDetail.alt}/></StoreTumbnailWrapper>
                                        <TextWrapper>
                                            <TextWrap>
                                            <StoreHeader>{StoreDetail.title}</StoreHeader>
                                            <StoreInfoRow>
                                                <AuthorWrap>
                                                    <AuthorName>{StoreDetail.type}</AuthorName>
                                                </AuthorWrap>
                                                <Prize>{StoreDetail.prize}</Prize>
                                            </StoreInfoRow>
                                            </TextWrap>
                                        </TextWrapper>
                                    </StorePost>
                                </StorePostWrap>
                            </React.Fragment>
                        })}
                    </StoreRow>
                </RowPoster>
                <ViewAllWrapper><ButtonDark href='https://www.redbubble.com/people/blueflaw/shop?asc=u' target="_blank">view all products</ButtonDark></ViewAllWrapper>
            </StoreWrapper>
            <StoreWrapper>
                <RowPoster>
                    <StoreRow>
                        {/* use this template */}
                        {StoreData1.map((StoreDetail) =>{
                            return <React.Fragment>
                                <StorePostWrap href={StoreDetail.link} target="_blank">
                                    <StorePost key={StoreDetail.id}>
                                        <StoreTumbnailWrapper><StoreThumbnail key={StoreDetail.id} src={StoreDetail.imagePath.default} alt={StoreDetail.alt}/></StoreTumbnailWrapper>
                                        <TextWrapper>
                                            <TextWrap>
                                            <StoreHeader>{StoreDetail.title}</StoreHeader>
                                            <StoreInfoRow>
                                                <AuthorWrap>
                                                    <AuthorDisplayPicture src="https://cdnb.artstation.com/p/users/avatars/000/190/863/medium/02dbe259f43d1792bc174f3c536c8d4e.jpg" alt="author"/>
                                                    <AuthorName>by {StoreDetail.author}</AuthorName>
                                                </AuthorWrap>
                                                <Prize>{StoreDetail.prize}</Prize>
                                            </StoreInfoRow>
                                            </TextWrap>
                                        </TextWrapper>
                                    </StorePost>
                                </StorePostWrap>
                            </React.Fragment>
                        })}
                    </StoreRow>
                </RowPoster>
            </StoreWrapper>
        </StoreContaner>
        </React.Fragment>
    )
}

export default Store
