import styled from "styled-components";

export const ShowcaseHeroContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;
    position: relative;
    background: #090a0e url("https://cdnb.artstation.com/p/assets/images/images/061/222/289/large/allard-lavaritte-equal-but-greater.jpg?1680271755") no-repeat fixed center center;;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;


export const HeroContent = styled.div`
    z-index: 3;
    display: flex;
    width: 100vw;
    height: 10vh;
    margin-top: 30%;
    margin-left: 22%;
    flex-direction: column;
    align-items: left;
    text-align: left;
    opacity: 1;

    @media screen and (max-width: 425px) {
        margin-left: 10%;
    }
`;

export const ShowcaseHeroH1 = styled.h1`
    color: #f5f5f7;
    opacity: 0;
    transform: translateX(-50vw);
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding-bottom: 10px;
    @media screen and (max-width: 768px){
        font-size: 1.3rem;
        padding-bottom: 10px;
    }
`;

export const ShowcaseHeroP = styled.p`
    color: #f5f5f7;
    opacity: 1;
    transform: translateX(-50vw);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.16rem;
    max-width: 600px;
`;