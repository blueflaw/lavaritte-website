import styled from "styled-components";

export const ButtonDark = styled.a`
    color: #fff;
    margin: 16px;
    background-image: linear-gradient(90deg, #000 50%, transparent 50%);
    background-size: 300%;
    //transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #000;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 0.2rem;
    transition: all 0.6s;
    max-width: fit-content;
    padding: 14px;
    &:hover {
        color: #000000;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;

export const StoreWrapper = styled.div`
    display: grid;
    z-index: 1;
    margin-right: auto;
    margin-left: auto;
    padding: 0%;
    justify-content: center;
    background-color: #efefef;
`;

export const ViewAllWrapper = styled.div`
    display: flex;
    padding: 30px;
    justify-content: center;
    text-align: center;
    position: relative;
`;

export const StoreRow = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: var(--auto-grid-gap, 0);
    padding: 0;

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: var(--auto-grid-gap, 0);
    }
    @media screen and (max-width: 425px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: var(--auto-grid-gap, 0);
    }
`;

export const StoreTitle = styled.h1`
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

export const StoreCard = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 500px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    padding-top: 24px;
    color: #bbb;
    cursor: pointer;
`;

export const StorePostWrap = styled.a`
    display: flex;
    flex-direction: column;
    margin: 12px;
    text-decoration: none;
    color: #000000;
    
    &:hover {
        //box-shadow: 0 4px 8px 0 rgba(0, 162, 255, 0.2), 0 6px 20px 0 rgba(0, 162, 255, 0.19);
         & span{
            transform: scale(1.08);
            filter: grayscale(0%);
        }
        
        & h1{
            color: #00a2ff;
        }
    } 
`;

export const RowPoster = styled.div`
    display: flex; 
    overflow: hidden;
    padding: 0px;
`;

export const StoreTumbnailWrapper = styled.span`
    //margin: 0 0 20px;
    display: flex;
    overflow: hidden;
    transition: transform 450ms;
`;

export const StorePost = styled.div`
    position: static;
    overflow: hidden;
`;

export const StoreThumbnail = styled.img`
    object-fit: contain;
    width: auto;
    max-height: 300px;
    margin: 0%;
    transition: transform 450ms;
    overflow: hidden;
    //filter: grayscale(30%);
    /* :hover{
        transform: scale(1.08);
        filter: grayscale(0%);
    } */
`;

export const StoreHeader = styled.div`
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    padding-top: 10px;
    color: #fff;
`;

export const TextWrapper = styled.div`
    display: inline-block;
    position: relative;
    bottom: 0;
    height: 35%;
    width: 100%;
    opacity: 1;
    transition: .5s ease;
    background-color: #222;
`;

export const TextWrap = styled.div`
    padding: 10px;
`;

export const StoreInfoRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px;
`;

export const AuthorWrap = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    justify-content: space-between;
`;

export const AuthorDisplayPicture = styled.img`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: block;
`;

export const Type = styled.p`
    color: #bbb;
    white-space: nowrap;
    font-size: 0.9rem;
`;

export const Prize = styled.p`
    
    color: #fff;
    padding: 10px;
    font-size: 1rem;
`;
