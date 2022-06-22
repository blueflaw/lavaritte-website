import styled from "styled-components";
import {Link} from 'react-router-dom';

export const ErrorContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    background: #000000 url('into-the-404.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

export const ErrorContent = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    vertical-align: middle;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: rgba(0,0,0,0.4);
`;

export const ErrorContentWrapper = styled.div`
    display: flex;
    padding: 14% 0;
    width: 100%;
    vertical-align: middle;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;


export const ErrorH1 = styled.h1`
    color: #ffffff;
    font-size: 4.375rem;
    text-align: center;
    letter-spacing: 0.2rem;
    @media screen and (max-width: 768px){
        font-size: 1.3rem;
        padding-bottom: 10px;
    }
`;

export const ErrorP = styled.p`
    color: #ffffff;
    font-size: 1.5rem;
    padding-top: 20px;
    text-align: center;
    letter-spacing: 0.2rem;
    @media screen and (max-width: 768px){
        font-size: 1.3rem;
        padding-bottom: 10px;
    }
`;


export const ErrorButtonHome = styled(Link)`
    color: #000;
    margin: 16px;
    background-image: linear-gradient(90deg, #ffffff 50%, transparent 50%);
    background-size: 300%;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #ffffff;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.2rem;
    transition: all 0.6s;
    max-width: fit-content;
    margin: 20px 0;
    padding: 14px 20px;
    &:hover {
        color: #000000;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
        color: #ffffff;
    }
`;

export const ErrorCode = styled.p`
    color: #ffffff;
    border-left: 2px solid red;
    padding-left: 20px;
    font-size: 1.5rem;
    padding-top: 20px;
    text-align: center;
    letter-spacing: 0.2rem;
    @media screen and (max-width: 768px){
        font-size: 1.3rem;
        padding-bottom: 10px;
    }
`;