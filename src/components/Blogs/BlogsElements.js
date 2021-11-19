import styled from "styled-components";
import {Link} from 'react-router-dom'

export const BlogsContaner = styled.div`
    color: #000000;
    width: 100%;
    background: #ffffff;
    --flow-space: 2em;
    padding: 5% 0;
`;

export const BlogsWrapper = styled.div`
    display: grid;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    padding: 0%;
    justify-content: center;
`;

export const BlogsRow = styled.div`
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

export const BlogsTitle = styled.h1`
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

export const BlogCard = styled.img`
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

export const BlogPostWrap = styled(Link)`
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

export const BlogTumbnailWrapper = styled.div`
    margin: 0 0 20px;
    display: flex;
    overflow: hidden;
`;

export const BlogPost = styled.div`
    position: relative;
`;

export const BlogThumbnail = styled.img`
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

export const BlogHeader = styled.div`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    padding-top: 10px;
`;

export const TextWrapper = styled.div`
    display: inline-block;
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 100%;
    opacity: 1;
    color: #000000;
    transition: .5s ease;
    background: #ffffff;
`;

export const TextWrap = styled.div`
    padding: 10px;
`;

export const BlogMeta = styled.div`
    padding-top: 5px;
    font-size: 0.8rem;
`;

export const BlogEntry = styled.div`
    border-top: 1px solid #000000;
    padding-top: 20px;
    margin-top: 10px;
    width: 100%;
`;

export const Preview = styled.div`
    font-size: 0.9rem;
    justify-content: left;
    color: #5c5c5c;
`;

export const Readmore = styled.p`
    font-size: 0.9rem;
    justify-content: left;
    color: #5c5c5c;
    padding-top: 5px;
    &:hover{
        color: #00a2ff;
    }
`;