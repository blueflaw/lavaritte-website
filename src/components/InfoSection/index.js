import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, 
         InfoWrapper, 
         InfoRow,
         Column1,
         TextWrapper, 
         Heading,
         Subtitle,
         BtnWrap,
        } from './InfoElements'

const InfoSection = ({id, imgStart, lightText, headline, description, buttonLabel}) => {
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
