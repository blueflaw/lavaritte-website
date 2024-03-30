import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, 
    InfoWrapper, 
    InfoRow,
    Column1,
    Column2,
    TextWrapper, 
    Heading,
    Subtitle,
    BtnWrap,
    TopLine,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({lightBg, imgStart, topLine, headline, description, buttonLabel, img, alt, lightText, dark, button, primary, darkText, big}) => {
    return (
        <React.Fragment>
            <InfoContainer lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine lightText={lightText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightText={lightText}>{description}</Subtitle>
                                <BtnWrap button={button}>
                                    <Button 
                                        to='home' 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact="true" 
                                        offset={-80} 
                                        primary={primary}
                                        darkText={darkText}
                                        dark={dark ? 1 : 0}
                                        big={big}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap><Img src={img} alt={alt} title={'image'} loading="lazy" width="auto" height="auto"/></ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </React.Fragment>
    );
};

export default InfoSection;
