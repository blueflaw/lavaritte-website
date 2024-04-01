import React from 'react';
import { Column1, Column2, FastWebsiteImage, FastWebsiteImageWrapper, WeeklyGrowthImage, WeeklyGrowthTextWrapper, WeeklyGrowthTopLine, WeeklyGrowthImageWrapper, WhyUsColumnLeft, WhyUsColumnRight, WhyUsContainer, WhyUsH1, WhyUsImage, WhyUsImageWrapper, WhyUsP, WhyUsTextWrapper, WhyUsTopLine, FastWebsiteWrapper, WeeklyGrowthWrapper, Circle, WeekGrowthData, ArrowUpIcon } from './WhyUsElements';

export const WhyChooseUs = () => {
  return (
    <React.Fragment>
        <WhyUsContainer>
            <WhyUsColumnLeft>
                <WhyUsTextWrapper>
                    <WhyUsTopLine>Why Choose Us</WhyUsTopLine>
                    <WhyUsH1>Unlock Your Potential</WhyUsH1>
                    <WhyUsP>
                    Experience, expertise, and innovation converge to deliver tailored solutions that drive results. 
                    With a collaborative approach and a commitment to customer satisfaction, we empower your business to succeed in the digital landscape. 
                    Choose us as your trusted partner and unlock your business's full potential.
                    </WhyUsP>
                </WhyUsTextWrapper>
            </WhyUsColumnLeft>
            <WhyUsColumnRight>
                <Column1>
                    <FastWebsiteWrapper>
                        <FastWebsiteImageWrapper>
                            <FastWebsiteImage src={require('../../images/OurServices/FastWebsite.png')}/>
                        </FastWebsiteImageWrapper>
                    </FastWebsiteWrapper>
                    <WeeklyGrowthWrapper>
                        <WeeklyGrowthTextWrapper>
                            <WeeklyGrowthTopLine>Weekly Growth</WeeklyGrowthTopLine>
                        </WeeklyGrowthTextWrapper>
                        <WeeklyGrowthImageWrapper>
                            <WeeklyGrowthImage src={require('../../images/OurServices/Growth.png')}/>
                        </WeeklyGrowthImageWrapper>
                        <WeekGrowthData>
                            <Circle color='#D9D9D9'/><WhyUsP>&nbsp; 2454 &nbsp;</WhyUsP>
                            <Circle color='#00A2FF'/><WhyUsP>&nbsp; 2.4%</WhyUsP><ArrowUpIcon/>
                        </WeekGrowthData>
                    </WeeklyGrowthWrapper>
                </Column1>
                <Column2>
                    <WhyUsImageWrapper>
                    <WhyUsImage src={require('../../images/OurServices/UnlockPotential.jpg')}/>
                    </WhyUsImageWrapper>
                </Column2>
            </WhyUsColumnRight>
        </WhyUsContainer>
    </React.Fragment>
  )
}
