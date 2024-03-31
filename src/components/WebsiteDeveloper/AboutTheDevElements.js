import styled from "styled-components";

export const AboutTheDevContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px 20%;
    background-color: #090a0e;
`;

export const  AboutTheDevColumnLeft = styled.div`
     flex: 0 0 60%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%;
    }
`;

export const  AboutTheDevColumnRight = styled.div`
    flex: 0 0 40%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%; 
    }
`;

export const  AboutTheDevImageWrapper = styled.div`
    text-align: center;
    overflow: hidden;
    height: 100%;
    display: flex; 
    align-items: stretch; 
    padding-top: 30px;

    @media (max-width: 768px) {
        padding: 30px;
    }
`;

export const  AboutTheDevImage = styled.img`
   width: 100%; 
   height: auto;
   object-fit: cover;
`;

export const AboutTheDevTextWrapper = styled.div`
    text-align: left;
    justify-content: center;
    padding: 30px;
`;

export const  AboutTheDevTopLine = styled.h6`
   font-size: 0.875rem;
   color: #888888;
   padding-bottom: 10px;
`;

export const AboutTheDevH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
    padding-bottom: 10px;
`;

export const AboutTheDevP = styled.p`
    font-size: 0.875rem;
    color: #888888;
`;

export const AboutTheDevBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;