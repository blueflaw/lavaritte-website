import styled from "styled-components";

export const ArtContaner = styled.div`
    color: #ffffff;
    width: 100%;
    background: #000000;
    --flow-space: 2em;
`;

export const ArtWrapper = styled.div`
    display: grid;
    z-index: 1;
    /* height: 450px;
    width: 450px; */
    margin-right: auto;
    margin-left: auto;
    padding: 0%;
    justify-content: center;
`;

export const ArtRow = styled.div`
    display: grid;
    /* grid-auto-columns: minmax(auto, 1fr);  */
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1` : `'col1 col2'`)};
    grid-gap: var(--auto-grid-gap, 0);
    padding: 0;
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    grid-area: col1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    aspect-ratio: 1/1;
    position: relative;
    padding: 1.5rem;
    color: #ffffff;
    backface-visibility: hidden;
    text-decoration: none;
    overflow: hidden;

    &::before, &::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        /*inset: 0;*/
        top: 0;
        left: 0;
    }

    &:focus{
        outline: 0.5rem solid white;
        outline-offset: -0.5rem;
    }

    &:hover{
        transform: none;
    }
`;

export const Column1Img = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    z-index: -1;
    object-fit: cover;
    filter: grayscale(1);
    transition: filter 200ms ease, transform 250ms linear;
`;

export const Subtile = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    opacity: 0;
    transition: 300ms opacity linear, 300ms transform ease-in-out;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0px 0px 10px 0px;
    padding-right: 0px;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const ArtTitle = styled.h1`
    color: ${({lightText}) => (lightText ? '#ffffff' : '#000000')};
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        font-size: 0.5rem;
    }
`;

export const RowTitle = styled.h2`
    color: ${({lightText}) => (lightText ? '#ffffff' : '#000000')};
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        font-size: 0.7rem;
    }
`;

export const Poster = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 500px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    :hover{
        transform: scale(1.08);
    }
`;

export const RowPoster = styled.div`
    display: flex; 
    overflow: hidden;
    padding: 0px;
`;

export const ImageContainer = styled.div`
    position: relative;
    margin-bottom: -4px;
`;

export const Overlay = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8));
`;

export const TextWrapper = styled.div`
    position: absolute;
    bottom: -80%;
    padding-left: 20px;
    height: 100%;
    width: 100%;
    opacity: 1;
    transition: .5s ease;

    @media screen and (max-width: 480px){
        padding-left: 5px;
    }
`;

export const OverlayTitile = styled.div`
    color: white;
    position: absolute;
    text-align: left;
    font-size: 0.8rem;
    height: 100%;
    width: 100%;
    text-align: left;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
        font-size: 0.5rem;
    }
`;