import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StoreMenuContainer = styled.nav `
    background: '#fff';
    display: flex;
    min-height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: relative;
    transition: all 0.2s ease-in-out;
    
`;

export const MenuContainer = styled.div `
    display: flex;
    text-align: center;
    justify-content: space-around;
    height: auto;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        padding: 20px;
    }
`;


export const MenuListContainer = styled.div `
     display: grid;
    /* grid-auto-columns: minmax(auto, 1fr);  */
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    list-style: none;
    text-align: center;
    cursor: pointer;
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(4, 1fr);
        margin: 20px;
    }
    @media screen and (max-width: 425px){
        grid-template-columns: repeat(3, 1fr);
        margin: 20px;
    }
    @media screen and (max-width: 375px){
        grid-template-columns: repeat(2, 1fr);
        margin: 20px;
    }
`;

export const MenuItem = styled.div `
    height: auto;
    width: 100%;
    padding: 10px 0;
`;


export const MenuLinks = styled(Link)`
    color: ${({ $activeStoreMenu}) => ($activeStoreMenu ? '#00a2ff' : '#7e8993')};
    width: max-content;
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 0.9rem;
    font-weight: 300;
    cursor: pointer;
    letter-spacing: 0.16rem;
    text-transform: uppercase;
    /* border-bottom: ${({ $activeStoreMenu}) => ($activeStoreMenu ? '3px solid #00a2ff' : '0px solid #00a2ff')}; */
    &:hover{
        transition: 0.8s all ease;
        color: #00a2ff;
    }

    @media screen and (max-width: 768px){
        width: min-content;
    }
`;
