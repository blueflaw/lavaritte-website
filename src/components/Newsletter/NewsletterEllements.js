import styled from 'styled-components';

export const NewsLetterContainer = styled.div`
    /* not sure yet about this color might change later */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 40vh;
    /* background: #000000 url("https://cdna.artstation.com/p/assets/images/images/019/381/052/large/allard-lavaritte-the-archer-no-eyeglass.jpg") no-repeat fixed center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */
    flex-direction: column;
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

export const FormContainer = styled.form`
    position: relative;
    font-family: 'Roboto', sans-serif;
    width: 50vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 20px;
`;

export const NewsletterEmail = styled.input`
    padding: 6px 10px;
    width: 50%;
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
    background-image: linear-gradient(90deg, #00a2ff 50%, transparent 50%);
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
    cursor: pointer;
    letter-spacing: 0.2rem;
    transition: all 0.6s;
    max-width: fit-content;
    padding: 14px;
    &:hover {
        color: #00a2ff;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;

export const NewsLetterTextWrapper = styled.div`
    width: 50vw;
    justify-content: center;
    padding: 0 10vw;
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
    width: 30vw;
    margin-top: 20px;
    justify-content: center;
    background-color: #00a2ff;
`;

export const RecaptchaWrapper = styled.div`
    width: 30vw;
    margin-top: 20px;
    justify-content: center;
`;

export const ThankyouText = styled.p`
    font-size: .9rem;
    color: #fff;
    letter-spacing: 0.16rem;
    word-wrap: break-word;
    line-height: 24px;
    text-align: left;
    padding: 10px 0;
    margin-left: 20px;
    @media only screen and (max-width: 768px){
        max-width: 90%;
    }
`;