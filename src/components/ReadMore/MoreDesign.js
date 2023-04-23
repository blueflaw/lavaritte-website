import React from 'react';
import { ReadMoreContainer, ReadMoreContent, ReadMoreContentH4 } from './ReadMoreElements';
import { DataMap } from '../DataMap/DataMap';

export const MoreDesign = ({Data, Hide, Dark}) => {
  return (
    <React.Fragment>
        <ReadMoreContainer dark={Dark}>
            <ReadMoreContent>
                <ReadMoreContentH4 dark={Dark}>More Design</ReadMoreContentH4>
            </ReadMoreContent>
        </ReadMoreContainer>
        <DataMap Data={Data} Hide={Hide} Dark={Dark}/>
    </React.Fragment>
  )
}
