import React, { useRef, useEffect, useCallback } from 'react';
import Vimeo from '@u-wave/react-vimeo';
import { CloseModalButton, ModalBackground, ModalWrapper } from './ModalElements'


export const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef(null);
    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
    };
    
    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
            setShowModal(false);
            //console.log('I pressed');
            }
        },
    [setShowModal, showModal]
    );

    useEffect(
        () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
  return (
    <React.Fragment>
        {showModal ? (
            <ModalBackground onClick={closeModal} ref={modalRef}>
                <ModalWrapper showModal={showModal}>
                    <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)}/>
                    {/* <ShowReel controls autoPlay loop src={Video} type='video/mp4'/> */}
                    {
                        setShowModal && <Vimeo style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            background: '#000000',
                        }}
                        video="843816923"
                        autoplay
                        width={window.innerWidth - 150}
                        />
                    }
                </ModalWrapper>
                    
            </ModalBackground>
        ): null}
    </React.Fragment>
  )
}
