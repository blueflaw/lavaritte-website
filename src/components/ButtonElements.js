import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    background: transparent;
    color: #ffffff;
    border: 1px solid #ffffff;
    white-space: nowrap;
    padding: 10px 22px;
    cursor: pointer;
    font-weight: 10;
    letter-spacing: 0.16rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ffffff;
        color: #000000;
    }
`;