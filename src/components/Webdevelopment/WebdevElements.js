import styled from "styled-components";

export const WebDevContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    background-color: #090a0e;
    /* background: #000000 url("https://cdna.artstation.com/p/assets/images/images/019/381/052/large/allard-lavaritte-the-archer-no-eyeglass.jpg") no-repeat fixed center center; */
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
    margin: 30% 22vw 15%;
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
    font-size: 3.1rem;
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

export const OurServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 24px 20%;
    background-color: #090a0e;

    @media only screen and (max-width: 425px) {
        padding: 30px;
    }
`;

export const OurServicesContent = styled.div`
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 6% 20px;
    justify-content: center;
    background-color: #00A2FF;
    @media only screen and (max-width: 768px) {
    
    }
`;

export const OurServicesInfoWrap = styled.div`
    padding: 20px;
    justify-content: center;
    background-color: #00A2FF;
`;

export const OurServicesInfo = styled.div`
    padding: 0;
    justify-content: center;
    background-color: #00A2FF;
`;

export const HorizontalLine = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #fff; /* Change the color as needed */
    margin: 15px 0; /* Adjust margin as needed */
    border: none;
`;

export const OurServicesColumnLeft = styled.div`
    flex: 0 0 60%;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%;
    }
`;

export const OurServicesColumnRight = styled.div`
    flex: 0 0 40%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        flex: 0 0 auto; 
        max-width: 100%; 
    }
`;

export const WebDevContentImageWrapper = styled.div`
    text-align: center;
    overflow: hidden;
    height: 100%;
    display: flex; 
    align-items: stretch; 
    padding-top: 30px;

    @media (max-width: 768px) {
        padding: 30px;
    }

    @media only screen and (max-width: 425px) {
        padding: 10px;
    }
`;

export const OurservicesImage = styled.img`
   width: 100%; 
   height: auto;
   object-fit: cover;
`;

export const WebDevContentTextWrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 425px) {
        padding: 10px;
    }

    
    
`;

export const OurservicesButtomContent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 30px;

    @media only screen and (max-width: 425px) {
        padding: 10px;
    }
`;

export const OurservicesButtomContentTextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 20px;
    text-align: center;
    background-color: #fff;
`;

export const OurservicesButtomItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtomItemHeader = styled.h6`
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    color: #00A2FF;
    padding-bottom: 10px;
`;
export const ButtomItemP = styled.p`
    font-size: 0.875rem;
    font-weight: lighter;
    color: #888888;
`;

export const WebDevContentH1 = styled.h1`
    color: #F5F5F7;
    font-size: 3rem;
    text-align: left;
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
`;

export const WebDevContentH2 = styled.h2`
    color: #F5F5F7;
    font-size: 2.5rem;
    text-align: left;
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding-bottom: 20px;
`;

export const WebDevContentH5 = styled.h5`
    color: #F5F5F7;
    font-size: 0.875rem;
    text-align: left;
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-transform: capitalize;
    padding-bottom: 20px;
`;

export const WebDevContentP = styled.p`
    color: #F5F5F7;
    font-size: 0.75rem;
    text-align: left;
    font-weight: 100;
`;