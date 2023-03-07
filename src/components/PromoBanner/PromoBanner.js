import React, { useRef, useState } from 'react';
import { BannerContainer, PromoBannerContainer, CloseBannerButton, BannerTextWrapper, BannerItem, BannerText, PromoButton} from './PromoBannerEllements';

export const PromoBanner = () => {
  const promoRef = useRef(null);
  const [showPromo, setShowPromo] = useState(true);

  const removeElement = () => {
    setShowPromo((prev) => !prev);
  };
  return (
    <React.Fragment>
      {showPromo ? (
      <BannerContainer showPromo={showPromo} ref={promoRef}>
        <PromoBannerContainer>
            <BannerTextWrapper>
            </BannerTextWrapper>
            <BannerTextWrapper>
                <BannerItem>
                    <BannerText>Marketplace Sale</BannerText>
                </BannerItem>
                <BannerItem>
                    <BannerText><PromoButton to='/store'>Shop Now</PromoButton></BannerText>
                </BannerItem>
            </BannerTextWrapper>
            <BannerTextWrapper>
                <BannerItem>
                    <BannerText><CloseBannerButton onClick={removeElement} aria-label='Close Promo Banner' /></BannerText>
                </BannerItem>
            </BannerTextWrapper>
        </PromoBannerContainer>
      </BannerContainer>
      ): null}
    </React.Fragment>
  )
}
