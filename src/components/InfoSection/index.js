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

const InfoSection = ({lightBg, imgStart, topLine, headline, description, buttonLabel, img, alt, lightText, dark, pathLink, button}) => {
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
                                    <Button href={pathLink} target="_blank" dark={dark}>{buttonLabel}</Button>
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
    )
}

export default InfoSection
