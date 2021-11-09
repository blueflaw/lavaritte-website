import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'

export const HeroContainer = styled.div`
    /* not sure yet about this color might change later */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #000000 url("https://cdna.artstation.com/p/assets/images/images/019/381/052/large/allard-lavaritte-the-archer-no-eyeglass.jpg") no-repeat fixed center center;;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    ::before{
        content: '';
        top: 0%;
        left: 0%;
        right: 0%;
        bottom: 0%;
        background: linear-gradient(180deg, rgba(0,0,0,0.3) 2%, rgba(0,0,0,0.3) 100%),
                    linear-gradient(180deg, rgba(0,0,0,0.3) 2%, transparent 20%);
        z-index: 2;
    }
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
`;

export const HeroContent = styled.div`
    z-index: 3;
    display: flex;
    width: 100vw;
    height: 10vh;
    margin-top: 30%;
    margin-left: 22%;
    flex-direction: column;
    align-items: left;
    text-align: left;
    opacity: 1;
`;

export const HeroH1 = styled.h1`
    color: #ffffff;
    font-size: 1.5rem;
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
    letter-spacing: 0.16rem;
    max-width: 600px;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 8px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 8px;
`;