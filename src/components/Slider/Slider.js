import React, {useState, useRef, useEffect} from 'react';
import { SliderHeroP, SliderHeroSection, SliderHeroWrapper, SliderHeroH1, SliderHeroSlide, SliderHeroSlider, SliderHeroImage, SliderHeroContent,
    SliderButtons, PrevArrow, NextArrow, ButtonSlider} from './SliderElements';

export const Slider = ({slides}) => {
    
    const [current, setCurrent] = useState(0)
    const length  = slides.length;
    
    const timeout = useRef(null);
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
      <React.Fragment>
          <SliderHeroSection>
            <SliderHeroWrapper>
                {slides.map((slide, index) => {
                    return(
                        <SliderHeroSlide key={slide.id}>
                            {index === current && (
                                <SliderHeroSlider>
                                    <SliderHeroImage src={slide.image} alt={slide.alt}/>
                                    <SliderHeroContent>
                                        <SliderHeroP>{slide.topLine}</SliderHeroP>
                                        <SliderHeroH1>{slide.title}</SliderHeroH1>
                                        <ButtonSlider to={slide.buttonLink} smooth="true" duration={500} spy={true} exact="true" offset={-80}>{slide.buttonText}</ButtonSlider>
                                    </SliderHeroContent>
                                </SliderHeroSlider>
                            )}
                        </SliderHeroSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={carouselPrev}/>
                    <NextArrow onClick={carouselNext}/>
                </SliderButtons>
            </SliderHeroWrapper>
        </SliderHeroSection>
      </React.Fragment>
  )
}
