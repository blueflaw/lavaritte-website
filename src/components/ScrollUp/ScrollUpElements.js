import styled from "styled-components";

export const ScrollBackToTop = styled.div`
    position: fixed;
    display: none;
    bottom: 7px;
    right: 7px;
    z-index: 1;
    color: #ffffff;
    background: transparent;
    display: block;
    height: auto;
    width: auto;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 10;
    font-size: 25px;
    margin-right: 2%;
    margin-bottom: 1%;
    opacity: ${({ scrollNav}) => (scrollNav ? '0.8' : '0')};
    transition: all 0.2s ease-in-out;
    &:hover{
        opacity: 1;
    }
`;