import React from 'react';
import './App.css';

function NavList(props) {
  const NavItems = props.links.map( (link) => {
    return (
      <li className="navigation__item">
        <a className="navigation__link" href={link.href}>{link.text}</a>
      </li>
    )
  });

  return (
    <ul id="nav-mobile" className="left hide-on-med-and-down navigation__list">
      {NavItems}
    </ul>
  );
}

export default NavList;
