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
    color: #000;
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    @media screen and (max-width: 480px){
        font-size: 0.7rem;
    }
`;

export const Subtitle = styled.p`
    color: #000;
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

export const StoreCardsContainer = styled.div`
    display: grid;
    background-color: #efefef;
    padding: 5% 0;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;
export const StoreCardsbuildWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-self: center;
    flex-direction: row;
    //max-width: 1100px;
    overflow: hidden;
    padding: 0;

    @media screen and (max-width: 768px){
        flex-direction: column ;
    }
`;

export const StoreCardContentH1 = styled.h1`
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    @media screen and (max-width: 480px){
        font-size: 0.7rem;
    }
`;

export const StoreCardContentH4 = styled.h1`
    color: #fff;
    max-width: 1100px;
    padding-top: 10px;
    font-size: 0.9rem;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    margin-bottom: 16px;
`;

export const StoreImageContainer = styled.div`
    position: relative;
    width: 500px;
    height: 500px;
    margin-bottom: -4px;
    margin-left: 10%;
    overflow: hidden;
    &:hover {
        & img{
            transform: scale(1.08);
            filter: grayscale(0%);
        }
        & span{
            opacity: 1;
        }

    } 
    @media screen and (max-width: 480px){
        width: 300px;
        height: 300px;
    }
`;


export const ButtonWhite = styled.a`
    color: #000000;
    margin-top: 10px;
    background-image: linear-gradient(90deg, #fff 50%, #000000 50%);
    background-size: 300%;
    transition: all 0.5s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #fff;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.2rem;
    transition: all 0.6s;
    max-width: fit-content;
    padding: 14px;
    &:hover {
        color: #fff;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;

export const StorePosterCard = styled.div`
    display: flex;
    width: 500px;
    height: 500px;
`;


export const OverlayViewAllWrapper = styled.div`
    display: flex;
    justify-content: left;
    text-align: left;
    position: relative;
`;

export const StorePoster = styled.img`
    object-fit: fill;
    width: 100%;
    max-height: 500px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    :hover{
        transform: scale(1.08);
    }
`;


export const TextOverlay = styled.span`
    display: flex;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: .5s ease;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8));
`;


export const TextWrapper = styled.div`
    position: absolute;
    top: 70%;
    padding-left: 20px;
    text-align: left;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: .5s ease;

    @media screen and (max-width: 480px){
        padding-left: 5px;
        top: 20px;
        left: 20px;
    }
`;