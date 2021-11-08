import React from 'react'
import { TextWrapper, TutorialContainer, TutorialWrapper, Heading, Subtitle } from './TutorialElements'

const TutorialSection = () => {
    return (
        <>
            <TutorialContainer id='tutorials'>
            <TutorialWrapper></TutorialWrapper>
                <TutorialWrapper>
                    <TextWrapper>
                        <Heading>COURSES FROM THE INDUSTRY VETERAN</Heading>
                        <Subtitle>Over almost two decades of working in entertainment and design with world reknown clinets, I've made every mistake in the books and crafted my courses and tutorials so that you don't have to repeat those mistakes. My library offers quick bite-size affordable tutorials as well as fully fleshed out courses from which you can learn step by step on how I successfully made a living as an artist and art director in entertainment industry.</Subtitle>
                    </TextWrapper>
                </TutorialWrapper>
            </TutorialContainer>
        </>
    )
}

export default TutorialSection
