import React from 'react'
import quotes from './quotes.json'
import App from '../App.jsx'


const Button = () => {

  const changeQuote = () => {
    const randomIndexForQuote = Math.floor(Math.random() * quotes.length)
    const randomIndexForColor = Math.floor(Math.random() * colorArray.length)

    setIndexForColor( randomIndexForColor )
    setIndexForQuote( randomIndexForQuote )

    }


  return(
    <div>
      <button onClick={changeQuote}>hola</button>
    </div>
  );
};

export default Button;
