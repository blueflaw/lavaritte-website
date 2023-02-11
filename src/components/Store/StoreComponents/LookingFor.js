import React from 'react';
import {LookingForCardsbuildWrapper, LookingForIcon, 
    LookingForH4, LookingForStorePoster, TextOverlay, LookingForTextWrapper, LookingStoreImageContainer, LookingForCard, StoreQuotesTextWrapper,
    Subtitle, LookingForQuotesWrapper, LookingStoreCardsContainer} from '../StoreElements/StoreElements';

export const LookingFor = ({CardData}) => {
  return (
      <LookingStoreCardsContainer>
        <LookingForQuotesWrapper>
            <StoreQuotesTextWrapper>
                <Subtitle>LOOKING FOR ART RESOURCES? WE GOT YOU COVERED.</Subtitle>
            </StoreQuotesTextWrapper>
        </LookingForQuotesWrapper>
        
        <LookingForCardsbuildWrapper>
        {CardData.map((StoreDetail) =>{
            return <React.Fragment key={StoreDetail.id}>
                <LookingForCard href={StoreDetail.link} target="_blank">
                    <LookingStoreImageContainer>
                    <LookingForStorePoster src={StoreDetail.imagepath} alt={StoreDetail.alt}/>
                        <TextOverlay>
                            <LookingForTextWrapper>
                            <LookingForIcon>{StoreDetail.icon}</LookingForIcon>
                            <LookingForH4>{StoreDetail.topline}</LookingForH4>
                            </LookingForTextWrapper>
                        </TextOverlay>
                    </LookingStoreImageContainer>
                </LookingForCard>
            </React.Fragment>
        })}
            
        </LookingForCardsbuildWrapper>
    </LookingStoreCardsContainer>
  )
}
