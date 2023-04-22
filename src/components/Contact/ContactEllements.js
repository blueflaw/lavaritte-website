import styled from 'styled-components';
import {Link as LinkS} from "react-scroll";
import { HiChevronRight, HiChevronDoubleRight } from "react-icons/hi2";

export const ContactContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 35vh;
    background-color: #090a0e;

     @media screen and (max-width: 768px) {
        padding: 20px;
        height: 100vh;
    }
`;


export const ContactTextWrapper = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
    padding: 10px 48px;
    max-width: 1100px;
`;

export const ContactH3 = styled.h3`
    color: #f5f5f7;
    text-align: center;
    letter-spacing: 0.16rem;
    font-size: 3rem;
    padding: 20px;
    font-style: italic;
    text-transform: capitalize;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const ContactP = styled.p`
    padding-top: 3%;
    color: #f5f5f7;
    text-transform: uppercase;
    font-size: .9rem;
    letter-spacing: 0.2rem;
    text-align: center;
    padding-bottom: 20px;
`;

export const ButtonContact = styled(LinkS)`
    color: #00a2ff;
    cursor: pointer;
    background-image: linear-gradient(-90deg, #00a2ff 50%, transparent 50%);
    background-size: 300%;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    display: inline;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #00a2ff;;
    padding: 1rem 2rem;
    font-size: ${({fontBig}) => (fontBig ? '1rem' : '0.9rem')};
    transition: all 0.6s;

    &:hover {
        color: #fff;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;

export const ArrowForward = styled(HiChevronRight)`
    margin-left: 8px;
    font-size: '2rem';
`;

export const ArrowRight = styled(HiChevronDoubleRight)`
    margin-left: 8px;
    font-size:'2rem';
`;
