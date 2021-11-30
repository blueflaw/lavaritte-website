import React from 'react'
import ReactYouTube from '../ReactYoutube/ReactYoutube'
import { TextWrapper, TutorialContainer,TutorialContainer2, TutorialWrapper, Heading, Subtitle, TutorialVidContainer, TutorialRow, Column1, Column2} from './TutorialElements'
import { TutorialsData1, TutorialsData2 } from './TutorialsData'
const TutorialSection = () => {
    
    return (
        <div id='tutorials'>
            <TutorialContainer>
            <TutorialWrapper></TutorialWrapper>
                <TutorialWrapper>
                    <TextWrapper>
                        <Heading>{TutorialsData1.headline}</Heading>
                        <Subtitle>{TutorialsData1.description}</Subtitle>
                    </TextWrapper>
                </TutorialWrapper>
            </TutorialContainer>
            <TutorialVidContainer>
                <TutorialRow>
                    <Column1>
                        <ReactYouTube videoId={TutorialsData1.videoId}/>
                    </Column1>
                    <Column2>
                        <ReactYouTube videoId={TutorialsData2.videoId}/>
                    </Column2>
                </TutorialRow>
            </TutorialVidContainer>
            <TutorialContainer2>
                <TutorialWrapper>
                    <TextWrapper>
                        <Subtitle></Subtitle>
                        <Heading >{TutorialsData2.headline}</Heading>
                    </TextWrapper>
                </TutorialWrapper>
                <TutorialWrapper></TutorialWrapper>
            </TutorialContainer2>
        </div>
    )
}

export default TutorialSection
