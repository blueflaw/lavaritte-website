import styled, {css} from "styled-components";
import {Link} from 'react-scroll'
import { FaAngleLeft,  FaAngleRight} from 'react-icons/fa';

export const StoreHeroSection = styled.div`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

export const StoreHeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const StoreHeroSlide = styled.div`
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const StoreHeroSlider = styled.div`
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

export const StoreHeroImage = styled.img`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    transition: all 0.6s;
`;

export const StoreHeroContent = styled.div`
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


export const ButtonStore = styled(Link)`
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
    padding: 14px;
    &:hover {
        color: #000000;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
        color: #ffffff;
    }
`;

export const StoreHeroP = styled.p`
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

export const StoreHeroH1 = styled.h1`
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

export const StoreContaner = styled.div`
    color: #000000;
    width: 100%;
    background: #ffffff;
    --flow-space: 2em;
    padding: 5% 0;
    background: #171717;
`;

export const StoreWrapper = styled.div`
    display: grid;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    padding: 0%;
    justify-content: center;
`;

export const StoreRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

export const StorePostWrap = styled.a`
    display: flex;
    flex-direction: column;
    margin: 12px;
    text-decoration: none;
    color: #000000;
    
    &:hover {
        //box-shadow: 0 4px 8px 0 rgba(0, 162, 255, 0.2), 0 6px 20px 0 rgba(0, 162, 255, 0.19);
         & span{
            transform: scale(1.08);
            filter: grayscale(0%);
        }
        
        & h1{
            background: #00a2ff;
        }
    } 
`;

export const RowPoster = styled.div`
    display: flex; 
    overflow: hidden;
    padding: 0px;
`;

export const StoreTumbnailWrapper = styled.span`
    //margin: 0 0 20px;
    display: flex;
    overflow: hidden;
    transition: transform 450ms;
`;

export const StorePost = styled.div`
    position: static;
    overflow: hidden;
`;

export const StoreThumbnail = styled.img`
    object-fit: contain;
    width: auto;
    max-height: 300px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    filter: grayscale(30%);
    /* :hover{
        transform: scale(1.08);
        filter: grayscale(0%);
    } */
`;

export const StoreHeader = styled.div`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    padding-top: 10px;
    color: #ffffff;
`;

export const TextWrapper = styled.div`
    display: inline-block;
    position: relative;
    bottom: 0;
    height: 35%;
    width: 100%;
    opacity: 1;
    transition: .5s ease;
    background: #222222;
`;

export const TextWrap = styled.div`
    padding: 10px;
`;

export const StoreInfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
`;

export const AuthorWrap = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    justify-content: space-between;
`;

export const AuthorDisplayPicture = styled.img`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: block;
`;

export const AuthorName = styled.p`
    color: #bbb;
    white-space: nowrap;
    font-size: 0.9rem;
    padding: 5px;
`;

export const Prize = styled.h1`
    background: #171717;
    color: #fff;
    padding: 10px;
    font-size: 1rem;
    :hover{
        background: #00a2ff;
    }
`;
