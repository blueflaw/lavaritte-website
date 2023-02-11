import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StoreMenuContainer = styled.nav `
    background: '#fff';
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: relative;
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const MenuContainer = styled.div `
    display: flex;
    text-align: center;
    justify-content: space-around;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;


export const MenuListContainer = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    cursor: pointer;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const MenuItem = styled.li `
    height: 80px;
`;


export const MenuLinks = styled(Link)`
    color: ${({ $activeStoreMenu}) => ($activeStoreMenu ? '#00a2ff' : '#7e8993')};
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
    /* border-bottom: ${({ $activeStoreMenu}) => ($activeStoreMenu ? '3px solid #00a2ff' : '0px solid #00a2ff')}; */
    &:hover{
        transition: 0.8s all ease;
        color: #00a2ff;
    }
`;
