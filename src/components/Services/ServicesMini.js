import React from 'react';
import { OurServicesContainer, OurServicesContent, WebDevContentImageWrapper, WebDevContentTextWrapper, OurservicesButtomItem,
    OurservicesImage, WebDevContentH2, WebDevContentH5, WebDevContentP, OurServicesInfoWrap, OurServicesInfo, 
    OurServicesColumnLeft, OurServicesColumnRight, OurservicesButtomContent, OurservicesButtomContentTextWrapper, ButtomItemHeader, ButtomItemP, HorizontalLine } from '../Webdevelopment/WebdevElements';
import { ButtonService2 } from '../ButtonElements';

export const ServicesMini = () => {
  return (
    <React.Fragment>
        <OurServicesContainer id='service'>
        <OurServicesColumnLeft>
          <WebDevContentTextWrapper>
            <OurServicesContent>
              <WebDevContentH2>Our Services</WebDevContentH2>
              <ButtonService2 to={'service'} smooth={true} duration={800} spy={true} exact="true" offset={-80}>
                  our services
              </ButtonService2>
            </OurServicesContent>
            <OurServicesInfoWrap>
              <OurServicesInfo>
                <WebDevContentH5>Development</WebDevContentH5>
                <WebDevContentP>
                Transform your vision into reality with our expert development services. From custom coding to seamless integration of powerful features
                </WebDevContentP>
              </OurServicesInfo>
              <HorizontalLine/>
              <OurServicesInfo>
                <WebDevContentH5>Design</WebDevContentH5>
                <WebDevContentP>
                Elevate your brand's aesthetic appeal and user experience with our exceptional design services
                </WebDevContentP>
              </OurServicesInfo>
            </OurServicesInfoWrap>
          </WebDevContentTextWrapper>
          <OurservicesButtomContent>
              <OurservicesButtomContentTextWrapper>
              <OurservicesButtomItem>
                <ButtomItemHeader>20+</ButtomItemHeader>
                <ButtomItemP>Complete Project</ButtomItemP>
              </OurservicesButtomItem>
              <OurservicesButtomItem>
                <ButtomItemHeader>99%</ButtomItemHeader>
                <ButtomItemP>Client Satisfaction Rate</ButtomItemP>
              </OurservicesButtomItem>
              <OurservicesButtomItem>
                <ButtomItemHeader>Achieve 60%</ButtomItemHeader>
                <ButtomItemP>More Online Visibility</ButtomItemP>
              </OurservicesButtomItem>
              </OurservicesButtomContentTextWrapper>
          </OurservicesButtomContent>
        </OurServicesColumnLeft>

        <OurServicesColumnRight>
          <WebDevContentImageWrapper>
            <OurservicesImage src={require('../../images/our-services.jpg')} alt='an image of a laptop showing Allard Lavaritte website' title='Our Services'/>
          </WebDevContentImageWrapper>
        </OurServicesColumnRight>
      </OurServicesContainer>
    </React.Fragment>
  )
}
