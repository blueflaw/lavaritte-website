import styled from 'styled-components';
import { FaTimes} from 'react-icons/fa';

export const BannerContainer = styled.div`
    color: #ffffff;
    width: 100%;
    height: 5%;
    background: #00a2ff;
    padding-bottom: 80px;
    z-index: 10;
`;


export const PromoBannerContainer = styled.div `
    display: flex;
    //width: 100vw;
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
    width: 20px;
    height: 20px;
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
    margin: 5px;
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
    font-size: 0.9rem;
    font-weight: 300;
    cursor: pointer;
    letter-spacing: 0.16rem;
    text-transform: uppercase;
    border-bottom: ${({ $activeNav}) => ($activeNav ? '3px solid #00a2ff' : '0px solid #00a2ff')};
`;