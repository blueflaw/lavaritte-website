import styled from "styled-components";
import {Link as LinkS} from "react-scroll";

export const HeroContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    background: #090a0e url("https://cdna.artstation.com/p/assets/images/images/059/592/118/large/allard-lavaritte-underthemoonlight.jpg?1676720721") no-repeat fixed center center;;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const ButtonDown = styled(LinkS)`
    color: #f5f5f7;
    font-size: 1.5rem;
    cursor: pointer;
    text-align: center;
    padding: 10px;

    &:hover{
        color: #00a2ff;
    }
`;

export const HeroH1 = styled.h1`
    color: #f5f5f7;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.2rem;
    padding-top: 50vh;
    width: 100vw;
    text-transform: uppercase;
    @media screen and (max-width: 768px){
        font-size: 1.3rem;
        padding-bottom: 10px;
    }
`;

export const HeroContent = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: left;
    text-align: left;
    opacity: 1;
    background: rgba(0,0,0,0.3);
`;

export const NFTContainer = styled.div`
    overflow: hidden;
    background-color: #000;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 4% 40px;
`;

export const NFTVidContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #090a0e;
    padding: 0%;
    margin: 0%;
    overflow: hidden;
`;

export const NFTrapper = styled.div`
    display: grid;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0%;
    margin: 0%;
    justify-content: center;
`;

export const NFTRow = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    overflow: hidden;
    margin: -4px;

    
    @media screen and (max-width: 1024px){
        flex-direction: column;
    }

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const Column1 = styled.div`
    width: 50vw;
    position: relative;
    overflow: hidden;
    text-align: center;
    @media screen and (max-width: 1024px){
        width: 100vw;
    }

    @media screen and (max-width: 480px){
        width: 100vw;
        height: auto;
    }
`;

export const Column2 = styled.div`
    width: 50vw;
    position: relative;
    overflow: hidden;
    text-align: center;
    @media screen and (max-width: 1024px){
        width: 100vw;
    }

    @media screen and (max-width: 480px){
        width: 100vw;
    }
`;

export const NFTWrapper = styled.div`
    text-align: left;
    overflow: hidden;
    width: 100%;
    max-width: 1100px;
    padding: 0 40px;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

export const Heading = styled.h2`
    color: #f5f5f7;
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    display: inline-block;
    @media screen and (max-width: 768px){
        font-size: 1rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0.16rem;
    max-width: 1100px;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    padding: 10px 0;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0px 0px 10px 0px;
    padding-right: 0px;
`;

export const NFTCollectionWrapper = styled.div`
    background-color: #eee;
    display: grid;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    padding: 10vh 0;
    justify-content: center;
`;

export const RowPoster = styled.div`
    display: flex; 
    overflow: hidden;
    padding: 0px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10% 0;
`;
export const ButtonViewCollection = styled.a`
    color: #f5f5f7;
    background-image: linear-gradient(-90deg, #f5f5f7 50%, #000 50%);
    background-size: 300%;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #f5f5f7;
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: ${({fontBig}) => (fontBig ? '1rem' : '0.9rem')};
    transition: all 0.6s;

    &:hover {
        color: #090a0e;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;

export const NFTCollectionRow = styled.div`
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


export const NFTCollectionPostWrap = styled.a`
    display: flex;
    margin: 12px;
    overflow: hidden;
    flex-direction: column;
    text-decoration: none;
    color: #090a0e;
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


export const NFTCollectionPost = styled.div`
    position: static;
    overflow: hidden;
`;

export const NFTTumbnailWrapper = styled.span`
    display: flex;
    overflow: hidden;
    transition: transform 450ms;
`;

export const NFTCollectionThumbnail = styled.img`
    object-fit: contain;
    width: 300px;
    height: 300px;
    max-height: 300px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    filter: grayscale(30%);
`;

export const NFTCollectionTextWrapper = styled.div`
    display: inline-block;
    position: relative;
    bottom: 0;
    height: 35%;
    width: 100%;
    opacity: 1;
    transition: .5s ease;
    background: #fff;
`;

export const NFTCollectionTextWrap = styled.div`
    padding: 10px;
`;

export const NFTCollectionInfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
`;

export const NFTInfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    justify-content: space-between;
`;


export const Category = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #878787;
`;

export const PriceTag = styled.h4`
    font-weight: bold;
    color: #00a2ff;
    font-size: 1rem;
    position: relative;
`;

export const NFTCollectionHeader = styled.h3`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    padding-top: 10px;
    font-size: 1rem;
    color: #000;
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

