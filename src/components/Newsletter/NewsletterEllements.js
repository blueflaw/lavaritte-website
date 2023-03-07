import styled from 'styled-components';

export const NewsLetterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 40vh;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        height: 70vh;
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    position: relative;
    font-family: 'Roboto', sans-serif;
    width: 1100px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px 48px;

    @media screen and (max-width: 1024px) {
        width: 864px;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        padding: 10px 0;
    }

    @media screen and (max-width: 425px) {
        width: 300px;
        padding: 10px 0;
    }
`;

export const NewsletterEmail = styled.input`
    padding: 6px 10px;
    width: 100%;
    border: 1.5px solid #00a2ff;
    color: #000;
    padding: 14px;
    font-size: 0.75rem;
    letter-spacing: 0.2rem;
    &:focus{
        outline: none;
        opacity: 1;
    }
    &::placeholder{
        //color: #00a2ff;
        opacity: .5;
    }
`;

export const NewsletterSubmit = styled.button`
    color: #fff;
    margin: 0;
    /* background-image: linear-gradient(90deg, #00a2ff 50%, transparent 50%); */
    background-image: ${({ disabled}) => (disabled ? 'linear-gradient(90deg, #b9e5ff 20%, transparent 50%)' : 'linear-gradient(90deg, #00a2ff 50%, transparent 50%)')};
    background-size: 300%;
    //transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #00a2ff;
    font-size: 0.75rem;
    font-weight: 500;
    cursor:  ${({ disabled}) => (disabled ? 'not-allowed' : 'pointer')};;
    letter-spacing: 0.2rem;
    transition: all 0.6s;
    max-width: fit-content;
    width: 100%;
    padding: 14px;
    &:hover {
        color: #00a2ff;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0rem);
    }
`;

export const NewsLetterTextWrapper = styled.div`
    width: 1100px;
    justify-content: center;
    padding: 10px 48px;

    @media screen and (max-width: 1024px) {
        width: 864px;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        padding: 0;
    }

    @media screen and (max-width: 425px) {
        width: 300px;
        padding: 10px 0;
    }
`;

export const NewsLetterH4 = styled.h4`
    color: #00a2ff;
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
    text-align: left;
    text-transform: uppercase;
    padding-bottom: 20px;
`;

export const NewsLetterP = styled.p`
    font-size: .9rem;
    color: ${({ dark}) => (dark ? '#121212' : '#f1f1f1')};
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    padding: 10px 0;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;

export const ThankyouTextWrapper = styled.div`
    width: 52vw;
    max-width: 1100px;
    margin-top: 20px;
    justify-content: center;
    background-color: #00a2ff;

    @media screen and (max-width: 1024px) {
        width: 864px;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        padding: 0;
    }

    @media screen and (max-width: 425px) {
        width: 300px;
        padding: 10px 0;
    }
`;

export const RecaptchaWrapper = styled.div`
    width: 30vw;
    align-items: left;
    justify-content: left;

    @media screen and (max-width: 1024px) {
        width: 864px;
    }

    @media screen and (max-width: 768px) {
        width: 500px;
        padding: 0;
    }

    @media screen and (max-width: 425px) {
        width: 300px;
        padding: 10px 0;
    }
`;

export const ThankyouText = styled.p`
    font-size: .9rem;
    color: #fff;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    padding: 10px;
    margin: 10px;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;