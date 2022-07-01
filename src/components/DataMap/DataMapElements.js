import styled from "styled-components";
import { Link } from "react-router-dom";

export const DataMapContaner = styled.div`
    color: #000000;
    width: 100%;
    --flow-space: 2em;
    padding: 5% 0;
    background: #eee;
`;

export const DataMapWrapper = styled.div`
    display: grid;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    padding: 10px 0;
    justify-content: center;
    background-color: ${({dark}) => (dark ? '#171717' : '#eeeeee')};
`;

export const DataMapRow = styled.div`
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

export const DataMapTitle = styled.h1`
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

export const DataMapCard = styled.img`
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

export const DataMapPostWrap = styled(Link)`
    display: flex;
    margin: 12px;
    overflow: hidden;
    flex-direction: column;
    text-decoration: none;
    color: #000000;
    border-radius: 15px;
    //border: 2px solid transparent;
    
    &:hover {
        //border: 1px solid #00a2ff;
        box-shadow: 0 4px 8px 0 rgba(0, 162, 255, 0.2), 0 6px 20px 0 rgba(0, 162, 255, 0.19);
         & span{
            transform: scale(1.08);
            filter: grayscale(0%);
        }
        
        & h1{
            color: #00a2ff;
        }
    } 
`;

export const RowPoster = styled.div`
    display: flex; 
    overflow: hidden;
    padding: 0px;
`;

export const BlogTumbnailWrapper = styled.span`
    //margin: 0 0 20px;
    display: flex;
    width: 100%;
    overflow: hidden;
    transition: transform 450ms;
`;

export const DataMapPost = styled.div`
    position: static;
    overflow: hidden;
`;

export const DataMapThumbnail = styled.img`
    object-fit: contain;
    width: auto;
    max-height: 300px;
    width: 100%;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    /* filter: grayscale(30%); */
    /* :hover{
        transform: scale(1.08);
        filter: grayscale(0%);
    } */
`;

export const DataMapHeader = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    padding-top: 10px;
    font-size: 1rem;
    color: ${({dark}) => (dark ? '#ffffff' : '#222222')};
`;

export const TextWrapper = styled.div`
    display: inline-block;
    position: relative;
    bottom: 0;
    height: 35%;
    width: 100%;
    opacity: 1;
    transition: .5s ease;
    background: ${({dark}) => (dark ? '#222222' : '#ffffff')};
`;

export const TextWrap = styled.div`
    padding: 10px;
`;

export const DataMapInfoRow = styled.div`
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

export const Preview = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    max-height: 90px;
    height: 90px;
    color: #878787;
    max-width: 280px;
    text-align: left;
`;

export const BlogInfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    justify-content: space-between;
`;

export const Category = styled.h6`
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #878787;
`;

export const CardTime = styled.h6`
    font-style: italic;
    color: #707070;
    font-size: 11px;
    position: relative;
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

export const Prize = styled.h1`
    background: #171717;
    color: #fff;
    padding: 10px;
    font-size: 1rem;
    :hover{
        background: #00a2ff;
    }
`;
