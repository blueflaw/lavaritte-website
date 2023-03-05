import React, { useState} from 'react';
import { FormContainer, NewsLetterContainer, NewsletterEmail, NewsletterSubmit, NewsLetterH4, NewsLetterTextWrapper, NewsLetterP } from './NewsletterEllements';
import firebase_DB from '../Firebase/firebase';
import firebase from 'firebase/compat/app';

export const Newsletter = () => {

  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(input){
      console.log(input);
      // add to firebase
      firebase_DB.collection("emails").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput('');
    }
  }

  //const message1 = 'Join my artist newsletter to stay up-to-date on my latest artwork, upcoming exhibitions, and behind-the-scenes insights into my creative process. As a subscriber, you\'ll be the first to know about new releases and receive exclusive promotions and discounts on my artwork. Connect with other art enthusiasts and be a part of my creative journey by signing up for my newsletter today!'
  const message2 = 'Stay connected with my art by signing up for my newsletter today! Get exclusive updates on new artwork releases, behind-the-scenes insights, and special promotions. Don\'t miss out, join now!'
  return (
    <React.Fragment>
      <NewsLetterContainer>
        <NewsLetterTextWrapper>
          <NewsLetterH4>Newsletter</NewsLetterH4>
          <NewsLetterP dark={'dark'}>{message2}</NewsLetterP>
        </NewsLetterTextWrapper>
        <FormContainer onSubmit={submitHandler}>
          <NewsletterEmail placeholder="Your email address" type={'email'} onChange={inputHandler} value={input}/>
          <NewsletterSubmit type='submit'>Submit</NewsletterSubmit> 
        </FormContainer>
      </NewsLetterContainer>
    </React.Fragment>
  )
}
