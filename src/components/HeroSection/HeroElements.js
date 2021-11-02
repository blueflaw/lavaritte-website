import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    /* not sure yet about this color might change later */
    background: #0c0c0c; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 920px;
    position: relative;
    z-index: 1;

    /* todo: Add before styles */
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000000;
    opacity: 0.8;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #ffffff;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
        font-size: 0.8rem;
    }
`;

export const HeroP = styled.p`
    color: #ffffff;
    font-size: 0.9rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.16rem;
    text-align: center;
    max-width: 600px;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 8px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 8px;
`;