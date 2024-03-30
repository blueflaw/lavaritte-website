import styled from "styled-components";

export const WebDevContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #000000 url("https://cdna.artstation.com/p/assets/images/images/019/381/052/large/allard-lavaritte-the-archer-no-eyeglass.jpg") no-repeat fixed center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    ::before{
        content: '';
        top: 0%;
        left: 0%;
        right: 0%;
        bottom: 0%;
        background: linear-gradient(180deg, rgba(0,0,0,0.3) 2%, rgba(0,0,0,0.3) 100%),
                    linear-gradient(180deg, rgba(0,0,0,0.3) 2%, transparent 20%);
        z-index: 2;
    }
`;

export const WebDevHeroContent = styled.div`
    z-index: 3;
    display: flex;
    width: 100vw;
    height: 10vh;
    margin: 30% 22vw;
    flex-direction: column;
    align-items: left;
    text-align: left;
    opacity: 1;
    justify-content: space-evenly;
`;

export const WebDevHeroH1 = styled.h1`
    color: #f5f5f7;
    opacity: 0;
    transform: translateX(-50vw);
    font-size: 3.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    @media screen and (max-width: 768px){
        font-size: 1.3rem;
        padding-bottom: 10px;
    }
`;

export const WebDevHeroP = styled.p`
    color: #f5f5f7;
    opacity: 1;
    transform: translateX(-50vw);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.16rem;
    max-width: 600px;
`;

export const WebDevHeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    opacity: 0;
    transform: translateX(-100px);
`;