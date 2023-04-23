import React from 'react';
import { FormHeader } from '../Forms/FormHeader';
import { ClientImage, ClientName, ClientPosission, ClientTumbnailWrapper, HeaderTextWrapper, QuoteLeft, QuoteRight, TestimonialPost, TestimonialRowgrid, 
        TestimonialSubtitle, TestimonialsHeader, TestimonialsHeaderWrapper, TestimonialsRow, TestimonialsWrapper, Testimony, TextWrap, TextWrapper } from './TestimonialsElements';
import { TestimonialsData } from './TestimonialsData';
import { UIUXData } from '../Showcase/UIUXData';
import { MoreDesign } from '../ReadMore/MoreDesign';

export const Testimonials = () => {
  return (
    <React.Fragment>
      <FormHeader Header={'What Our Clients Say'} 
                  Subitle={'Hear from our satisfied clients about their experience working with us.'} 
                  BgURL={'https://lavaritte.com/images/usgs-hoS3dzgpHzw-unsplash.jpg'} />
      <TestimonialsHeaderWrapper>
        <HeaderTextWrapper>
        <TestimonialsHeader>We are committed expert partners</TestimonialsHeader>
          <TestimonialSubtitle>
              At our company, we highly appreciate building strong connections with our customers, as we acknowledge the positive impact they can have on our 
              business. Feedback from customers is an essential aspect that aids us in delivering quality service.
          </TestimonialSubtitle>
        </HeaderTextWrapper>
      </TestimonialsHeaderWrapper>
      <TestimonialsWrapper dark={'dark'}>
        <TestimonialsRow>
          <TestimonialRowgrid>
           {TestimonialsData.map((DataDetail) =>{
              return <React.Fragment>
                <TestimonialPost bgColor={DataDetail.backgroundColor}>
                  <ClientTumbnailWrapper><ClientImage src={DataDetail.clientImagePath} alt={DataDetail.clientImageAlt} title={DataDetail.clientName} loading="lazy" width="auto" height="auto"/></ClientTumbnailWrapper>
                  <TextWrapper>
                    <TextWrap>
                      <Testimony>
                        <QuoteLeft/>
                        {DataDetail.clientTestimony}
                        <QuoteRight/>
                        <ClientName>{DataDetail.clientName}</ClientName>
                        <ClientPosission>{DataDetail.clientPosission}</ClientPosission>
                      </Testimony>
                    </TextWrap>
                  </TextWrapper>
                </TestimonialPost>
              </React.Fragment>
           })}
          </TestimonialRowgrid>
        </TestimonialsRow>
      </TestimonialsWrapper>
      <MoreDesign Data={UIUXData} Hide={'UI002'} Dark={'Dark'}/>
    </React.Fragment>
  )
}
