import styled from 'styled-components'
import { FaTimes} from 'react-icons/fa';

export const ModalBackground = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
`;

export const ModalWrapper2col = styled.div`
    width: 60vw;
    height: auto;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #121212;
    color: #f5f5f7;
    position: relative;
    border-radius: 10px;
    z-index: 12;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
        margin: 20px;
    }
`;

export const ModalHeadline = styled.p`
    font-size: 20px;
    color: #00a2ff;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding: 10px 0;
`;

export const ModalHeader = styled.p`
    font-size: 3.75rem;
    color: #f5f5f7;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding: 10px 0;

    @media screen and (max-width: 768px){
      font-size: 2.75rem;
    }
`;
export const ModalP = styled.p`
    font-size: 1.125rem;
    color: #f5f5f7;
    letter-spacing: 0.2rem;
    padding: 10px 0;
    font-weight: lighter;
`;

export const ModalContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    /* border-right: 3px solid #00a2ff; */
    width: 25vw;
    padding: 10% 40px;
    justify-content: space-evenly;
    text-align: left;

    @media screen and (max-width: 768px){
        padding: 1% 10px;
        width: 100%;
    }
`;

export const ModalContentRight = styled.form`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 35vw;
    padding: 10% 40px;
    text-align: left;
    background-color: #f5f5f7;

    @media screen and (max-width: 768px){
        padding: 10% 10px;
        width: 100%;
        border-radius: 0 0 10px 10px;
    }
`;

export const ContactFormWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const SendButton = styled.button`
  color: #00a2ff;
    cursor: pointer;
    background-image: linear-gradient(-90deg, #00a2ff 50%, transparent 50%);
    background-size: 300%;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    display: inline;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #00a2ff;;
    padding: 1rem 2rem;
    font-size: ${({fontBig}) => (fontBig ? '1rem' : '0.9rem')};
    transition: all 0.6s;

    &:hover {
        color: #fff;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;

export const FormItem = styled.div`
    width: 100%;
    padding: 10px;
`;

export const ContactLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  color: #777;
  width: 100%;
`;

export const ContactSellect = styled.select`
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: #f5f5f7;
  border-bottom: solid 1px #00a2ff;

  &:focus {
    outline: none;
    opacity: 1;
    border-bottom: solid 2px #00a2ff;
  }
  &::placeholder{
    opacity: .5;
  }
  &::after{
    padding: 10px;
    margin: 10px;
    border-bottom: solid red 1px;
  }
`;

export const ContactOption = styled.option`
  color: #090a0e;
  border-radius: 0;
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: #f5f5f7;
  border-bottom: solid 1px #00a2ff;

  &:focus {
    outline: none;
    opacity: 1;
    border-bottom: solid 2px #00a2ff;
  }
  &::placeholder{
    opacity: .5;
  }
`;

export const ContactMessage = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: #f5f5f7;
  border-bottom: solid 1px #00a2ff;

  &:focus {
    outline: none;
    opacity: 1;
    border-bottom: solid 2px #00a2ff;
  }
  &::placeholder{
    opacity: .5;
  }
`;

export const ModalWrapper = styled.div`
    width: 90vw;
    height: auto;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #121212;
    color: #f5f5f7;
    position: relative;
    border-radius: 10px;
    z-index: 12;
`;

export const CloseModalButton = styled(FaTimes)`
    cursor: pointer;
    color: #090a0e;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    padding: 0;
    z-index: 13;
    &:hover{
        color: #00a2ff;
    }

    @media screen and (max-width: 768px) {
      color: #f5f5f7;
    }
`;

export const ShowReel = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #f5f5f7;
`;