import styled from "styled-components";
import {Link} from 'react-router-dom';

export const BlogPagesContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 4% 40px;
    background-color: #171717;
`;

export const BlogPagesContent = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 20px 40px;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

export const BlogImageThumbail = styled.img`
    max-width: 100%;
    height: auto;
    float: left;
    margin: 15px;
`;

export const BlogImageLogo = styled.img`
    max-width: 100%;
    height: auto;
    margin: 15px;
`;


export const ButtonOpenAccount = styled.a`
    color: #00a2ff;;
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

    /* @media screen and (max-width: 768px){
        max-width: 100%;
    } */
`;


export const ShareWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 10px 0;
    justify-content: left;
    text-align: left;
    @media only screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

export const BlogPageContentH1 = styled.h1`
    padding-top: 10%;
    color: #fff;
    font-size: 3rem;
    text-align: left;
    letter-spacing: 0.2rem;
`;

export const BlogPageContentH4 = styled.h1`
    padding-top: 2%;
    color: #fff;
    font-size: 1.6rem;
    text-align: left;
    letter-spacing: 0.2rem;
`;

export const BlogPageContentH6 = styled.h1`
    padding-top: 2%;
    color: #fff;
    font-size: 1.2rem;
    text-align: left;
    letter-spacing: 0.2rem;
`;

export const LogoWrapper = styled.div`
    padding: 2%;
    text-align: center;
`;

export const BlogPageSocialAuthor = styled(Link)`
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    text-decoration: none;

    :hover{
        color: #00a2ff;
    }
`;

export const BlogPageContentAuthor = styled.p`
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;


export const BlogPageContentP = styled.p`
    font-size: 1rem;
    color: #bbb;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    //border-bottom: 1px solid #000;
    padding: 5% 0;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const BlogPageImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const BlogPageImg = styled.img`
    width:1100px;
    content: fit;
    max-width: 1100px;
    margin: 0px 0px 10px 0px;
    padding-right: 0px;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const BlogsVidContainer = styled.div`
    width:1100px;
    content: fit;
    max-width: 1100px;
    margin: 0px 0px 10px 0px;
    overflow: hidden;
    padding-right: 0px;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;