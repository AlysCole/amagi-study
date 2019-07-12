import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function Header(props) {
  return (
    <header className="Header">
      <img className="logo" alt="Challonge logo" src={logo} />
      <nav>
        <ul>
          <li>Tournaments</li>
        </ul>
      </nav>
      <div className="notification-dropdown">
        <div className="notification-toggle">
          <a className="toggle" href="#">
            <i class="fas fa-bell"></i>
          </a>
        </div>
      </div>
      <div className="account-dropdown">
        <div className="account-toggle">
          <a className="toggle" href="#">
            <img className="account-img" alt="Your image" />
            <div>{props.user.name}</div>
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

export default Header;
