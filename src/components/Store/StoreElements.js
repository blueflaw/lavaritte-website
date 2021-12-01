import styled from "styled-components";
import {Link} from 'react-router-dom'

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
    padding: 12px;
    text-decoration: none;
    color: #000000;
`;

export const RowPoster = styled.div`
    display: flex; 
    overflow: hidden;
    padding: 0px;
`;

export const StoreTumbnailWrapper = styled.div`
    //margin: 0 0 20px;
    display: flex;
    overflow: hidden;
`;

export const StorePost = styled.div`
    position: static;
`;

export const StoreThumbnail = styled.img`
    object-fit: contain;
    width: auto;
    max-height: 300px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    filter: grayscale(30%);
    :hover{
        transform: scale(1.08);
        filter: grayscale(0%);
    }
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

export const Prize = styled.div`
    background: #171717;
    color: #fff;
    padding: 10px;
    font-size: 1rem;
`;