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

export const ModalWrapper = styled.div`
    width: 90vw;
    height: auto;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #121212;
    color: #000;
    position: relative;
    border-radius: 10px;
    z-index: 12;
`;

export const CloseModalButton = styled(FaTimes)`
    cursor: pointer;
    color: #fff;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 13;

    &:hover{
        color: #00a2ff;
    }
`;

export const ShowReel = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000000;
`;