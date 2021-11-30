import React from 'react'
import { Button } from '../ButtonElements'
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
         Img,
        } from './InfoElements'

const InfoSection = ({lightBg, imgStart, topLine, headline, description, buttonLabel, img, alt}) => {
    return (
        <React.Fragment>
            <InfoContainer lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading>{headline}</Heading>
                                <Subtitle>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap><Img src={img.default} alt={alt}/></ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </React.Fragment>
    )
}

export default InfoSection
