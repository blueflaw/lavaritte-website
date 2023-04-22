import React, { useRef, useEffect, useCallback, useState } from 'react';
import { CloseModalButton, ContactFormWrapper, ContactInput, ContactLabel, ContactMessage, ContactOption, ContactSellect, FormItem, ModalBackground, ModalContentLeft, ModalContentRight, ModalHeader, ModalHeadline, ModalP, ModalWrapper2col, SendButton } from './ModalElements';


export const ContactModal = ({ showModal, setShowModal }) => {
    const modalRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        howcanihelp: '',
        message: '',
    });

    const closeModal = e => {
        document.body.style.overflow = 'unset';
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
    };
    
    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
            document.body.style.overflow = 'unset';
            setShowModal(false);
            }
        },
    [setShowModal, showModal]
    );

    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };


    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => {
            document.removeEventListener('keydown', keyPress);
        }
        }, [keyPress]
    );
  return (
    <React.Fragment>
        {showModal ? (
            <ModalBackground onClick={closeModal} ref={modalRef}>
                <ModalWrapper2col showModal={showModal}>
                    <ModalContentLeft>
                        <ModalHeadline>let's talk</ModalHeadline>
                        <ModalHeader>I'M HERE TO HELP YOU</ModalHeader>
                        <ModalP>You're one step closer to making an outstanding brand!</ModalP>
                        <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)}/>
                    </ModalContentLeft>
                    <ModalContentRight onSubmit={handleSubmit}>
                        <ContactFormWrapper>
                            <FormItem>
                                <ContactLabel>Your Name</ContactLabel>
                                <ContactInput type="text" name="name" placeholder="First Name" htmlFor='name' onChange={handleChange} required/>
                            </FormItem>
                            <FormItem>
                                <ContactLabel>Your Email</ContactLabel>
                                <ContactInput type="email" name="email" placeholder="me@domain.com" htmlFor='email' onChange={handleChange} required/>
                            </FormItem>
                            <FormItem>
                                <ContactLabel>Country / City</ContactLabel>
                                <ContactInput type="text" name="address" placeholder="" htmlFor='address' onChange={handleChange} required/>
                            </FormItem>
                            <FormItem>
                                <ContactLabel>How Can I Help You?</ContactLabel>
                                <ContactSellect type="text" name="howcanihelp" placeholder="Please select" htmlFor='howcanihelp' onChange={handleChange} required>
                                    <ContactOption>Please select</ContactOption>
                                    <ContactOption value="Web Design and Development">Web Design and Development</ContactOption>
                                    <ContactOption value="UI and UX Design">UI and UX Design</ContactOption>
                                    <ContactOption value="Design Consultaion">Design Consultaion</ContactOption>
                                    <ContactOption value="Product Review (Partnership and Collaborations)">Product Review (Partnership and Collaborations)</ContactOption>
                                    <ContactOption value="Talks / Seminars / Webinars Invitation">Talks / Seminars / Webinars Invitation</ContactOption>
                                    <ContactOption value="Others">Others</ContactOption>
                                </ContactSellect>
                            </FormItem>
                        </ContactFormWrapper>
                        <FormItem>
                            <ContactLabel>Your Message Here</ContactLabel>
                            <ContactMessage rows="4" cols="50" type="text" name="message" placeholder="Enter text here..." htmlFor='message' onChange={handleChange} required/>
                        </FormItem>
                        <FormItem style={{textAlign: 'right'}}>
                            <SendButton type='submit'>Send</SendButton>
                        </FormItem>
                    </ModalContentRight>
                    
                </ModalWrapper2col>
                    
            </ModalBackground>
        ): null}
    </React.Fragment>
  )
}
