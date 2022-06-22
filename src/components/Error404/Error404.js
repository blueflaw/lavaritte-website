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
        <ErrorH1>Have you lost your way?</ErrorH1>
        <ErrorP>
          The Page you're searching for is now beyond our reach.<br/>
          Let's take you...
        </ErrorP>
        <ErrorButtonHome to="/" onClick={toggleHome()}>Home</ErrorButtonHome>
        <ErrorCode>Error Code <strong>404</strong></ErrorCode>
        </ErrorContentWrapper>
      </ErrorContent>
    </ErrorContainer>
  )
}
