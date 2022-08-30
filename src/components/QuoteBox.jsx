import { useState } from 'react'
import React from 'react'
import quotes from './quotes.json'
import Button from './Button.jsx'

const QuoteBox = ({indexColor, indexQuote, fontColor}) => {

  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [index, setIndex] = useState( randomIndex )



  return(
    <div>

      <h1  style={{color: fontColor}}><i class="fa-solid fa-quote-left"></i>{quotes[indexQuote].quote}</h1>
      <p style={{color: fontColor}}>{quotes[indexQuote].author}</p>
    </div>
  );
};

export default QuoteBox;
