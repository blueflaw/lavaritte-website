import styled, {css} from "styled-components";
import {Link as LinkS} from 'react-scroll'
import { FaAngleLeft,  FaAngleRight} from 'react-icons/fa';

export const SliderHeroSection = styled.div`
    height: 70vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

export const SliderHeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const SliderHeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const SliderHeroSlider = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
    }
`;

export const SliderHeroImage = styled.img`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    transition: all 0.6s;
`;

export const SliderHeroContent = styled.div`
    position: relative;
    text-align: center;
    align-items: center;
    z-index: 6;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% - 100px);
`;

export const SliderButtons = styled.div`
    position: absolute;
    bottom: 4vh;
    //right: 10vw;
    display: flex;
    z-index: 4;
`;

const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    opacity: 0.8;
    padding: 10px;
    margin-right: 1rem;
    user-select: none;
    transition: 0.3s;

    &:hover{
        color: #00a2ff;
        opacity: 1;
        transform: scale(1.05);
    }
`;

export const PrevArrow = styled(FaAngleLeft)`
    ${arrowButtons}
`;

export const NextArrow = styled(FaAngleRight)`
    ${arrowButtons}
`;


export const ButtonSlider = styled(LinkS)`
    color: #000;
    margin: 16px;
    background-image: linear-gradient(90deg, #ffffff 50%, transparent 50%);
    background-size: 300%;
    //transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #ffffff;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.2rem;
    transition: all 0.6s;
    max-width: fit-content;
    padding: 14px 20px;
    &:hover {
        color: #000000;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
        color: #ffffff;
    }
`;

export const SliderHeroP = styled.p`
    color: #ffffff;
    padding: 16px;
    opacity: 1;
    text-align: center;
    //transform: translateX(-50vw);
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.16rem;
    max-width: 600px;
`;

export const SliderHeroH1 = styled.h1`
    color: #ffffff;
    font-size: 1.375rem;
    text-align: center;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    letter-spacing: 0.2rem;
    //width: 100vw;
    padding: 16px;
    text-transform: uppercase;
    @media screen and (max-width: 768px){
        font-size: 1.3rem;
        padding-bottom: 10px;
    }
`;

export const SliderTitle = styled.h1`
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

export const SliderCard = styled.img`
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