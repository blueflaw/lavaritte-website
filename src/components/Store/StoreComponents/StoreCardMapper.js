import React from 'react'
import {StoreCardsContainer, StoreCardsbuildWrapper, StoreCardContentH1, 
    StoreCardContentH4, StorePoster, TextOverlay, TextWrapper, StoreImageContainer, OverlayViewAllWrapper, ButtonWhite, StorePosterCard} from '../StoreElements/StoreElements';

export const StoreCardMapper = ({CardData}) => {
  return (
      <StoreCardsContainer>
        <StoreCardsbuildWrapper>
        {CardData.map((StoreDetail) =>{
            return <React.Fragment key={StoreDetail.id}>
                <StorePosterCard>
                    <StoreImageContainer>
                    <StorePoster src={StoreDetail.imagepath} alt={StoreDetail.alt}/>
                        <TextOverlay>
                            <TextWrapper>
                            <StoreCardContentH4>{StoreDetail.topline}</StoreCardContentH4>
                            <StoreCardContentH1>{StoreDetail.header}</StoreCardContentH1>
                            <OverlayViewAllWrapper>
                            <ButtonWhite href={StoreDetail.link} target="_blank">{StoreDetail.buttontext}</ButtonWhite>
                            </OverlayViewAllWrapper>
                            </TextWrapper>
                        </TextOverlay>
                    </StoreImageContainer>
                </StorePosterCard>
            </React.Fragment>
        })}
            
        </StoreCardsbuildWrapper>
    </StoreCardsContainer>
  )
}
