import React, {Component} from 'react'
import {ArtContaner, ArtWrapper, RowPoster, Poster} from './ArtElements'
import {ArtData} from './ArtData'

export const ArtSection = () => {
    return (
        <>
            <ArtContaner id="art">
                <ArtWrapper>
                    <RowPoster>
                        {ArtData.map((artDetail) =>{
                            return <>
                                <Poster src={artDetail.path} alt={artDetail.alt}/>
                                </>
                        })}
                    </RowPoster>
                </ArtWrapper>
            </ArtContaner>
        </>
    )
}

export default ArtSection