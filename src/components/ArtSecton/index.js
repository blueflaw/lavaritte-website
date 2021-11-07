import React from 'react'
import {ArtContaner, ArtWrapper, ArtRow, Column1, Column2, TextWrapper, ArtTitle, Subtile, Img} from './ArtElements'

export const ArtSection = ({title, subtile, img, alt}) => {
    return (
        <>
            <ArtContaner>
                <ArtWrapper>
                    <ArtRow>
                        <Column1>
                            <TextWrapper to={'tutorials'}>
                                <ArtTitle>{title}</ArtTitle>
                                <Subtile>{subtile}</Subtile>
                                <Img src={img.default} alt={alt}></Img>
                            </TextWrapper>
                        </Column1>
                    </ArtRow>
                </ArtWrapper>
            </ArtContaner>
        </>
    )
}

export default ArtSection