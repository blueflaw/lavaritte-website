import React, { useState } from 'react';
import { ButtonContact, ContactContainer, ContactH3, ContactP, ContactTextWrapper, ArrowForward, ArrowRight} from './ContactEllements';
import { ContactModal } from '../Modal/ContactModal';

export const Contact = () => {
  const [hover, setHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  const openModal = () => {
    setShowModal(prev => !prev);
  }

  return (
    <React.Fragment id='Contact'>
        <ContactModal showModal={showModal} setShowModal={setShowModal}/>
        <ContactContainer>
            <ContactTextWrapper>
                <ContactP>have a project in mind?</ContactP>
                <ContactH3>You’re one step closer to making an outstanding brand!</ContactH3>
                <ButtonContact to={'Showcase'} onMouseEnter={onHover}onMouseLeave={onHover} onClick={openModal}>
                    Let's Talk {hover ? <ArrowForward /> : <ArrowRight/>}
                </ButtonContact>
            </ContactTextWrapper>
        </ContactContainer>
    </React.Fragment>
  )
}
