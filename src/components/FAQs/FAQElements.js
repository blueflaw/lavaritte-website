import styled from "styled-components";

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    background-color: #171717;
`;

export const FAQHeaderWrapper = styled.div`
    width: 100%;
    justify-content: center;
`;

export const FAQBodyWrapper = styled.div`
    width: 100%;
    padding: 20px 0;
`;

export const FAQTextWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 6% 40px 0 40px;
    justify-content: center;
`;

export const FAQTextBodyWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 6% 40px 0 40px;
    justify-content: center;
`;

export const BlueText = styled.span`
    color: #00a2ff;
`;

export const QandAWrapper = styled.div`
    margin: 15px 0;
    border-bottom: 1px solid #00a2ff;
`;

export const FAQH1 = styled.h1`
    color: ${({ dark}) => (dark ? '#121212' : '#f1f1f1')};
    font-size: 3rem;
    padding-top: 5%;
    text-align: left;
    letter-spacing: 0.2rem;
`;

export const FAQH4 = styled.h4`
    color: #00a2ff;
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
    text-align: left;
    text-transform: uppercase;
    padding-bottom: 20px;
`;

export const FAQQuestion = styled.p`
    font-size: 1rem;
    color: ${({ dark}) => (dark ? '#121212' : '#f1f1f1')};
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    padding: 10px 0;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const FAQAnswer = styled.p`
    font-size: 1rem;
    color: ${({ dark}) => (dark ? '#121212' : '#f1f1f1')};
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    padding: 10px 0;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;