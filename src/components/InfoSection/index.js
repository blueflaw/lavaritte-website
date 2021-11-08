import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, 
         Column2, 
         InfoWrapper, 
         InfoRow,
         Column1,
         TextWrapper, 
         TopLine,
         Heading,
         Subtitle,
         BtnWrap,
         Img, 
         ImgWrap 
        } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, description, buttonLabel, img, alt, primary, dark2, imgbg}) => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                {/* <TopLine>{topLine}</TopLine> */}
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightText={description}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        // primary={primary ? 1 : 0}
                                        // dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
