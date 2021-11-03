import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    /* background: transparent; */
    background: ${({primary}) => (primary ? '#ffffff' : 'transparent')};
    white-space: nowrap;
    /* color: #ffffff; */
    color: ${({dark}) => (dark ? '#000000' : '#ffffff')};
    border: 1px solid #ffffff;
    white-space: nowrap;
    /* padding: 10px 22px; */
    padding: ${({big}) => (big ? '14px 48px' : '10px 22px')};
    cursor: pointer;
    font-weight: 10;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;
    /* font-size: 0.9rem; */
    font-size: ${({fontBig}) => (fontBig ? '1rem' : '0.9rem')};
    outline: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? 'transparent' : '#ffffff')};
        color: ${({dark}) => (dark ? '#ffffff' : '#000000')};
    }
`;