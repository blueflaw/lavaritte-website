import React from 'react';
import { StoreWrapper, RowPoster, StoreRow, StorePostWrap, StorePost, Prize,StoreTumbnailWrapper, StoreThumbnail, 
    TextWrapper, TextWrap, StoreHeader, StoreInfoRow, Type, AuthorWrap,  ButtonDark, ViewAllWrapper} from './StoreDataMapperElements';

export default function StoreDataMapper({StoreData, GenLink, ButtonLabel}) {
  return (
    <StoreWrapper>
        <RowPoster>
            <StoreRow>
                {/* use this template */}
                {StoreData.map((StoreDetail) =>{
                    return <React.Fragment>
                        <StorePostWrap href={StoreDetail.link} target="_blank">
                            <StorePost key={StoreDetail.id}>
                                <StoreTumbnailWrapper><StoreThumbnail key={StoreDetail.id} src={StoreDetail.imagePath.default} alt={StoreDetail.alt}/></StoreTumbnailWrapper>
                                <TextWrapper>
                                    <TextWrap>
                                    <StoreHeader>{StoreDetail.title}</StoreHeader>
                                    <StoreInfoRow>
                                        <AuthorWrap>
                                            <Type>{StoreDetail.type}</Type>
                                        </AuthorWrap>
                                        <Prize>{StoreDetail.prize}</Prize>
                                    </StoreInfoRow>
                                    </TextWrap>
                                </TextWrapper>
                            </StorePost>
                        </StorePostWrap>
                    </React.Fragment>
                })}
            </StoreRow>
        </RowPoster>
        <ViewAllWrapper>
            <ButtonDark href={GenLink} target="_blank">{ButtonLabel}</ButtonDark>
        </ViewAllWrapper>
        
    </StoreWrapper>
  )
}
