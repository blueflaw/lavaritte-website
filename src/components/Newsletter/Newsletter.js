import React, { useState} from 'react';
import { FormContainer, NewsLetterContainer, NewsletterEmail, NewsletterSubmit, NewsLetterH4, NewsLetterTextWrapper, NewsLetterP, ThankyouTextWrapper, ThankyouText } from './NewsletterEllements';
import firebase_DB from '../Firebase/firebase';
import firebase from 'firebase/compat/app';
import ReCAPTCHA from "react-google-recaptcha";
import AppConfig from '../../App.config';
export const Newsletter = () => {

  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const thankyou = 'Thank you for signing up to my newsletter! Stay tuned for exclusive updates, behind-the-scenes insights, and special promotions. Your support means the world to me!';
  const message2 = 'Stay connected with my art by signing up for my newsletter today! Get exclusive updates on new artwork releases, behind-the-scenes insights, and special promotions. Don\'t miss out, join now!';
  
  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(input){
      // add to firebase
      firebase_DB.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });

      setInput('');
      setMessage(thankyou);
      setTimeout(() => {
        setMessage('');
      }, 3000)
    }
  }

  //const message1 = 'Join my artist newsletter to stay up-to-date on my latest aThank you for signing up to my newsletter! Stay tuned for exclusive updates, behind-the-scenes insights, and special promotions. Your support means the world to me!rtwork, upcoming exhibitions, and behind-the-scenes insights into my creative process. As a subscriber, you\'ll be the first to know about new releases and receive exclusive promotions and discounts on my artwork. Connect with other art enthusiasts and be a part of my creative journey by signing up for my newsletter today!'
  
  return (
    <React.Fragment>
      <NewsLetterContainer>
        <NewsLetterTextWrapper>
          <NewsLetterH4>Newsletter</NewsLetterH4>
          <NewsLetterP dark={'dark'}>{message2}</NewsLetterP>
        </NewsLetterTextWrapper>
        <FormContainer onSubmit={submitHandler}>
          <NewsletterEmail placeholder="Your email address" type={'email'} onChange={inputHandler} value={input}/>
          <ReCAPTCHA
            sitekey={AppConfig.GOOGLE.ReCAPTCHA}
            onChange={inputHandler}
          />,
          <NewsletterSubmit type='submit'>Submit</NewsletterSubmit> 
        </FormContainer>
        {message && <ThankyouTextWrapper><ThankyouText>{message}</ThankyouText></ThankyouTextWrapper>}
      </NewsLetterContainer>
    </React.Fragment>
  )
}
