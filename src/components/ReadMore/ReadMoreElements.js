import styled from "styled-components";
import {Link} from 'react-router-dom';

export const ReadMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 4% 40px;
    background-color: #171717;
`;

export const ReadMoreContent = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 20px 40px;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding: 0 10px;
    }
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
    background: #222222;
`;

export const ReadMoreInfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
`;

export const AuthorRow = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 10px;
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

export const ReadMoreHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    justify-content: space-between;
`;

export const ReadMoreP = styled.p`
    font-size: 0.9rem;
    font-weight: 600;
    max-height: 90px;
    height: 90px;
    color: #878787;
    max-width: 280px;
    text-align: left;
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

export const ReadMoreHeaderH1 = styled.h1`
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: left;
    font-weight: 500;
    padding-top: 10px;
    font-size: 1rem;
    color: ${({dark}) => (dark ? '#ffffff' : '#222222')};
`;


export const ReadMoreContentH1 = styled.h1`
    padding-top: 10%;
    color: #fff;
    font-size: 3rem;
    text-align: left;
    letter-spacing: 0.2rem;
`;

export const ReadMoreCardsContainer = styled.div`
    display: grid;
    padding: 5% 0;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const ReadMoreCardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-self: center;
    flex-direction: row;
    //max-width: 1100px;
    overflow: hidden;
    padding: 0;

    @media screen and (max-width: 768px){
        flex-direction: column ;
    }
`;

export const ReadMorePost = styled.div`
    position: static;
    overflow: hidden;
`;

export const ReadMoreumbnailWrapper = styled.span`
    //margin: 0 0 20px;
    display: flex;
    width: 100%;
    overflow: hidden;
    transition: transform 450ms;
`;

export const ReadMoreThumbnail = styled.img`
    object-fit: contain;
    width: auto;
    max-height: 300px;
    width: 100%;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
`;

export const ReadMorePosterCard = styled(Link)`
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


export const ReadMoreContentH4 = styled.h1`
    padding-top: 2%;
    color: #fff;
    font-size: 1.6rem;
    text-align: left;
    letter-spacing: 0.2rem;
`;

export const ReadMoreContentH6 = styled.h1`
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

export const ReadMoreocialAuthor = styled(Link)`
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

export const ReadMoreContentAuthor = styled.p`
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


export const ReadMoreContentP = styled.p`
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

export const ReadMoreImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const ReadMoreImg = styled.img`
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