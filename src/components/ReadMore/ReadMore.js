import React from 'react';
import { DataMap } from '../DataMap/DataMap';
import { ReadMoreCardsContainer, ReadMoreCardWrapper, ReadMoreContainer, ReadMoreContent, ReadMoreContentH4 } from './ReadMoreElements';

export const ReadMore = ({Data, Hide}) => {

  return (
    <React.Fragment>
        <ReadMoreContainer>
            <ReadMoreContent>
                <ReadMoreContentH4>More to Read</ReadMoreContentH4>
            </ReadMoreContent>
            <ReadMoreCardsContainer>
                <ReadMoreCardWrapper>
                    <DataMap Data={Data} Dark={'dark'} Hide={Hide}/>
                </ReadMoreCardWrapper>
            </ReadMoreCardsContainer>
        </ReadMoreContainer>
    </React.Fragment>
  )
}
