import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #ffffff;
    background: ${({ lightBg }) => (lightBg ? '#ffffff' : 'transparent')};
    @media screen and (max-width: 768px){
        padding: 100px 0px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    //height: 860px;
    min-height: 560px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0% 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
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

export const TextWrapper = styled.div`
    max-width: 100%;
    padding-top: 0px;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: ${({ lightText }) => (lightText ? '#ffffff' : '#000000')};
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.16rem;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    //color: #00a2ff;
    font-size: 3rem;
    text-align: left;
    letter-spacing: 0.2rem;
    margin-bottom: 24px;
    color: ${({ lightText }) => (lightText ? '#ffffff' : '#00a2ff')};
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

export const Subtitle = styled.p`
    color: ${({ lightText }) => (lightText ? '#ffffff' : '#121212')};
    font-size: 1rem;
    //color: #121212;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
`;

export const BtnWrap = styled.div`
    display: ${({button}) => (button ? 'flex' : 'none')};
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