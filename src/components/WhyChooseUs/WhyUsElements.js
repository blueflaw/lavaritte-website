import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

export const WhyUsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px 20%;
    background-color: #090a0e;

    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%; 
        padding: 0 30px;
    }
    @media (max-width: 425px) {
        flex-direction: column;
        max-width: 100%; 
        padding: 0 30px;
    }
`;

export const WhyUsTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const  WhyUsColumnLeft = styled.div`
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%;
        padding: 30px;
    }
`;

export const  WhyUsColumnRight = styled.div`
    flex: 0 0 50%;
    display: flex;
    flex-direction: row;
    justify-content: right;

    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%; 
        justify-content: center;
        padding: 30px;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

export const  WhyUsTopLine = styled.h6`
   font-size: 0.875rem;
   color: #888888;
   padding-bottom: 10px;
`;

export const  WeeklyGrowthTopLine = styled.h6`
   font-size: 0.875rem;
   color: #F5F5F7;
   padding-bottom: 10px;
`;

export const  WeeklyGrowthTextWrapper = styled.div`
   text-align: center;
   justify-self: center;
`;

export const WhyUsH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
    padding-bottom: 10px;
`;

export const WhyUsP = styled.p`
    font-size: 0.875rem;
    color: #888888;
`;

export const Column1 = styled.div`
    margin-right: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex: 1; 
        max-width: 100%;
    }

    @media only screen and (max-width: 425px) {
        flex: 0 0 100%;
        max-width: 100%;
        margin: auto;
        padding: auto;
    }
`;

export const Column2 = styled.div`
    max-height: 550px;
    display: flex;
    @media (max-width: 768px) {
        flex: 1; 
        max-width: 100%;
    }
    @media screen and (max-width: 425px){
        flex: 0 0 100%;
        max-width: 100%;
        margin: 0;
        padding: 0;
    }
`;

export const WhyUsImageWrapper = styled.div`
    text-align: center;
    overflow: hidden;
    height: auto;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex: 1;
    height: 100%;

    @media (max-width: 768px) {
        padding: 30px;
    }
`;

export const FastWebsiteWrapper = styled.div`
    flex: 0 0 50%;
    display: flex;
    background-color: #1E1E1E;
    margin-bottom: 30px;
`;

export const WeeklyGrowthWrapper = styled.div`
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    background-color: #1E1E1E;
    justify-content: center;
    text-align: center;
    padding: 30px;
`;

export const FastWebsiteImageWrapper = styled.div`
    text-align: center;
    overflow: hidden;
    height: auto;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex: 1;
    @media (max-width: 768px) {
        padding: 30px;
    }
`;

export const FastWebsiteImage = styled.img`
   max-width: 178.52px; 
   height: auto;
   object-fit: cover;
   margin: 0 auto;
`;

export const WeeklyGrowthImageWrapper = styled.div`
    text-align: center;
    overflow: hidden;
    height: auto;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex: 1;
    @media (max-width: 768px) {
        padding: 30px;
    }
`;

export const WeeklyGrowthImage = styled.img`
   max-width: 178.52px; 
   max-height: auto;
   object-fit: cover;
   margin: 0 auto;
`;


export const WhyUsImage = styled.img`
   width: auto; 
   max-height: 550px;
   object-fit: cover;

   @media screen and (max-width: 425px){
        max-height: auto;
        width: 100%;
   }
`;
export const WeekGrowthData = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: row;
`;

export const Circle = styled.div`
    width: 12px; 
    height: 12px; 
    background-color: ${props => props.color || "#3498db"}; 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px; 
    color: white;
`;

export const ArrowUpIcon = styled(FaArrowUp)`
    font-size: 0.625rem;
    color: #00FF94;
`;

