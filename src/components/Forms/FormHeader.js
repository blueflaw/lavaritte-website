import React from 'react';
import { FormsHeaderContainer, FormsTextWrapper, FormsH3, FormSubtitle} from './FormsElement';

export const FormHeader = ({Header, Subitle, BgURL}) => {
  return (
    <FormsHeaderContainer bgUrl={BgURL}>
        <FormsTextWrapper>
          <FormsH3>{Header}</FormsH3>
          <FormSubtitle>{Subitle}</FormSubtitle>
        </FormsTextWrapper>
    </FormsHeaderContainer>
  )
}
