import React, { useState, useEffect } from 'react';
import { QuotsContainer, QuotesTextWrapper, QuotesH3, QuotesAuthor } from './QuotesEllements';
import { StoicQuotes } from './StoicData';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {

    let randomNum = Math.floor(Math.random() * StoicQuotes.length);
    let randomQuote = StoicQuotes.at(randomNum);

    setQuote(randomQuote.quotes);
    setAuthor(randomQuote.author);
  }

  return (
    <React.Fragment>
      <QuotsContainer>
        <QuotesTextWrapper>
          <QuotesH3>{quote}</QuotesH3>
          <QuotesAuthor>- {author}</QuotesAuthor>
        </QuotesTextWrapper>
      </QuotsContainer>
    </React.Fragment>
  )
}

export default Quotes;