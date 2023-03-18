import React from 'react';
import {ArtContaner, ArtWrapper, RowPoster} from './ArtElements';
import {ArtData} from './ArtData';
import { ArtDataMapper } from './ArtDataMapper';

export const ArtSection = () => {

    return (
        <React.Fragment>
            <ArtContaner id="art">
                <ArtWrapper>
                    <RowPoster>
                        <ArtDataMapper ArtData={ArtData}/>
                    </RowPoster>
                </ArtWrapper>
            </ArtContaner>
        </React.Fragment>
    )
}

export default ArtSection