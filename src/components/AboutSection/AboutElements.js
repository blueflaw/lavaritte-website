import styled from "styled-components";
import {Link} from 'react-router-dom';

export const AboutContainer  = styled.div``;

export const WebsiteContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 70vh;
    position: relative;
    z-index: 1;
    background: #000000 url("https://cdnb.artstation.com/p/assets/images/images/033/208/387/large/allard-lavaritte-first-contact-v2a.jpg?1608750241");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    &::before {
        /* content: " 🦄"; */
        content: "";
        background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        opacity: 0.4;
    }
`;

export const WebsiteContainerIlike = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 4% 40px;
`;

export const IContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 0;
`;

export const IbuildWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-self: center;
    flex-direction: row;
    max-width: 1100px;
    padding: 0;

    @media screen and (max-width: 768px){
        flex-direction: column ;
    }
`;

export const IbuildContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 3px solid #00a2ff;
    width: 50vw;
    padding: 10% 40px;
    justify-content: space-between;
    text-align: left;

    @media screen and (max-width: 768px){
        border-right: none;
        border-bottom: 3px solid #00a2ff;
        padding: 1% 10px;
        width: 90vw;
    }
`;
export const IbuildContentRight = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-left: 3px solid #00a2ff;
    width: 50vw;
    padding: 10% 40px;
    text-align: left;

    @media screen and (max-width: 768px){
        border-left: none;
        width: 90vw;
        border-top: 3px solid #00a2ff;
        padding: 10% 10px;
    }
`;

export const WebsiteContainerBio = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 24px 0;
`;
export const WebsiteContent = styled.div`
    z-index: 3;
    display: flex;
    width: 100vw;
    margin-top: 17%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 1;
`;

export const WebsiteContentBio = styled.div`
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 6% 40px 0 40px;
    justify-content: center;
    @media only screen and (max-width: 768px) {
    
    }
`;

export const WebsiteContentIlike = styled.div`
    width: 100%;
    max-width: 1100px;
    padding: 0 40px;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        padding: 0 10px;
    }
`;

export const ContentH1 = styled.h1`
    color: #ffffff;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    padding-bottom: 20px;
`;

export const DarkContentH1 = styled.h1`
    color: #000;
    font-size: 3rem;
    text-align: left;
    letter-spacing: 0.2rem;
`;

export const BlueContentH1 = styled.h1`
    color: #00a2ff;
    font-size: 3rem;
    text-align: left;
    letter-spacing: 0.2rem;
`;

export const ContentH3 = styled.h4`
    color: #00a2ff;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    padding: 0 34px;
    text-align: left;
    text-transform: uppercase;
`;

export const ContentH4 = styled.h4`
    color: #00a2ff;
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
    text-align: left;
    text-transform: uppercase;
`;

export const ContentP = styled.p`
    padding-top: 10px;
    color: #ffffff;
    font-size: 0.9rem;
    letter-spacing: 0.16rem;
    max-width: 600px;
    text-transform: uppercase;
`;
export const ContentBio = styled.p`
    font-size: 1rem;
    color: #121212;
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
export const ContentLocation = styled.p`
    padding-top: 5px;
    color: #ffffff;
    font-size: 0.9rem;
    max-width: 600px;
    text-transform: capitalize;
`;

export const DP = styled.img`
    width: 120px;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 2px 0 0 rgb(0 0 0 /8%);
    vertical-align: middle;
    border-top: 0;
    aspect-ratio: auto 120/120;
    padding-bottom: 10px;
`;

export const ContentLink = styled.a`
    text-decoration: none;
    padding-top: 5px;
    color: #00a2ff;
    font-size: 1rem;
    max-width: 600px;
`;

export const AboutQuoteContainer = styled.div`
    /* display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 5% 0; */
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 5% 40px;
    justify-content: center;
`;

export const AboutQuotes = styled.h1`
    display: block;
    color: #000;
    text-align: center;
    letter-spacing: 0.2rem;
    font-size: 3rem;
`;

export const AboutQuotesWriter = styled.h6`
    display: block;
    color: #000;
    text-align: center;
    font-style: italic;
    letter-spacing: 0.16rem;
    font-size: 1.5rem;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 1% 0px;
`;

export const DonateButton = styled.a`
    background: ${({dark}) => (dark ? '#ffc439' : 'transparent')};
    white-space: nowrap;
    color: ${({dark}) => (dark ? '#ffffff' : '#ffc439')};
    border: 1px solid ${({dark}) => (dark ? '#ffffff' : '#ffc439')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '10px 22px')};
    border-radius: 30px;
    cursor: pointer;
    font-weight: 900;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${({fontBig}) => (fontBig ? '1rem' : '0.9rem')};
    outline: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({dark}) => (dark ? 'transparent' : '#ffffff')};
        color: ${({dark}) => (dark ? '#ffc439' : '#000000')};
        font-weight: 900;
        border: 1px solid ${({dark}) => (dark ? '#ffc439' : '#ffc439')};
    }
`;

export const GetInTouchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 22vw;
    width: 100%;
    max-width: 1100px;
`;

export const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 20px;
`;

export const ImagelWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: right;
`;

export const GetInTouchLink = styled.a`
    padding: 10px 0;
    color: #000;
    font-size: 0.9rem;
    text-align: left;
    letter-spacing: 0.16rem;
    text-decoration: none;
    max-width: 400px;
    text-transform: uppercase;
    text-align: left;

    &:hover {
        color: #00a2ff;
    }
`;

export const CreatedBy = styled.p`
    border-top: 1px solid #000;
    margin-top: 30px;
    padding-top: 10px;
    color: #000;
    font-size: 0.9rem;
    text-align: left;
    letter-spacing: 0.16rem;
    text-decoration: none;
    max-width: 400px;
    text-transform: uppercase;
`;

export const SocialLogo = styled(Link)`
    color: #000;
    cursor: pointer;
    letter-spacing: 0.16rem;
    text-decoration: none;

    :hover{
        color: #00a2ff;
    }
`;

export const Gotinspired = styled.p`
    border-top: 1px solid #000;
    padding: 20px;
    letter-spacing: 0.16rem;
    text-decoration: none;
    //text-transform: uppercase;
    text-align: center;
    align-self: center;
    font-size: 1rem;
    color: #121212;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
`;

export const ButtonDownload = styled.a`
    color: #00a2ff;;
    background-image: linear-gradient(-90deg, #00a2ff 50%, transparent 50%);
    background-size: 300%;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #00a2ff;
    padding: 1rem 2rem;
    font-size: ${({fontBig}) => (fontBig ? '1rem' : '0.9rem')};
    transition: all 0.6s;

    &:hover {
        color: #fff;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;

export const ButtonAbout = styled(Link)`
    color: #00a2ff;;
    background-image: linear-gradient(-90deg, #00a2ff 50%, transparent 50%);
    background-size: 300%;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    display: flex;
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

export const GetInTouchRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    padding: 0 5vw;
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
    max-width: 100%;
`;

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
    max-width: 100%;
`;

export const ImgWrap = styled.div`
    width: 100%;
    text-align: center;
`;

export const Img = styled.img`
    margin: 0;
    width: 50%;
`;