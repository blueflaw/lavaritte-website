import styled from 'styled-components'
import {Link} from 'react-scroll';

export const Button = styled.a`
    background: ${({dark}) => (dark ? 'transparent' : 'transparent')};
    white-space: nowrap;
    color: ${({dark}) => (dark ? '#000000' : '#ffffff')};
    border: 1px solid ${({dark}) => (dark ? '#000000' : '#ffffff')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '10px 22px')};
    cursor: pointer;
    font-weight: 10;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${({fontBig}) => (fontBig ? '1rem' : '0.9rem')};
    outline: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({dark}) => (dark ? '#000000' : '#ffffff')};
        color: ${({dark}) => (dark ? '#ffffff' : '#000000')};
    }
`;

export const ButtonShowreel = styled(Link)`
    color: #ffffff;
    background-image: linear-gradient(-90deg, #ffffff 50%, transparent 50%);
    background-size: 300%;
    transition: all 0.2s ease-in-out;
    text-transform: uppercase;
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #ffffff;
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: ${({fontBig}) => (fontBig ? '1rem' : '0.9rem')};
    transition: all 0.6s;

    &:hover {
        color: #000000;
        background-position: 99%;
        overflow: hidden;
        transform: translateX(0.5rem);
    }
`;
