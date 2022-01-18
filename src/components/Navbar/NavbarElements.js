import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { Link as LinkPage} from 'react-router-dom';

export const Nav = styled.nav `
    background: ${({ scrollNav}) => (scrollNav ? '#000000' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link)`
    color: #ffffff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 300;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;
    &:hover{
        color: #00a2ff;
    }
`;

export const MobileIcon = styled.div `
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #ffffff;
    }
`;

export const NavMenu = styled.ul `
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

export const NavItem = styled.li `
    height: 80px;
`;

export const NavScroll = styled(Link)`
    color: #ffffff;
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
    &.active{
        border-bottom: 3px solid #00a2ff;
        color: #00a2ff;
    }
    
    &:hover{
        transition: 0.8s all ease;
        color: #00a2ff;
    }
`;

export const NavLinks = styled(Link)`
    color: ${({ activeNav}) => (activeNav ? '#00a2ff' : '#ffffff')};
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
    .current {
        border-bottom: 3px solid #00a2ff;
        color: #00a2ff;
    }
    &.active{
        border-bottom: 3px solid #00a2ff;
        color: #00a2ff;
    }
    &:hover{
        transition: 0.8s all ease;
        color: #00a2ff;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    background: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    white-space: nowrap;
    padding: 10px 22px;
    cursor: pointer;
    font-weight: 10;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #000000;
    }
`;