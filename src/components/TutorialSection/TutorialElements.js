import styled from "styled-components";

export const TutorialContainer = styled.div`
    background: #000000 url("https://cdnb.artstation.com/p/assets/images/images/019/380/861/medium/allard-lavaritte-untitled-1.jpg?1563235858") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    height: 40vh;
    @media screen and (max-width: 768px){
        height: 40vh;
    }
    &::before {
        /* content: " 🦄"; */
        content: "";
        background-color: #000000;
        position: absolute;
        display: block;
        width: 100%;
        height: 40vh;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        opacity: 0.4;
    }
`;

export const TutorialContainer2 = styled.div`
    background: #000000 url("https://cdnb.artstation.com/p/assets/images/images/042/698/143/large/allard-lavaritte-dualmonitorwallpaper.jpg?1635215819") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    height: 40vh;
    @media screen and (max-width: 768px){
        height: 40vh;
    }
    &::before {
        /* content: " 🦄"; */
        content: "";
        background-color: #000000;
        position: absolute;
        display: block;
        width: 100%;
        height: 40vh;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        opacity: 0.4;
    }
`;

export const TutorialVidContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #000000;
    padding: 0%;
    margin: 0%;
    overflow: hidden;
`;

export const Tutorialrapper = styled.div`
    display: grid;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0%;
    margin: 0%;
    justify-content: center;
`;

export const TutorialRow = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    overflow: hidden;
    margin: -4px;

    
    @media screen and (max-width: 768px){
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

    @media screen and (max-width: 768px){
        width: 100vw;
    }

    @media screen and (max-width: 480px){
        width: 100vw;
    }
`;

export const Column2 = styled.div`
    width: 50vw;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 768px){
        width: 100vw;
    }

    @media screen and (max-width: 480px){
        width: 100vw;
    }
`;

export const TutorialWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 60px 0;
    justify-content: center;
    position: relative;
`;

export const TextWrapper = styled.div`
    max-width: 680px;
    margin-right: auto;
    margin-left: auto;
    padding: 10% 0;
    vertical-align: middle;
    margin: 0;
    color: #ffffff;

    @media screen and (max-width: 768px){
        max-width: 768px;
        padding: 20px;
    }

    @media screen and (max-width: 480px){
        max-width: 480px;
        padding: 10px;
    }
`;

export const Heading = styled.h1`
    color: '#ffffff';
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    display: inline-block;
    @media screen and (max-width: 480px){
        font-size: 0.7rem;
    }
`;

export const Subtitle = styled.p`
    color: '#ffffff';
    vertical-align: baseline;
    max-width: 1100px;
    padding-top: 10px;
    font-size: 0.9rem;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    margin-bottom: 16px;
    margin-bottom: 35px;
    text-align: justify;
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
