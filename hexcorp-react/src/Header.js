import React from 'react';
import Nav from './Nav';
import './App.css';

function Header(props) {
  return (
    <header className="menu grey darken-4">
      <Nav navLinks={props.navLinks} />
    </header>
  );
}

export default Header;
