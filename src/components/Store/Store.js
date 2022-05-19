import React, {useState, useRef, useEffect} from 'react';
import { StoreData } from './StoreData';
import { StoreContaner, StoreWrapper, RowPoster, StoreRow, StorePostWrap, StorePost, AuthorDisplayPicture, Prize, StoreHeroP,
        StoreTumbnailWrapper, StoreThumbnail, TextWrapper, TextWrap, StoreHeader, StoreInfoRow, AuthorName, AuthorWrap, 
        StoreHeroSection, StoreHeroWrapper, StoreHeroH1, StoreHeroSlide, StoreHeroSlider, StoreHeroImage, StoreHeroContent,
        SliderButtons, PrevArrow, NextArrow, ButtonStore} from './StoreElements';


const Store = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length  = slides.length;
    const timeout = useRef(null);

    useEffect(() =>{
        const carouselNext =() => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(carouselNext, 2000);
        
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
