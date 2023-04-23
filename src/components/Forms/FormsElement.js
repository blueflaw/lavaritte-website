import styled from 'styled-components';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import {Link} from 'react-router-dom';

export const FormsHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 70vh;
    background-color: #111;
    background: url(${props => props.bgUrl}) #111 no-repeat center center / cover;
    background-size: cover; /*for safari we can add this sperately*/
`;



export const FormsTextWrapper = styled.div`
    width: 100%;
    justify-content: left;
    padding-left: 28px;
    padding-top: 20%;
    max-width: 1100px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 425px) {
        padding: 20px;
    }
`;

export const FormsH3 = styled.h3`
    color: #f5f5f7;
    text-align: left;
    letter-spacing: 0.16rem;
    font-size: 4rem;
    padding: 20px;
    text-transform: capitalize;

    @media only screen and (max-width: 768px){
      font-size: 2rem;
    }
`;


export const FormSubtitle = styled.p`
    color: #f5f5f7;
    font-size: .9rem;
    letter-spacing: 0.2rem;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 20px;
`;


export const FormsAuthor = styled.p`
    color: #f5f5f7;
    font-size: .9rem;
    letter-spacing: 0.2rem;
    
    text-align: right;
    padding-bottom: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-bottom: 30px;
`;

export const Colapsable = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  background-color: #00a2ff;
  cursor: pointer;
  padding: 18px;
  letter-spacing: 0.2rem;
  width: 100%;
  border-radius: 10px;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;

  &:hover {
    background-color: #10a2dd;
  }
`;

export const ColapsableHeader = styled.p`
  color: #f5f5f7;
`;

export const ColapsableIcon = styled.p`
  color: #f5f5f7;
`;

export const CircleMinus = styled(FiMinusCircle)`
    margin-left: 8px;
    font-size: 1.1rem;
`;

export const CirclePlus = styled(FiPlusCircle)`
    margin-left: 8px;
    font-size: 1.1rem;
`;

export const ColapsableContentWapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    grid-gap: var(--auto-grid-gap, 0);
    padding: 10px;
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }
`;

export const ColapsableContentWapper2col = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-gap: var(--auto-grid-gap, 0);
    padding: 10px;
    width: 100%;
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }
`;

export const ColapsableContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 5px;
    
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
`;

export const RadioWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    grid-gap: var(--auto-grid-gap, 0);
    padding: 10px;
    @media screen and (max-width: 1024px){
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }
`;

export const FirstLastNameContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
    width: 100%;

    @media only screen and (max-width: 768px) {
      flex-direction: row;
    }

    @media only screen and (max-width: 425px) {
      flex-direction: column;
    }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f5f5f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 162, 255, 0.2), 0 6px 20px 0 rgba(0, 162, 255, 0.19);
  width: 50%;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const TermsLink = styled(Link)`
    color: #00a2ff;
    text-decoration: underline;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    &:hover{
        color: #00a2ff;
        transition: 0.3s ease-out;
    }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  border: solid 1px #00a2ff;
  border-radius: 5px;

  &:focus {
    outline: none;
    opacity: 1;
  }
  &::placeholder{
    opacity: .5;
  }
`;

export const RadioInput = styled.input`
  border: solid 1px #00a2ff;
  padding-left: 10px;
  margin-left: 10px;
  margin-top: -10px;
  &:focus {
    outline: none;
    opacity: 1;
  }
  &::placeholder{
    opacity: .5;
  }
`;

export const RadioLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  margin-left: 10px;
  padding-bottom: 5px;
  color: #00a2ff;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  color: #00a2ff;
`;

export const FormP = styled.p`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  padding-bottom: 5px;
  color: #00a2ff;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  padding: 18px;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  background-color: #00a2ff;
  letter-spacing: 0.2rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #10a2dd;
  }
`;
