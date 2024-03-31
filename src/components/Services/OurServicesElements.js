import styled from "styled-components";

export const OurServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 30px 20%;
    background-color: #090a0e;
`;

export const OurServicesHeader = styled.div`
    padding: 30px 0;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const OurServicesTextWrapper = styled.div`
    padding: 30px;
`;

export const  OurServicesColumnLeft = styled.div`
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%;
    }
`;

export const  OurServicesColumnRight = styled.div`
    flex: 0 0 50%;
    display: flex;
    justify-content: right;

    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%; 
        justify-content: left;
        padding: 0 30px;
    }
`;

export const  OurServicesTopLine = styled.h6`
   font-size: 0.875rem;
   color: #888888;
   padding-bottom: 10px;
`;

export const OurServicesH1 = styled.h1`
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
    padding-bottom: 10px;
`;

export const OurServicesP = styled.p`
    font-size: 0.875rem;
    color: #888888;
`;

export const OurServicesBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: flex-end;
`;

export const TableContainer = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

export const TableRow = styled.tr`
    border: 1px solid #fff; /* Set border color to white */
`;

export const TableCell = styled.td`
    padding: 30px;
    border: 1px solid #fff;
    text-align: center;

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        text-align: center;
    }
`;

export const OurServicesIcon = styled.img`
    max-width: 100%;
    height: auto;
`;

export const OurServicesHeaderH3 = styled.h3`
    color: #fff;
    font-size: 1.25rem;
    padding: 20px 0;
`;

export const OurServicesDescription = styled.p`
    color: #888888;
`;