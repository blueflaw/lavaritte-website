import React, {useState} from 'react';
import { AboutTheDevBtnWrapper, AboutTheDevColumnLeft, AboutTheDevColumnRight, AboutTheDevContainer, AboutTheDevH1, AboutTheDevImage, AboutTheDevImageWrapper, AboutTheDevP, AboutTheDevTextWrapper, AboutTheDevTopLine } from './AboutTheDevElements'
import { ButtonStartProject } from '../ButtonElements';
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';

export const AboutTheDev = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <React.Fragment>
        <AboutTheDevContainer>
            <AboutTheDevColumnLeft>
                <AboutTheDevTextWrapper>
                    <AboutTheDevTopLine>About the Developer</AboutTheDevTopLine>
                    <AboutTheDevH1>Professional<br/>Website<br/>Developer</AboutTheDevH1>
                    <AboutTheDevP>
                    Hello, I'm Allard Lavaritte, the driving force behind lavaritte.com. As a solo entrepreneur, I bring a unique blend of passion, expertise, and creativity to every project I undertake. With a focus on web application development, UI/UX design, marketing strategies, web development, design, and SEO, I'm dedicated to helping businesses like yours succeed in the digital world.
                    <br/><br/>
                    With a keen eye for detail and a commitment to delivering excellence, I work closely with my clients to understand their goals and bring their visions to life. Whether you're a startup looking to establish your online presence or an established business seeking to enhance your digital strategy, I'm here to provide personalized solutions that drive results.
                    <br/><br/>
                    Join me on this journey, and let's transform your ideas into reality together.
                    </AboutTheDevP>
                    <AboutTheDevBtnWrapper>
                        <ButtonStartProject onMouseEnter={onHover} onMouseLeave={onHover}>Let's Work {hover ?  <ArrowForward/>:<ArrowRight/>}</ButtonStartProject>
                    </AboutTheDevBtnWrapper>
                </AboutTheDevTextWrapper>
            </AboutTheDevColumnLeft>
            <AboutTheDevColumnRight>
                <AboutTheDevImageWrapper>
                    <AboutTheDevImage src={require('../../images/about-the-dev.jpg')} alt='Allard Lavaritte Professional Website Developer' title='Allard Lavaritte'/>
                </AboutTheDevImageWrapper>
            </AboutTheDevColumnRight>
        </AboutTheDevContainer>
    </React.Fragment>
  )
}
