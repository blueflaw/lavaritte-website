import styled from 'styled-components';

export const QuotsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 35vh;
    background-color: #000;
`;


export const QuotesTextWrapper = styled.div`
    width: 100%;
    justify-content: center;
    padding: 10px 48px;
    max-width: 1100px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const QuotesH3 = styled.h3`
    color: #ffffff;
    text-align: center;
    letter-spacing: 0.16rem;
    font-size: 2rem;
    padding: 20px;
    font-style: italic;
    text-transform: capitalize;
`;

export const QuotesAuthor = styled.p`
    color: #ffffff;
    font-size: .9rem;
    letter-spacing: 0.2rem;
    
    text-align: right;
    padding-bottom: 20px;
`;