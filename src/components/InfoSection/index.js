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

const InfoSection = () => {
    return (
        <React.Fragment>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>Topline</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <BtnWrap>
                                    <Button to='home'>Button</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap><Img /></ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </React.Fragment>
    )
}

export default InfoSection
