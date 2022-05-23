import styled from "styled-components";

export const ButtonDark = styled.a`
    color: #fff;
    margin: 16px;
    background-image: linear-gradient(90deg, #000 50%, transparent 50%);
    background-size: 300%;
    //transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #000;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.2rem;
    transition: all 0.6s;
    max-width: fit-content;
    padding: 14px;
    &:hover {
        color: #000000;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;

export const StoreContaner = styled.div`
    color: #000000;
    width: 100%;
    --flow-space: 2em;
    //padding: 5% 0;
`;

export const QuotesWrapper = styled.div`
    display: flex;
    padding: 30px;
    justify-content: center;
    text-align: center;
    position: relative;
    background-color: #efefef;
`;


export const ViewAllWrapper = styled.div`
    display: flex;
    padding: 30px;
    justify-content: center;
    text-align: center;
    position: relative;
`;

export const StoreTitle = styled.h1`
    color: ${({lightText}) => (lightText ? '#ffffff' : '#000000')};
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        font-size: 0.5rem;
    }
`;

export const RowTitle = styled.h2`
    color: ${({lightText}) => (lightText ? '#ffffff' : '#000000')};
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        font-size: 0.7rem;
    }
`;

export const StoreCard = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 500px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    padding-top: 24px;
    color: #bbb;
    cursor: pointer;
`;

export const Heading = styled.h1`
    color: '#ffffff';
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    @media screen and (max-width: 480px){
        font-size: 0.7rem;
    }
`;

export const Subtitle = styled.p`
    color: '#ffffff';
    max-width: 1100px;
    padding-top: 10px;
    font-size: 0.9rem;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    margin-bottom: 16px;
`;

export const StoreQuotesTextWrapper = styled.div`
    opacity: 1;
    overflow: hidden;
    max-width: 580px;
    color: #000;

    @media screen and (max-width: 768px){
        max-width: 768px;
        padding: 20px;
    }

    @media screen and (max-width: 480px){
        max-width: 480px;
        padding: 10px;
    }
`;