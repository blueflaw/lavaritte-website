import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #ffffff;
    background: ${({ lightBg}) => (lightBg ? '#ffffff' : '#000000')};
    @media screen and (max-width: 768px){
        padding: 100px 0px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
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
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0px;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #ffffff;
    font-size: 0.9rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.16rem;
    text-align: center;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    color: ${({lightText}) => (lightText ? '#ffffff' : '#000000')};
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        font-size: 0.7rem;
    }
`;

export const Subtitle = styled.p`
    color: ${({darkText}) => (darkText ? '#000000' : '#ffffff')};
    font-size: 0.9rem;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.16rem;
    text-align: center;
    margin-bottom: 16px;
    max-width: 440px;
    margin-bottom: 35px;
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