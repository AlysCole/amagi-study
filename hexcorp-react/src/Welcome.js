import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome() {
  const [ sloganClass, setSloganClass ] = useState('welcome__slogan');
  const [ buttonClass, setButtonClass ] = useState('waves-light btn-large teal lighten-1 welcome__button');

  const sloganText = "Creative Technologies".split('').map((l) => {
    return (
      <span>{l}</span>
    );
  });

  useEffect(() => {
    setSloganClass(sloganClass + ' welcome__slogan--animated');
    setButtonClass(buttonClass + ' welcome__button--animated');
  });

  return (
    <article className="welcome grey darken-4 grey-text text-lighten-5">
      <img className="welcome__image"
        src="images/circuit_small.png"
        srcSet="images/circuit_large.png 3688w,
                images/circuit_small.png 1000w"
        sizes="(min-width: 800px) 500px,
        (max-width: 800px) 60vw" />
      <div className="welcome__content">
        <h1 className={sloganClass}>
          {sloganText}
        </h1>
        <a href="#" className={buttonClass}>Contact Us</a>
      </div>
    </article>
  );
}

export default Welcome;