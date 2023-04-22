import styled from "styled-components";

export const HeroContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    background: #090a0e url("https://cdnb.artstation.com/p/assets/images/images/056/930/243/large/allard-lavaritte-darkness-demon-final.jpg?1670427024") no-repeat fixed center top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
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
    z-index: 3;
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: left;
    text-align: left;
    opacity: 1;
    background: rgba(0,0,0,0.3);
`;

export const TutorialContainer = styled.div`
    overflow: hidden;
    background-color: #111;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 4% 40px;
`;

export const TutorialContainer2 = styled.div`
    overflow: hidden;
    background-color: #090a0e;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    align-self: center;
    flex-direction: column;
    padding: 4% 40px;
`;

export const TutorialVidContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #090a0e;
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

export const TutorialWrapper = styled.div`
   text-align: left;
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
    @media screen and (max-width: 480px){
        font-size: 0.7rem;
    }
`;

export const Subtitle = styled.p`
    color: #f5f5f7;
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

export const DonateButton2 = styled.a`
    background: ${({dark}) => (dark ? '#ffc439' : 'transparent')};
    white-space: nowrap;
    color: ${({dark}) => (dark ? '#f5f5f7' : '#ffc439')};
    border: 1px solid ${({dark}) => (dark ? '#f5f5f7' : '#ffc439')};
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
        background: ${({dark}) => (dark ? 'transparent' : '#ffc439')};
        color: ${({dark}) => (dark ? '#ffc439' : '#fff')};
        font-weight: 900;
        border: 1px solid ${({dark}) => (dark ? '#ffc439' : '#ffc439')};
    }
`;

export const DonateButton = styled.a`
    color: #f5f5f7;
    text-decoration: none;
    font-weight: 900;
    vertical-align: baseline;
    font-size: 0.9rem;
    letter-spacing: 0.16rem;
    text-align: justify;
    &:hover{
        color: #ffc439;
    }
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
