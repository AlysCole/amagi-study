import React from 'react';
import NavList from './NavList';
import './App.css';

function Nav(props) {
  return (
    <nav className="grey darken-4">
      <div className="nav-wrapper">
        <a href="#!">
          <img className="brand-logo right" src="images/logo.svg" alt="HexCorp Logo" />
        </a>
        <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <NavList links={props.navLinks} />
      </div>
    </nav>
  );
}

export default Nav;
