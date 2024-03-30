import React from 'react';
import { PrivacyPolicysData } from './PrivacyPolicyData';
import { PrivacyPolicyAnswer, PrivacyPolicyBodyWrapper, PrivacyPolicyContainer, PrivacyPolicyH1, PrivacyPolicyH3, PrivacyPolicyHeaderWrapper, PrivacyPolicyTextBodyWrapper, PrivacyPolicyTextWrapper, QandAWrapper } from './PrivacyPolicyElements';
import ButtonMailto from '../ButtonMailto';
export const PrivacyPolicy = () => {

    return (
        <PrivacyPolicyContainer id='PrivacyPolicy'>
            <PrivacyPolicyHeaderWrapper>
                <PrivacyPolicyTextWrapper>
                    <PrivacyPolicyH1>Privacy Policy</PrivacyPolicyH1>
                    <PrivacyPolicyAnswer>
                    At Lavaritte.com, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and disclose information when you use our website (lavaritte.com) and any services offered through it.
                    </PrivacyPolicyAnswer>
                </PrivacyPolicyTextWrapper>
            </PrivacyPolicyHeaderWrapper>
            <PrivacyPolicyBodyWrapper>
                <PrivacyPolicyTextBodyWrapper>
                    {PrivacyPolicysData.map((DataDetail) =>{
                        return <React.Fragment key={DataDetail.id}>
                             <QandAWrapper>
                                <PrivacyPolicyH3 ><strong></strong>{DataDetail.q}</PrivacyPolicyH3>
                                <PrivacyPolicyAnswer>
                                    <strong></strong>
                                    {DataDetail.a} <br/><br/>
                                    {DataDetail.a2}
                                </PrivacyPolicyAnswer>
                            </QandAWrapper>
                        </React.Fragment>
                    })}
                    <PrivacyPolicyH3>Contact Us</PrivacyPolicyH3>
                    <PrivacyPolicyAnswer>
                    If you have any questions about this Privacy Policy, please contact us at <ButtonMailto label="me@lavaritte.com" mailto="mailto:me@lavaritte.com"/>
                    </PrivacyPolicyAnswer>
                </PrivacyPolicyTextBodyWrapper>
            </PrivacyPolicyBodyWrapper>
        </PrivacyPolicyContainer>
    )
}
