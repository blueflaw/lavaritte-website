import React from 'react';
import { FormsHeaderContainer, FormsTextWrapper, FormsH3} from './FormsElement';

export const FormHeader = ({Header, BgURL}) => {
  return (
    <FormsHeaderContainer bgUrl={BgURL}>
        <FormsTextWrapper>
          <FormsH3>{Header}</FormsH3>
        </FormsTextWrapper>
    </FormsHeaderContainer>
  )
}
