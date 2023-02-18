import React, { useRef, useState }from 'react';
import {LookingForCardsbuildWrapper, LookingForIcon, 
    LookingForH4, LookingForStorePoster, TextOverlay, LookingForTextWrapper, LookingStoreImageContainer, LookingForCard, StoreQuotesTextWrapper,
    Subtitle, LookingForQuotesWrapper, LookingStoreCardsContainer, ChangeSubtitle} from '../StoreElements/StoreElements';

export const LookingFor = ({CardData}) => {
    const [ name, setName ] = useState('something');
    const textRef = useRef('something');

  return (
      <LookingStoreCardsContainer>
        <LookingForQuotesWrapper>
            <StoreQuotesTextWrapper>
                <Subtitle>LOOKING FOR <ChangeSubtitle ref={textRef}>{name}</ChangeSubtitle> WE GOT YOU COVERED.</Subtitle>
            </StoreQuotesTextWrapper>
        </LookingForQuotesWrapper>
        
        <LookingForCardsbuildWrapper>
        {CardData.map((StoreDetail) =>{
            return <React.Fragment key={StoreDetail.id}>
                <LookingForCard onMouseOver={() =>{
                    textRef.current = setName(StoreDetail.sub);
                }} onMouseLeave={() => {
                    textRef.current = setName('something');
                }}
                to={StoreDetail.link} smooth="true" duration={500} spy="true" exact="true" offset={-80}>
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
