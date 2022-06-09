import styled from "styled-components";

export const ArtPagesContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 4% 40px;
    background-color: #171717;
`;

export const ArtPagesContent = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 20px 40px;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

export const ArtPageContentH1 = styled.h1`
    padding-top: 10%;
    color: #fff;
    font-size: 3rem;
    text-align: left;
    letter-spacing: 0.2rem;
`;


export const ArtPageContentP = styled.p`
    font-size: 1rem;
    color: #bbb;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    //border-bottom: 1px solid #000;
    padding: 8% 0;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const ArtPageImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const ArtPageImg = styled.img`
    width:1100px;
    content: fit;
    max-width: 1100px;
    margin: 0px 0px 10px 0px;
    padding-right: 0px;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const ArtsVidContainer = styled.div`
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