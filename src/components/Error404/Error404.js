import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ErrorButtonHome, ErrorCode, ErrorContainer, ErrorContent, ErrorContentWrapper, ErrorH1, ErrorP } from './Error404Elements'

export const Error404 = () => {
  const toggleHome = () => {
      scroll.scrollToTop();
      window.isNavNFTActive = false;
      window.isNavStoreActive = false;
      window.isNavAboutActive = false;
      window.isNavTutorialsActive = false;
      window.isNavBlogctive = false;
      window.isNavHomeActive = true;
  };

  return (
    <ErrorContainer>
      <ErrorContent>
        <ErrorContentWrapper>
        <ErrorH1> What do you mean there was a mistake?</ErrorH1>
        <ErrorP>
          I made this website for people who love art.<br/>
          
        </ErrorP>
        <ErrorButtonHome to="/" onClick={toggleHome()}>Let's take you Home</ErrorButtonHome>
        <ErrorCode>Error Code <strong>404</strong></ErrorCode>
        </ErrorContentWrapper>
      </ErrorContent>
    </ErrorContainer>
  )
}
