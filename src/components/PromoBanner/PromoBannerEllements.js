import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FaTimes} from 'react-icons/fa';

export const BannerContainer = styled.div`
    /* color: #ffffff;
    width: 100%;
    height: 5%;
    background: transparent;
    padding-bottom: 80px;
    z-index: 12; */
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    color: #FFF;
    display: block;
    z-index: 10;
`;


export const PromoBannerContainer = styled.div `
    display: flex;
    //width: 100vw;
    background: #00a2ff;
    padding: 5px;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
`;

export const CloseBannerButton = styled(FaTimes)`
    color: #ffffff;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    width: 15px;
    height: 15px;
`;

export const BannerTextWrapper = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    flex-direction: row;
    cursor: pointer;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const BannerItem = styled.li `
    display: flex; 
    overflow: hidden;
`;


export const BannerText = styled.p`
    color: '#ffffff' ;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: .875rem;;
    font-weight: 300;
    cursor: pointer;
    letter-spacing: 0.16rem;
    text-transform: uppercase;
    border-bottom: ${({ $activeNav}) => ($activeNav ? '3px solid #00a2ff' : '0px solid #00a2ff')};
`;

export const PromoButton = styled(Link)`
    color: #fff;
    text-transform: uppercase;
    position: relative;
    text-decoration: underline;
    display: inline;
    align-items: center;
    justify-content: center;
    font-size: .875rem;
    font-weight: bold;
    transition: all 0.6s;
    :hover{
        text-decoration: none;
    }
`;