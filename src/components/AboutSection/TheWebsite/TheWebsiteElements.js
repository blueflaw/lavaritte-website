import styled from "styled-components";

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
export const WebsiteContainerBio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 50vh;
    position: relative;
    z-index: 1;
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
    width: 100vw;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: 1;
`;

export const ContentH1 = styled.h1`
    color: #ffffff;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    padding-bottom: 20px;
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
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 100;
    letter-spacing: 0.18rem;
    max-width: 50vw;
    text-align: left;
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