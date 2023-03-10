import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterConainer = styled.footer`
    background: #000000;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1100px;
    margin: 0 auto;
    height: 90vh;
    @media screen and (max-width: 820px){
        height: 100%;
    }
`;

export const FooterLinksContainer = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: center;
    border-top: 1px solid #ffffff;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterQuoteContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const FooterQuotes = styled.h2`
    display: block;
    color: #ffffff;
    text-align: center;
    padding: 10% 0;
    letter-spacing: 0.16rem;
    font-size: 3rem;
    @media screen and (max-width: 375px){
        font-size: 1.6rem;
        margin-top: 20%;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* margin: 16px; */
    text-align: left;
    width: 80%;
    box-sizing: border-box;
    color: #ffffff;
    @media screen and (max-width: 1024px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 16px;
    color:  #909090;
`;

export const FooterServices = styled.p`
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;

    &:hover{
        color: #00a2ff;
        transition: 0.3s ease-out;
    }
`;

export const FooterLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;

    &:hover{
        color: #00a2ff;
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    padding-top: 10%;
    border-top: 1px solid #ffffff;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
    @media screen and (max-width: 375px){
        flex-direction: column;
        margin: 10%;
    }
`;

export const SocialLogo = styled(Link)`
    color: #ffffff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    font-weight: 10;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;

    :hover{
        color: #00a2ff;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    @media screen and (max-width: 768px){
        padding-top: 20px;
    }
`;

export const WebsiteRights = styled.small`
    color: #ffffff;
    text-transform: uppercase;
    @media screen and (max-width: 768px){
        padding-top: 20px;
    }
`;

export const SocialIconLink = styled.a`
    color: #ffffff;
    font-size: 1rem;

    :hover{
        color: #00a2ff;
    }

    @media screen and (max-width: 768px){
        padding-bottom: 20px;
    }
`;