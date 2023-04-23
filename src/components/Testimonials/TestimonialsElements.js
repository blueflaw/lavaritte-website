import styled from "styled-components";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const TestimonialsHeader = styled.p`
    color: #f5f5f7;
    padding: 20px;
    font-size: 4rem;
    text-align: center;
    @media screen and (max-width: 425px){
        font-size: 2.3rem;
    }
`;

export const TestimonialSubtitle = styled.p`
    color: #f5f5f7;
    padding: 20px;
    font-size: 1.3rem;
    text-align: center;
`;

export const TestimonialsHeaderWrapper = styled.div`
    display: block;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #171717;
`;

export const HeaderTextWrapper = styled.div`
    display: inline-block;
    position: relative;
    bottom: 0;
    transition: .5s ease;
    color: #131313;
    text-align: center;
    justify-content: center;
    flex-direction: row;
    max-width: 1100px;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const TestimonialsWrapper = styled.div`
    display: grid;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    padding: 10px 0;
    justify-content: center;
    background-color: ${({dark}) => (dark ? '#171717' : '#f5f5f7')};
`;

export const TestimonialsRow = styled.div`
    display: flex; 
    overflow: hidden;
    padding: 0px;
`;


export const TestimonialRowgrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    grid-gap: var(--auto-grid-gap, 0);
    padding: 0;

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: var(--auto-grid-gap, 0);
    }
    @media screen and (max-width: 425px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: var(--auto-grid-gap, 0);
    }
`;

export const TestimonialWrap = styled.div`
    display: flex;
    margin: 12px;
    overflow: hidden;
    flex-direction: column;
    text-decoration: none;
    color: #000000;
    border-radius: 15px;
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 162, 255, 0.2), 0 6px 20px 0 rgba(0, 162, 255, 0.19);
         & span{
            transform: scale(1.08);
            filter: grayscale(0%);
        }
        
        & h1{
            color: #00a2ff;
        }
    } 
`;

export const TestimonialPost = styled.div`
    position: static;
    overflow: hidden;
    justify-content: center;
    text-align: center;
    max-height: 680px;
    /* background: url(${props => props.bgUrl}) no-repeat center center #111; */
    background: ${props => props.bgColor};
    border-radius: 10px;
    margin: 30px 20px;

    @media (max-width: 1440px) and (min-width: 768px){
        min-height: 780px;
    }
    @media screen and (max-width: 768px){
        min-height: 640px;
    }
    @media screen and (max-width: 425px){
        margin: 30px;
    }
`;

export const ClientTumbnailWrapper = styled.span`
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    overflow: hidden;
    transition: transform 450ms;
`;

export const ClientImage = styled.img`
    object-fit: contain;
    width: auto;
    height: 150px;
    width:  150px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    border-radius: 250px;
    margin: 20px;
    padding: 20px;
`;


export const TextWrapper = styled.div`
    display: inline-block;
    position: relative;
    bottom: 0;
    max-width: 400px;
    transition: .5s ease;
    /* background: ${({dark}) => (dark ? '#222222' : '#ffffff')}; */
    color: #131313;
`;

export const Testimony = styled.p`
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
    line-height: 2;
    font-weight: lighter;
`;

export const ClientName = styled.p`
    padding-top: 20px;
    font-size: 1.4rem;
    font-weight: bold;
`;

export const ClientPosission = styled.p`
    font-size: 1rem;
    font-weight: 400;
`;

export const TextWrap = styled.div`
    padding: 10px;
`;

export const QuoteLeft = styled(FaQuoteLeft)`
    margin-right: 20px;
`;

export const QuoteRight = styled(FaQuoteRight)`
     margin-left: 20px;
`;