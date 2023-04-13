import React, { useState } from 'react';
import { StoreWrapper, RowPoster, NewChicStoreRow, StorePostWrap, StorePost, NewChicPrize,StoreTumbnailWrapper, StoreThumbnail, 
    TextWrapper, TextWrap, NewChicHeader, StoreInfoRow, Type, AuthorWrap, NewChicPrizeSale, PriceWrap, ButtonDark, ViewAllWrapper, ArrowDown} from '../StoreElements/StoreDataMapperElements';

export default function NewChicDataMapper({StoreData}) {
    
    const [count, setCount] = useState(8);

  return (
    <StoreWrapper>
        <RowPoster>
            <NewChicStoreRow>
                {/* use this template */}
                {StoreData.map((StoreDetail, i) =>{
                    return (i < count ) ? <React.Fragment key={StoreDetail.id}>
                        {console.log(StoreData.size)}
                        <StorePostWrap href={StoreDetail.link} target="_blank">
                            <StorePost>
                                <StoreTumbnailWrapper><StoreThumbnail src={StoreDetail.imagePath} alt={StoreDetail.alt} title={StoreDetail.title} loading="lazy" width="auto" height="auto"/></StoreTumbnailWrapper>
                                <TextWrapper>
                                    <TextWrap>
                                    <NewChicHeader>{StoreDetail.title}</NewChicHeader>
                                    <StoreInfoRow>
                                        <AuthorWrap>
                                            <Type>{StoreDetail.type}</Type>
                                        </AuthorWrap>
                                        <PriceWrap>
                                            <NewChicPrize>{StoreDetail.prize}<NewChicPrizeSale>{StoreDetail.prizeSale}</NewChicPrizeSale></NewChicPrize>
                                        </PriceWrap>
                                    </StoreInfoRow>
                                    </TextWrap>
                                </TextWrapper>
                            </StorePost>
                        </StorePostWrap>
                    </React.Fragment> : null
                }).filter(x=>x)}
            </NewChicStoreRow>
        </RowPoster>
        <ViewAllWrapper>
            <ButtonDark onClick={() => setCount(count + 8)}>View More <ArrowDown/></ButtonDark>
        </ViewAllWrapper>
        
    </StoreWrapper>
  )
}
