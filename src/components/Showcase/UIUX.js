import React from 'react';
import { Contact } from '../Contact/Contact';
import { UIUXData } from './UIUXData';
import { Heading, Subtitle, TutorialContainer, TutorialWrapper } from '../TutorialSection/TutorialElements';
import { DataMap } from '../DataMap/DataMap';

export const UIUX = () => {
  return (
    <React.Fragment >
        <TutorialContainer>
          <TutorialWrapper>
            <Heading>Creating Intuitive Interfaces</Heading>
            <Subtitle>A collection of <span style={{color: '#00a2ff'}}>UI/UX</span> designs that simplify user interactions and enhance user satisfaction</Subtitle>
          </TutorialWrapper>
        </TutorialContainer>
        <DataMap Data={UIUXData} Dark={'dark'} Hide={''}/>
        <Contact/>
    </React.Fragment>
  )
}
