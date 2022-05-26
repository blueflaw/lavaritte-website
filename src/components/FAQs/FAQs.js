import React from 'react';
import { FAQsData } from './FAQsData';
import { FAQAnswer, FAQBodyWrapper, FAQContainer, FAQH1, FAQH4, FAQHeaderWrapper, FAQQuestion, FAQTextBodyWrapper, FAQTextWrapper, QandAWrapper } from './FAQElements';

export const FAQs = () => {

    return (
        <FAQContainer id='faq'>
            <FAQHeaderWrapper>
                <FAQTextWrapper>
                    <FAQH1>Frequently Asked Questions</FAQH1>
                    <FAQH4>FAQs</FAQH4>
                    <FAQAnswer>
                        Here are some of the answers to the frequently asked questions about my art. If you have a question that's not answered here,
                        please contact me at allard_lavaritte@icloud.com
                    </FAQAnswer>
                </FAQTextWrapper>
            </FAQHeaderWrapper>
            <FAQBodyWrapper>
                <FAQTextBodyWrapper>
                    {FAQsData.map((DataDetail) =>{
                        return <React.Fragment>
                             <QandAWrapper key={DataDetail.id}>
                                <FAQQuestion ><strong>Q:&nbsp;</strong>{DataDetail.q}</FAQQuestion>
                                <FAQAnswer>
                                    <strong>A:&nbsp;</strong>
                                    {DataDetail.a} <br/><br/>
                                    {DataDetail.a2}
                                </FAQAnswer>
                            </QandAWrapper>
                        </React.Fragment>
                    })}
                </FAQTextBodyWrapper>
            </FAQBodyWrapper>
        </FAQContainer>
    )
}