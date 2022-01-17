import styled from 'styled-components'
import {Link as LinkScroll} from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    height: 100%;
    width: 100%;
    background-color: #000000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
    
`;

export const CloseIcon = styled(FaTimes)`
    color: #ffffff;

`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #ffffff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60p);
    }
`;

export const SidebarLink = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 0.9rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    &::hover{
        color: #ffffff;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
    border: 50px;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 0.9rem;
    cursor: pointer;
    background: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    white-space: nowrap;
    padding: 10px 22px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-weight: 10;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #000000;
    }
`;