import styled from "styled-components";
import {Link} from 'react-router-dom'

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
    justify-content: flex-start;
    align-items: left;
    padding: 0 30px;
    height: 60vh;
    position: relative;
    background: #222222;
`;

export const Listwrapper = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-align: left;
`;

export const List = styled.li`
    counter-increment: step-counter;
    margin-bottom: 10px;
    &::before{
        content: counter(step-counter);
        color: #ffffff;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        border-radius: 50%;
        background: #00a2ff;
        margin: 10px;
        width: 25px;
        height: 25px;
        justify-content: center;
    }
`;

export const ListP = styled.p`
    padding-top: 10px;
    color: #ffffff;
    font-size: 0.9rem;
    letter-spacing: 0.16rem;
    max-width: 400px;
    text-transform: uppercase;
`;

export const WebsiteContainerBio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 50vh;
    position: relative;
    background: #222222;
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
    display: flex;
    margin: 3% 0px;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 1;

    @media only screen and (max-width: 768px) {
    
    }
`;

export const WebsiteContentIlike = styled.div`
    display: flex;
    margin: 3% 0px;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 1;

    @media only screen and (max-width: 768px) {
    
    }
`;

export const ContentH1 = styled.h1`
    color: #ffffff;
    font-size: 3rem;
    letter-spacing: 0.2rem;
    padding-bottom: 20px;
`;

export const ContentH4 = styled.h4`
    color: #ffffff;
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
    padding: 20px 0px;
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
    padding-top: 10px;
    font-size: 1rem;
    color: #ffffff;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    max-width: 440px;
    line-height: 24px;
    max-width: 55%;
    text-align: left;
    border-bottom: 1px solid #ffffff;
    padding: 15px 0;
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
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 5% 0;
`;

export const AboutQuotes = styled.h1`
    display: block;
    color: #000;
    text-align: center;
    letter-spacing: 0.16rem;
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
    background: ${({dark}) => (dark ? 'transparent' : 'transparent')};
    white-space: nowrap;
    color: ${({dark}) => (dark ? '#ffc439' : '#ffc439')};
    border: 1px solid ${({dark}) => (dark ? '#ffc439' : '#ffffff')};
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
        background: ${({dark}) => (dark ? '#ffc439' : '#ffffff')};
        color: ${({dark}) => (dark ? '#ffffff' : '#000000')};
        font-weight: 900;
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
    max-width: 70vw;
    padding: 10px 0;
    color: #000;
    font-size: 0.9rem;
    text-align: left;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    align-self: center;
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
`;

export const Img = styled.img`
    margin: 0;
    width: 50%;
`;